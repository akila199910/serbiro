"use client"
import Image, { type StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'
import NoImg from '../home/inner-page-banner_07.jpg'

type Slide = {
  src: StaticImageData | string
  alt?: string
}

type Props = {
  images?: Slide[]
  autoPlay?: boolean
  interval?: number
}

const ImageSlideshow: React.FC<Props> = ({ images, autoPlay = true, interval = 3000 }) => {
  // fallback images if none provided
  const slides: Slide[] = images && images.length > 0 ? images : [
    { src: NoImg, alt: 'Slide 1' },
    { src: NoImg, alt: 'Slide 2' },
    { src: NoImg, alt: 'Slide 3' }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(id)
  }, [autoPlay, interval, slides.length])

  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent(prev => (prev + 1) % slides.length)

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`${i === current ? 'block h-full' : 'hidden h-full'}`}
            data-carousel-item
            aria-hidden={i !== current}
          >
            <div className="relative w-full h-full">
              <Image src={s.src} alt={s.alt || `slide ${i + 1}`} fill className="object-cover" priority={i === 0} />
            </div>
          </div>
        ))}
      </div>

      {/* indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`}
            aria-current={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      {/* prev/next buttons */}
      <button
        onClick={prev}
        type="button"
        className="absolute inset-y-0 left-2 z-30 flex items-center justify-center px-3 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={next}
        type="button"
        className="absolute inset-y-0 right-2 z-30 flex items-center justify-center px-3 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
        aria-label="Next"
      >
        <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

export default ImageSlideshow