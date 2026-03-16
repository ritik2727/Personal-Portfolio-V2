'use client'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [follower, setFollower] = useState({ x: 0, y: 0 })
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    let followerX = 0, followerY = 0
    let animFrame: number

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const animate = () => {
      setFollower(prev => {
        const nx = prev.x + (pos.x - prev.x) * 0.12
        const ny = prev.y + (pos.y - prev.y) * 0.12
        followerX = nx; followerY = ny
        return { x: nx, y: ny }
      })
      animFrame = requestAnimationFrame(animate)
    }

    const onEnter = () => setExpanded(true)
    const onLeave = () => setExpanded(false)

    window.addEventListener('mousemove', onMove)
    const links = document.querySelectorAll('a, button, [data-hover]')
    links.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    animFrame = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animFrame)
    }
  }, [pos.x, pos.y])

  return (
    <>
      <div className={`cursor ${expanded ? 'expanded' : ''}`} style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-follower" style={{ left: follower.x, top: follower.y }} />
    </>
  )
}
