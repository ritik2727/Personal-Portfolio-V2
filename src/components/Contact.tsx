'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('reactjsdeveloper45@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    { label: 'Email', value: 'reactjsdeveloper45@gmail.com', href: 'mailto:reactjsdeveloper45@gmail.com', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
      </svg>
    )},
    { label: 'GitHub', value: 'github.com/ritik2727', href: 'https://github.com/ritik2727', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )},
    { label: 'LinkedIn', value: 'linkedin.com/in/ritik-jain', href: 'https://www.linkedin.com/in/ritik-jain-3b2208217/', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    )},
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,135,0.04)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-20">
          <span className="font-mono text-accent text-sm">05.</span>
          <h2 className="font-display text-3xl font-black text-text tracking-tight">Contact</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal mb-6">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">// Let's build something</span>
          </div>
          <h3 className="reveal font-display text-5xl md:text-6xl font-black leading-tight mb-6">
            Got a project<br />
            <span className="gradient-text">in mind?</span>
          </h3>
          <p className="reveal text-muted leading-relaxed mb-12 max-w-md mx-auto">
            I'm currently open to new opportunities — whether it's a full-time role, freelance project, or just a chat about tech and AI.
          </p>

          {/* Big email button */}
          <div className="reveal mb-16">
            <a
              href="mailto:reactjsdeveloper45@gmail.com"
              className="group relative inline-block"
            >
              <div className="text-2xl md:text-3xl font-display font-black text-text border-b border-dashed border-accent/30 pb-2 hover:border-accent hover:text-accent transition-all duration-300">
                reactjsdeveloper45@gmail.com
              </div>
              <div className="absolute -bottom-1 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-500" />
            </a>
            <button
              onClick={copyEmail}
              className="ml-4 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              {copied ? '✓ Copied!' : '[ copy ]'}
            </button>
          </div>

          {/* Contact links */}
          <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                className="card-glow bg-surface p-4 flex flex-col items-center gap-2 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="font-mono text-xs text-accent tracking-widest">{link.label}</span>
                <span className="font-mono text-[10px] text-muted text-center">{link.value}</span>
              </a>
            ))}
          </div>

          {/* Current status */}
          <div className="reveal font-mono text-xs text-muted">
            <span className="text-accent">// </span>
            Located in <span className="text-text">Indore, India</span> •
            Open to <span className="text-text">Remote & On-site</span> roles •
            Available <span className="text-accent">Immediately</span>
          </div>
        </div>
      </div>
    </section>
  )
}
