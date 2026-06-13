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

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

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
              <img src={`/images/depoimentos/%20depoimento-${item.n}.webp`} alt={`Depoimento ${item.n}`} />
            ) : (
              <div
                aria-label={item.title}
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
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1&playsinline=1`}
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
