'use client'
import { useEffect, useRef, useState } from 'react'

const roles = ['Full-Stack Developer', 'React Engineer', 'AI Platform Builder', 'Node.js Developer', 'Next.js Expert']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, 35)
        return () => clearTimeout(t)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [charIndex, typing, roleIndex])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; pulse: number }[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let frame: number
    let t = 0
    function draw() {
      t += 0.005
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,255,135,${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        p.pulse += 0.02
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,255,135,${a})`
        ctx.fill()
      })

      frame = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="scan-line" />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,135,0.05)_0%,transparent_70%)]" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-16 h-16 border-l border-t border-accent/20" />
      <div className="absolute top-20 right-8 w-16 h-16 border-r border-t border-accent/20" />
      <div className="absolute bottom-20 left-8 w-16 h-16 border-l border-b border-accent/20" />
      <div className="absolute bottom-20 right-8 w-16 h-16 border-r border-b border-accent/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          {/* Available badge */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="relative flex items-center gap-2 border border-accent/30 px-4 py-2 rounded-sm bg-accent/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-xs text-accent tracking-widest uppercase">Available for work</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-6">
            <div className="font-mono text-sm text-muted mb-3 tracking-widest">
              <span className="text-accent">&gt; </span>Hello, world! I'm
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none tracking-tight mb-2">
              <span className="text-text">Ritik</span>
              <br />
              <span className="gradient-text">Jain</span>
            </h1>
          </div>

          {/* Typing role */}
          <div className="flex items-center gap-3 mb-8 h-12">
            <span className="font-mono text-accent text-xl">//</span>
            <span className="text-xl md:text-2xl text-muted font-body">
              {displayed}<span className="animate-blink text-accent">_</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-muted max-w-xl text-base leading-relaxed mb-12 font-body">
            Building production-grade AI-powered platforms at{' '}
            <span className="text-accent">Zenqua Technologies</span>.
            Crafting scalable architectures with React, Next.js & Node.js —
            shipping products used by real users, at real scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="group relative overflow-hidden bg-accent text-bg font-mono text-sm px-8 py-4 tracking-widest uppercase font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,135,0.4)]"
            >
              <span className="relative z-10">View Work</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="group border border-accent/30 text-accent font-mono text-sm px-8 py-4 tracking-widest uppercase hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              Let's Talk
            </a>
            <a
              href="https://github.com/ritik2727"
              target="_blank"
              className="font-mono text-xs text-muted hover:text-accent transition-colors animated-underline"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-jain-3b2208217/"
              target="_blank"
              className="font-mono text-xs text-muted hover:text-accent transition-colors animated-underline"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-sm border-t border-border pt-8">
            {[
              { num: '2.5+', label: 'Years Experience' },
              { num: '10+', label: 'Projects Built' },
              { num: '4', label: 'AI Platforms' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-mono text-2xl font-bold text-accent">{stat.num}</div>
                <div className="font-mono text-xs text-muted mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-muted tracking-widest">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>
    </section>
  )
}
