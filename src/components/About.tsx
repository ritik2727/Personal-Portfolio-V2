'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-20">
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="font-display text-3xl font-black text-text tracking-tight">About Me</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="reveal relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              {/* Avatar placeholder with glitch effect */}
              <div className="relative w-full h-full border border-border bg-surface overflow-hidden group">
                {/* Profile visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Orbiting circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-accent/10 absolute animate-spin-slow" />
                      <div className="w-64 h-64 rounded-full border border-accent/5 absolute" style={{ animationDuration: '30s', animation: 'spin 30s linear infinite reverse' }} />
                    </div>
                    {/* Center logo */}
                    <div className="relative z-10 w-32 h-32 bg-surface border border-accent/20 flex flex-col items-center justify-center gap-2">
                      <span className="font-mono font-black text-4xl text-accent glow-text">RJ</span>
                      <span className="font-mono text-xs text-muted">Full-Stack Dev</span>
                    </div>
                    {/* Orbiting tech icons */}
                    {[
                      /* React */
                      <svg key="react" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="2.5" fill="#61dafb" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                      </svg>,
                      /* Node.js */
                      <svg key="node" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#68a063" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2z" /><path d="M12 22V12" /><path d="M20.5 7L12 12 3.5 7" />
                      </svg>,
                      /* TypeScript */
                      <svg key="ts" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3178c6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11h8" /><path d="M12 11v8" /><path d="M17 15c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2s.9 2 2 2h1c1.1 0 2 .9 2 2s-.9 2-2 2h-1c-1.1 0-2-.9-2-2" />
                      </svg>,
                      /* MongoDB */
                      <svg key="mongo" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4db33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C9 6 7 9 7 13a5 5 0 0 0 10 0c0-4-2-7-5-11z" /><path d="M12 22v-5" />
                      </svg>,
                    ].map((icon, i) => (
                      <div
                        key={i}
                        className="absolute w-10 h-10 flex items-center justify-center"
                        style={{
                          top: '50%', left: '50%',
                          animation: `orbit ${10 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                          animationDelay: `${i * -2}s`,
                          marginTop: '-20px', marginLeft: '-20px',
                        }}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner deco */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-accent/40" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-accent/40" />

                {/* Glitch overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,135,0.02)_2px,rgba(0,255,135,0.02)_4px)]" />
              </div>

              {/* Code badge floating */}
              <div className="absolute -bottom-4 -right-4 bg-surface border border-accent/20 px-4 py-3 font-mono text-xs">
                <span className="text-muted">currently @</span><br />
                <span className="text-accent font-bold">Zenqua Technologies</span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="reveal font-mono text-xs text-accent tracking-widest uppercase">// Who I am</div>
            <div className="reveal space-y-4 text-muted leading-relaxed">
              <p>
                I'm a <span className="text-text font-medium">Full-Stack Developer</span> at Zenqua Technologies, Indore,
                building AI-powered platforms that solve real business problems. With 2.5+ years of professional experience,
                I specialize in crafting end-to-end web applications that are fast, scalable, and maintainable.
              </p>
              <p>
                From building a <span className="text-accent">ChatGPT-like internal assistant</span> with multi-agent architecture
                to an <span className="text-accent">AI voice calling platform</span> — I've consistently delivered products
                that enterprise teams and businesses rely on daily.
              </p>
              <p>
                I graduated with a B.Tech in Computer Science from Shri Vaishnav Vidyapeeth Vishwavidyalaya in 2023,
                where I developed a strong foundation in software engineering principles.
              </p>
            </div>

            {/* Quick facts */}
            <div className="reveal grid grid-cols-2 gap-3 pt-4">
              {[
                { label: 'Location', value: 'Indore, India' },
                { label: 'Experience', value: '2.5+ Years' },
                { label: 'Focus', value: 'AI Platforms' },
                { label: 'Education', value: 'B.Tech CSE' },
                { label: 'Email', value: 'reactjsdeveloper45' },
                { label: 'Status', value: 'Open to Work' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-accent font-mono text-xs">▹</span>
                  <span className="font-mono text-xs text-muted">{item.label}:</span>
                  <span className="font-mono text-xs text-text">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <div className="reveal pt-4">
              <a
                href="https://drive.google.com/file/d/1ji38gOcPWLM84aHBmGhmrn_1sAOkQZwl/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-mono text-xs border border-accent/30 text-accent px-6 py-3 hover:bg-accent/10 hover:border-accent transition-all duration-200 tracking-widest uppercase"
              >
                <span>↓</span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
