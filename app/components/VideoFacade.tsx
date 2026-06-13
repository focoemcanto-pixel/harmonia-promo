'use client'
import { useState, useRef } from 'react'

interface Props {
  videoId: string
  title: string
  startSeconds?: number
  thumbnailSrc?: string
}

export default function VideoFacade({ videoId, title, startSeconds, thumbnailSrc }: Props) {
  const [playing, setPlaying] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const thumbSrc = thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  const params = new URLSearchParams({
    autoplay: '1',
    playsinline: '0',
    controls: '1',
    modestbranding: '1',
    rel: '0',
    iv_load_policy: '3',
    fs: '1',
    ...(startSeconds ? { start: String(startSeconds) } : {}),
  })
  const embedSrc = `https://www.youtube.com/embed/${videoId}?${params}`

  async function requestFullscreen(el: HTMLElement | null) {
    if (!el) return false

    try {
      if (el.requestFullscreen) {
        await el.requestFullscreen()
        return true
      }
      if ((el as any).webkitRequestFullscreen) {
        ;(el as any).webkitRequestFullscreen()
        return true
      }
      if ((el as any).mozRequestFullScreen) {
        ;(el as any).mozRequestFullScreen()
        return true
      }
      if ((el as any).msRequestFullscreen) {
        ;(el as any).msRequestFullscreen()
        return true
      }
    } catch {
      return false
    }

    return false
  }

  async function handleFullscreen() {
    const iframe = iframeRef.current
    const wrapper = wrapperRef.current

    const iframeOpened = await requestFullscreen(iframe)
    if (iframeOpened) return

    await requestFullscreen(wrapper)
  }

  return (
    <div ref={wrapperRef} className="video-facade">
      <div
        className="video-thumb"
        onClick={() => setPlaying(true)}
        style={{
          opacity: iframeLoaded ? 0 : 1,
          pointerEvents: playing ? 'none' : 'auto',
          transition: 'opacity 0.4s ease',
        }}
      >
        <img src={thumbSrc} alt={title} />
        {!playing && (
          <div className="video-play-btn">
            <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
              <rect width="68" height="48" rx="10" fill="#FF0000"/>
              <polygon points="28,14 28,34 48,24" fill="white"/>
            </svg>
          </div>
        )}
      </div>

      {playing && (
        <iframe
          ref={iframeRef}
          src={embedSrc}
          title={title}
          onLoad={() => setIframeLoaded(true)}
          style={{ opacity: iframeLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        />
      )}

      {playing && iframeLoaded && (
        <button className="video-fullscreen-btn" onClick={handleFullscreen} aria-label="Tela cheia">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </button>
      )}
    </div>
  )
}
