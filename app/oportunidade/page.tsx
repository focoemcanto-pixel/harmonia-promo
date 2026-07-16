'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const VIDEO_ID = 'UkVOl612fOo'
const OFFER_PATH = '/v2'
const EBOOK_URL = '/downloads/o-segredo-da-divisao-vocal-marcos-cruz.pdf'
const STORAGE_KEY = 'oportunidade_aula_desbloqueada'

declare global {
  interface Window {
    YT?: any
    onYouTubeIframeAPIReady?: () => void
  }
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
  const total = Math.floor(seconds)
  const minutes = Math.floor(total / 60)
  const secs = total % 60
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export default function OportunidadePage() {
  const playerHostRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<any>(null)
  const progressTimerRef = useRef<number | null>(null)
  const [ready, setReady] = useState(false)
  const [started, setStarted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    try {
      setUnlocked(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {}
  }, [])

  useEffect(() => {
    let cancelled = false

    const createPlayer = () => {
      if (cancelled || !playerHostRef.current || !window.YT?.Player || playerRef.current) return

      playerRef.current = new window.YT.Player(playerHostRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (event: any) => {
            if (cancelled) return
            setReady(true)
            const total = Number(event.target.getDuration?.() || 0)
            if (total > 0) setDuration(total)
          },
          onStateChange: (event: any) => {
            if (cancelled) return
            const state = event.data
            if (state === window.YT.PlayerState.PLAYING) {
              setStarted(true)
              const total = Number(event.target.getDuration?.() || 0)
              if (total > 0) setDuration(total)
            }
            if (state === window.YT.PlayerState.ENDED) unlockOffers()
          }
        }
      })
    }

    if (window.YT?.Player) {
      createPlayer()
    } else {
      const existing = document.querySelector('script[data-youtube-iframe-api]')
      const previousReady = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        previousReady?.()
        createPlayer()
      }

      if (!existing) {
        const script = document.createElement('script')
        script.src = 'https://www.youtube.com/iframe_api'
        script.async = true
        script.dataset.youtubeIframeApi = 'true'
        document.head.appendChild(script)
      }
    }

    return () => {
      cancelled = true
      if (progressTimerRef.current) window.clearInterval(progressTimerRef.current)
      try { playerRef.current?.destroy?.() } catch {}
      playerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!ready) return

    progressTimerRef.current = window.setInterval(() => {
      const player = playerRef.current
      if (!player) return

      const now = Number(player.getCurrentTime?.() || 0)
      const total = Number(player.getDuration?.() || duration || 0)
      setCurrentTime(now)
      if (total > 0) setDuration(total)

      const watchedEnough = total > 0 && (now >= total - 4 || now / total >= 0.985)
      if (watchedEnough) unlockOffers()
    }, 500)

    return () => {
      if (progressTimerRef.current) window.clearInterval(progressTimerRef.current)
    }
  }, [ready, duration])

  function unlockOffers() {
    setUnlocked(true)
    try { localStorage.setItem(STORAGE_KEY, '1') } catch {}
  }

  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0
  const remaining = Math.max(0, duration - currentTime)

  const offerUrl = useMemo(() => {
    if (typeof window === 'undefined') return OFFER_PATH
    const destination = new URL(OFFER_PATH, window.location.origin)
    const current = new URLSearchParams(window.location.search)
    current.forEach((value, key) => destination.searchParams.set(key, value))
    return destination.pathname + destination.search
  }, [])

  return (
    <main className="op-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .op-page{min-height:100svh;background:radial-gradient(circle at 50% 0,rgba(245,183,61,.15),transparent 30%),linear-gradient(180deg,#140704 0%,#080808 40%,#020202 100%);color:#fff;font-family:Arial,sans-serif;padding:22px 14px 60px}.op-wrap{width:min(1080px,100%);margin:0 auto}.op-top{text-align:center;margin:8px auto 24px}.op-brand{font-size:.95rem;font-weight:1000;letter-spacing:.18em;text-transform:uppercase}.op-brand span{color:#f5b73d}.op-badge{display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:9px 14px;border:1px solid rgba(245,183,61,.3);border-radius:999px;background:rgba(245,183,61,.08);font-size:.74rem;font-weight:900;letter-spacing:.11em;text-transform:uppercase}.op-title{font-size:clamp(2.35rem,7vw,5.7rem);line-height:.92;letter-spacing:-.06em;text-transform:uppercase;margin:18px auto 14px;max-width:900px}.op-title span{color:#f5b73d}.op-sub{max-width:760px;margin:0 auto;color:rgba(255,255,255,.72);font-size:clamp(1rem,2vw,1.22rem);line-height:1.55}.op-card{position:relative;border:1px solid rgba(245,183,61,.25);border-radius:30px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.015));padding:clamp(14px,3vw,28px);box-shadow:0 34px 100px rgba(0,0,0,.5);overflow:hidden}.op-card:before{content:'';position:absolute;inset:-30% 15% auto;height:55%;background:radial-gradient(circle,rgba(245,183,61,.18),transparent 68%);filter:blur(20px)}.op-player{position:relative;z-index:2;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:#000;box-shadow:0 18px 48px rgba(0,0,0,.45)}.op-player iframe{width:100%;height:100%;display:block}.op-status{position:relative;z-index:2;margin-top:18px}.op-meta{display:flex;justify-content:space-between;gap:18px;align-items:center;font-size:.9rem;color:rgba(255,255,255,.66);margin-bottom:10px}.op-meta strong{color:#f5b73d}.op-track{height:9px;border-radius:999px;background:rgba(255,255,255,.1);overflow:hidden}.op-fill{height:100%;border-radius:inherit;background:linear-gradient(90deg,#f2a51d,#ffe180);transition:width .45s ease}.op-lock{margin:22px auto 0;text-align:center;border:1px dashed rgba(245,183,61,.3);border-radius:22px;padding:22px;background:rgba(245,183,61,.055)}.op-lock strong{display:block;font-size:1.12rem;margin-bottom:6px}.op-lock p{margin:0;color:rgba(255,255,255,.66);line-height:1.55}.op-actions{display:grid;grid-template-columns:1.15fr .85fr;gap:14px;margin-top:22px;animation:opReveal .7s cubic-bezier(.2,.8,.2,1) both}.op-btn{min-height:72px;border-radius:20px;display:flex;align-items:center;justify-content:center;text-align:center;text-decoration:none;padding:18px 20px;font-weight:1000;text-transform:uppercase;letter-spacing:.01em}.op-offer{color:#111;background:linear-gradient(135deg,#ffe383,#f0a31d);box-shadow:0 20px 44px rgba(245,183,61,.26)}.op-gift{color:#fff;border:1px solid rgba(255,255,255,.16);background:linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.035))}.op-note{text-align:center;color:rgba(255,255,255,.5);font-size:.82rem;margin:14px 0 0}.op-proof{margin-top:34px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.op-proof article{border:1px solid rgba(255,255,255,.09);border-radius:20px;padding:20px;background:rgba(255,255,255,.025)}.op-proof b{display:block;color:#f5b73d;margin-bottom:8px}.op-proof p{margin:0;color:rgba(255,255,255,.65);line-height:1.5}@keyframes opReveal{from{opacity:0;transform:translateY(22px) scale(.98)}to{opacity:1;transform:none}}@media(max-width:760px){.op-page{padding:12px 10px 46px}.op-title{font-size:clamp(2.1rem,11.2vw,3.3rem)}.op-card{border-radius:24px;padding:10px}.op-player{border-radius:17px}.op-status{padding:0 7px 10px}.op-actions{grid-template-columns:1fr}.op-proof{grid-template-columns:1fr}.op-meta{font-size:.78rem}.op-lock{padding:18px 14px}}
      ` }} />

      <div className="op-wrap">
        <header className="op-top">
          <div className="op-brand">Foco em <span>Harmonia</span></div>
          <div className="op-badge">🔒 Aula gratuita exclusiva</div>
          <h1 className="op-title">Assista até o final e <span>desbloqueie seu presente.</span></h1>
          <p className="op-sub">Nesta aula você vai entender o caminho para desenvolver a divisão vocal com mais clareza, independência e segurança.</p>
        </header>

        <section className="op-card">
          <div className="op-player">
            <div ref={playerHostRef} aria-label="Aula gratuita Foco em Harmonia" />
          </div>

          <div className="op-status">
            <div className="op-meta">
              <span>{started ? 'Aula em andamento' : 'Dê o play para começar'}</span>
              <span>{duration > 0 ? `${formatTime(currentTime)} / ${formatTime(duration)}` : 'Preparando aula...'}</span>
            </div>
            <div className="op-track" aria-label={`Progresso da aula: ${Math.round(progress)}%`}>
              <div className="op-fill" style={{ width: `${progress}%` }} />
            </div>

            {!unlocked ? (
              <div className="op-lock">
                <strong>🎁 Seu presente está protegido.</strong>
                <p>{started && duration > 0 ? `Continue assistindo. Liberação ao final da aula — faltam aproximadamente ${formatTime(remaining)}.` : 'Os botões da oferta especial e do eBook gratuito serão liberados quando você concluir a aula.'}</p>
              </div>
            ) : (
              <>
                <div className="op-actions">
                  <a className="op-btn op-offer" href={offerUrl}>Quero aproveitar a oferta promocional</a>
                  <a className="op-btn op-gift" href={EBOOK_URL} download="o-segredo-da-divisao-vocal-marcos-cruz.pdf">🎁 Baixar meu eBook gratuito</a>
                </div>
                <p className="op-note">Conteúdo liberado! Você pode baixar o material e acessar a condição especial.</p>
              </>
            )}
          </div>
        </section>

        <section className="op-proof">
          <article><b>01 — Assista</b><p>Veja a aula com atenção e entenda a lógica por trás da divisão vocal.</p></article>
          <article><b>02 — Pratique</b><p>Leve o aprendizado para seus ensaios, louvores e exercícios diários.</p></article>
          <article><b>03 — Destrave</b><p>Ao final, receba o eBook e conheça a oportunidade promocional.</p></article>
        </section>
      </div>
    </main>
  )
}
