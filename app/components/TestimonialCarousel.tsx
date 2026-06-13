'use client'

import { useState } from 'react'

type TestimonialItem =
  | { type: 'image'; id: string; n: number }
  | { type: 'video'; id: string; videoId: string; title: string }

const testimonialItems: TestimonialItem[] = [
  { type: 'image', id: 'depoimento-1', n: 1 },
  { type: 'video', id: 'video-t0rdcxxocr0', videoId: 'T0rDCxXoCR0', title: 'Depoimento em vídeo' },
  { type: 'image', id: 'depoimento-2', n: 2 },
  { type: 'image', id: 'depoimento-3', n: 3 },
  { type: 'image', id: 'depoimento-4', n: 4 },
  { type: 'image', id: 'depoimento-5', n: 5 },
  { type: 'image', id: 'depoimento-6', n: 6 },
  { type: 'image', id: 'depoimento-7', n: 7 },
]

function preconnectYouTube() {
  if (typeof document === 'undefined') return

  ;['https://www.youtube.com', 'https://i.ytimg.com', 'https://s.ytimg.com'].forEach((href) => {
    if (document.querySelector(`link[data-testimonial-video-preconnect="${href}"]`)) return

    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = href
    link.crossOrigin = 'anonymous'
    link.setAttribute('data-testimonial-video-preconnect', href)
    document.head.appendChild(link)
  })
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)

  const scrollToIndex = (index: number) => {
    const el = document.getElementById('carousel-track') as HTMLElement | null
    if (!el) return

    const slide = el.querySelector('.carousel-slide') as HTMLElement | null
    const nextIndex = Math.max(0, Math.min(index, testimonialItems.length - 1))
    const slideWidth = slide ? slide.getBoundingClientRect().width : el.clientWidth
    const gap = Number.parseFloat(getComputedStyle(el).gap || '0')

    el.scrollTo({ left: nextIndex * (slideWidth + gap), behavior: 'smooth' })
    setActiveIndex(nextIndex)
  }

  const scroll = (dir: number) => scrollToIndex(activeIndex + dir)

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn prev" aria-label="Anterior" onClick={() => scroll(-1)}>&#8249;</button>

      <div className="carousel-track" id="carousel-track">
        {testimonialItems.map((item) => (
          <div className="carousel-slide" key={item.id}>
            {item.type === 'image' ? (
              <img
                src={`/images/depoimentos/%20depoimento-${item.n}.webp`}
                alt={`Depoimento ${item.n}`}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                aria-label={item.title}
                onMouseEnter={preconnectYouTube}
                onTouchStart={preconnectYouTube}
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '9 / 16',
                  borderRadius: 26,
                  overflow: 'hidden',
                  background: '#000',
                  boxShadow: '0 8px 28px rgba(0,0,0,.35)',
                }}
              >
                {playingVideoId === item.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                  />
                ) : (
                  <button
                    type="button"
                    aria-label="Reproduzir depoimento em vídeo"
                    onClick={() => {
                      preconnectYouTube()
                      setPlayingVideoId(item.videoId)
                    }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                      cursor: 'pointer',
                      padding: 0,
                      background: '#000',
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.84 }}
                    />
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 66,
                        height: 66,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,.94)',
                        color: '#111',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: 28,
                        paddingLeft: 4,
                        boxShadow: '0 8px 28px rgba(0,0,0,.35)',
                      }}
                    >
                      ▶
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="carousel-btn next" aria-label="Próximo" onClick={() => scroll(1)}>&#8250;</button>

      <div className="carousel-dots" aria-label="Navegação dos depoimentos">
        {testimonialItems.map((item, index) => (
          <button
            key={item.id}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Ver depoimento ${index + 1}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
