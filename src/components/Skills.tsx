'use client'
import { useEffect, useRef } from 'react'

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

/* ── Proficiency config ── */
type Proficiency = 'Expert' | 'Advanced' | 'Proficient' | 'Familiar'

const proficiencyConfig: Record<Proficiency, { color: string; bg: string; dots: number }> = {
  Expert:     { color: '#00ff87', bg: 'rgba(0,255,135,0.12)', dots: 4 },
  Advanced:   { color: '#60efff', bg: 'rgba(96,239,255,0.12)', dots: 3 },
  Proficient: { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', dots: 2 },
  Familiar:   { color: '#94a3b8', bg: 'rgba(148,163,184,0.10)', dots: 1 },
}

const skillGroups = [
  {
    category: 'Frontend',
    icon: <IconFrontend />,
    skills: [
      { name: 'React.js',        level: 'Expert'     as Proficiency },
      { name: 'JavaScript ES6+', level: 'Expert'     as Proficiency },
      { name: 'Next.js',         level: 'Advanced'   as Proficiency },
      { name: 'Redux',           level: 'Advanced'   as Proficiency },
      { name: 'TypeScript',      level: 'Advanced'   as Proficiency },
      { name: 'Tailwind CSS',    level: 'Advanced'   as Proficiency },
      { name: 'Material UI',     level: 'Proficient' as Proficiency },
      { name: 'React Native',    level: 'Proficient' as Proficiency },
    ]
  },
  {
    category: 'Backend',
    icon: <IconBackend />,
    skills: [
      { name: 'Node.js',    level: 'Advanced'   as Proficiency },
      { name: 'Express.js', level: 'Advanced'   as Proficiency },
      { name: 'MongoDB',    level: 'Advanced'   as Proficiency },
      { name: 'Mongoose',   level: 'Proficient' as Proficiency },
      { name: 'PostgreSQL', level: 'Proficient' as Proficiency },
      { name: 'Firebase',   level: 'Proficient' as Proficiency },
    ]
  },
  {
    category: 'Tools & Others',
    icon: <IconTools />,
    skills: [
      { name: 'Git / GitHub',  level: 'Advanced'   as Proficiency },
      { name: 'Postman',       level: 'Advanced'   as Proficiency },
      { name: 'Vercel',        level: 'Advanced'   as Proficiency },
      { name: 'Agile / Scrum', level: 'Proficient' as Proficiency },
      { name: 'CI/CD',         level: 'Proficient' as Proficiency },
      { name: 'Docker',        level: 'Familiar'   as Proficiency },
    ]
  }
]

const techStack = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB',
  'Redux', 'Tailwind CSS', 'Material UI', 'Vercel', 'Git', 'React Native',
  'Firebase', 'PostgreSQL', 'Docker', 'Agile', 'Scrum', 'Mongoose', 'Postman',
]

function SkillChip({ name, level }: { name: string; level: Proficiency }) {
  const cfg = proficiencyConfig[level]
  return (
    <div
      className="flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-200 hover:scale-[1.02] group"
      style={{
        borderColor: `${cfg.color}22`,
        background: cfg.bg,
      }}
    >
      <span className="font-mono text-xs text-text group-hover:text-white transition-colors">{name}</span>
      <div className="flex items-center gap-1.5 ml-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i < cfg.dots ? cfg.color : 'rgba(255,255,255,0.1)',
                boxShadow: i < cfg.dots ? `0 0 4px ${cfg.color}` : 'none',
              }}
            />
          ))}
        </div>
        <span
          className="font-mono text-[10px] tracking-wide ml-1"
          style={{ color: cfg.color }}
        >
          {level}
        </span>
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

        {/* Legend */}
        <div className="reveal flex flex-wrap items-center gap-4 mb-10">
          <span className="font-mono text-xs text-muted tracking-widest uppercase">// proficiency</span>
          {(Object.entries(proficiencyConfig) as [Proficiency, typeof proficiencyConfig[Proficiency]][]).map(([label, cfg]) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="block w-1.5 h-1.5 rounded-full"
                    style={{
                      background: i < cfg.dots ? cfg.color : 'rgba(255,255,255,0.1)',
                      boxShadow: i < cfg.dots ? `0 0 4px ${cfg.color}` : 'none',
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-[11px]" style={{ color: cfg.color }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillGroups.map((group) => (
            <div key={group.category} className="reveal card-glow bg-bg p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <span className="text-xl">{group.icon}</span>
                <div>
                  <div className="font-mono text-xs text-accent tracking-widest uppercase">{group.category}</div>
                </div>
              </div>
              <div className="space-y-2.5">
                {group.skills.map((skill) => (
                  <SkillChip key={skill.name} name={skill.name} level={skill.level} />
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
