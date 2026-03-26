/* eslint-disable react/no-danger */
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

export function GlobeDots({
  className,
  enabled = true,
  cycleMs = 2600,
  src = '/assets/globe_circle.svg',
}: {
  className?: string
  enabled?: boolean
  cycleMs?: number
  src?: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [svgMarkup, setSvgMarkup] = useState<string | null>(null)

  const reducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  useEffect(() => {
    if (!enabled) return

    let cancelled = false
    fetch(src)
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return
        setSvgMarkup(text)
      })
      .catch(() => {
        // If fetching fails (e.g. missing asset), just don't animate.
      })

    return () => {
      cancelled = true
    }
  }, [enabled, src])

  useEffect(() => {
    if (!enabled) return
    if (!svgMarkup) return
    if (!containerRef.current) return
    if (reducedMotion) return

    const root = containerRef.current
    const svgEl = root.querySelector('svg')
    const paths = Array.from(root.querySelectorAll('path')) as SVGPathElement[]

    const vb = svgEl?.viewBox?.baseVal
    const vbWidth = vb?.width || 659
    const vbHeight = vb?.height || 567

    // Delay based on dot position to create a "wave" pattern.
    // We use negative delays so the pulse is already in motion on mount.
    const assignDelays = () => {
      paths.forEach((p, index) => {
        try {
          const box = p.getBBox()
          const cx = box.x + box.width / 2
          const cy = box.y + box.height / 2

          const norm = (cx / vbWidth + cy / vbHeight) / 2
          const delayMs = norm * cycleMs + (index % 7) * 25

          p.style.animationDuration = `${cycleMs}ms`
          p.style.animationDelay = `${-delayMs}ms`
        } catch {
          // Ignore any paths that can't compute bbox.
        }
      })
    }

    // Wait a frame so the inline SVG has layout info for getBBox().
    const raf = requestAnimationFrame(assignDelays)
    return () => cancelAnimationFrame(raf)
  }, [enabled, svgMarkup, cycleMs, reducedMotion])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={['globe-dots', className].filter(Boolean).join(' ')}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svgMarkup ?? '' }}
    />
  )
}

