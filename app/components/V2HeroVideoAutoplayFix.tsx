'use client'

import { useEffect } from 'react'

function isV2Page() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return path === '/v2' || path.startsWith('/v2/')
}

function prepareVideo(video: HTMLVideoElement) {
  video.muted = true
  video.defaultMuted = true
  video.loop = true
  video.autoplay = true
  video.playsInline = true
  video.preload = 'auto'
  video.controls = false

  video.setAttribute('muted', '')
  video.setAttribute('autoplay', '')
  video.setAttribute('loop', '')
  video.setAttribute('playsinline', '')
  video.setAttribute('webkit-playsinline', '')
  video.setAttribute('preload', 'auto')
  video.setAttribute('disablepictureinpicture', '')
  video.setAttribute('controlsList', 'nodownload nofullscreen noremoteplayback')
  video.removeAttribute('controls')
}

function playVideo(video: HTMLVideoElement) {
  prepareVideo(video)

  if (video.readyState < 2) {
    try { video.load() } catch {}
  }

  const attempt = video.play()
  if (attempt && typeof attempt.catch === 'function') {
    attempt.catch(() => {})
  }
}

export default function V2HeroVideoAutoplayFix() {
  useEffect(() => {
    if (!isV2Page()) return

    let resumeTimer: number | null = null

    const getVideos = () => Array.from(document.querySelectorAll<HTMLVideoElement>('video.v2-video'))

    const playAll = () => {
      getVideos().forEach(playVideo)
    }

    const schedulePlay = () => {
      if (resumeTimer) window.clearTimeout(resumeTimer)
      resumeTimer = window.setTimeout(playAll, 80)
    }

    const handlePause = (event: Event) => {
      const video = event.currentTarget as HTMLVideoElement | null
      if (!video) return
      if (document.hidden) return
      window.setTimeout(() => playVideo(video), 120)
    }

    const bindVideos = () => {
      getVideos().forEach((video) => {
        prepareVideo(video)
        video.removeEventListener('pause', handlePause)
        video.addEventListener('pause', handlePause)
      })
      playAll()
    }

    bindVideos()

    const observer = new MutationObserver(bindVideos)
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('visibilitychange', schedulePlay)
    window.addEventListener('pageshow', schedulePlay)
    window.addEventListener('focus', schedulePlay)
    document.addEventListener('touchstart', schedulePlay, { passive: true })
    document.addEventListener('click', schedulePlay, { passive: true })

    const interval = window.setInterval(() => {
      getVideos().forEach((video) => {
        if (video.paused && !document.hidden) playVideo(video)
      })
    }, 1500)

    return () => {
      if (resumeTimer) window.clearTimeout(resumeTimer)
      window.clearInterval(interval)
      observer.disconnect()
      getVideos().forEach((video) => video.removeEventListener('pause', handlePause))
      document.removeEventListener('visibilitychange', schedulePlay)
      window.removeEventListener('pageshow', schedulePlay)
      window.removeEventListener('focus', schedulePlay)
      document.removeEventListener('touchstart', schedulePlay)
      document.removeEventListener('click', schedulePlay)
    }
  }, [])

  return null
}
