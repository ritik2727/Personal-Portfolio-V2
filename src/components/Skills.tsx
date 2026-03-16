'use client'
import { useEffect, useRef, type ReactNode } from 'react'

/* ── Category SVG Icons ── */
const IconFrontend = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff87" strokeWidth="1.5">
    <circle cx="12" cy="12" r="2.5" fill="#00ff87" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
)

const IconBackend = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><circle cx="6" cy="6" r="1" fill="#00ff87" /><circle cx="6" cy="18" r="1" fill="#00ff87" />
  </svg>
)

const IconTools = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const skillGroups = [
  {
    category: 'Frontend',
    icon: <IconFrontend />,
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Redux', level: 94 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Material UI', level: 82 },
      { name: 'React Native', level: 75 },
      { name: 'JavaScript ES6+', level: 95 },
    ]
  },
  {
    category: 'Backend',
    icon: <IconBackend />,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 82 },
      { name: 'Mongoose', level: 80 },
      { name: 'Firebase', level: 78 },
      { name: 'PostgreSQL', level: 75 },
    ]
  },
  {
    category: 'Tools & Others',
    icon: <IconTools />,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Postman', level: 88 },
      { name: 'Vercel', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Agile / Scrum', level: 80 },
      { name: 'CI/CD', level: 78 },
    ]
  }
]

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB',
  'Redux', 'Tailwind CSS', 'Material UI', 'Vercel', 'Git', 'React Native',
  'Firebase', 'PostgreSQL', 'Docker', 'Agile', 'Scrum', 'Mongoose', 'Postman',
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && barRef.current) {
          const fill = barRef.current.querySelector('.fill') as HTMLElement
          if (fill) {
            fill.style.width = `${level}%`
            fill.style.transition = `width 1.2s ease ${delay}ms`
          }
        }
      })
    }, { threshold: 0.3 })
    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs text-text">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="fill h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
          style={{ width: 0, boxShadow: '0 0 8px rgba(0,255,135,0.5)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative bg-surface">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-20">
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display text-3xl font-black text-text tracking-tight">Technical Skills</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="reveal card-glow bg-bg p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <span className="text-xl">{group.icon}</span>
                <div>
                  <div className="font-mono text-xs text-accent tracking-widest uppercase">{group.category}</div>
                </div>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={gi * 100 + si * 80} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee tech badges */}
        <div className="reveal">
          <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">// Full tech arsenal</div>
          <div className="overflow-hidden">
            <div className="marquee-inner gap-3">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="tech-badge shrink-0 mr-3">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
