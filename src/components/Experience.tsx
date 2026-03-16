'use client'
import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Zenqua Technologies',
    period: 'Jan 2024 — Present',
    location: 'Indore',
    type: 'Full-Time',
    color: '#00ff87',
    projects: [
      {
        name: 'DaburGPT — Internal AI Assistant',
        tags: ['React', 'Redux', 'REST API', 'AI Agents'],
        points: [
          'Designed a ChatGPT-like internal AI assistant for enterprise teams with multi-session support',
          'Built modular agent architecture supporting Video, Audio, Image, PPT, Weather & Deep Search agents',
          'Managed centralized app state with Redux across chats, agents, and UI states',
          'Developed dashboards & analytics to track system usage and performance',
        ]
      },
      {
        name: 'Ringemall — AI Voice Calling Agent',
        tags: ['React', 'VAPI', 'Dashboard', 'Analytics'],
        points: [
          'Built frontend for campaign creation, scheduling, and lead uploads',
          'Integrated VAPI APIs enabling automated AI-powered voice calls',
          'Developed dashboards for call logs, usage metrics, leads, and meeting tracking',
        ]
      },
      {
        name: 'UmenAI — AI Chatbot Builder',
        tags: ['React', 'Admin Portal', 'Analytics', 'AI'],
        points: [
          'Built admin portal for creating, training and customizing AI chatbots',
          'Implemented AI model selection, branding customization, document training uploads',
          'Designed analytics dashboards for message usage, token consumption & file stats',
        ]
      },
      {
        name: 'Edmitry — Study Abroad AI Platform',
        tags: ['Next.js', 'AI Recommendations', 'UX'],
        points: [
          'Developed multi-step student profiling flows and dynamic university recommendation UI',
          'Integrated AI-driven recommendations for universities, courses, fees & rankings',
          'Built ChatGPT-like chatbot for university queries and end-to-end admission roadmap',
        ]
      },
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Droame',
    period: 'Apr 2023 — May 2023',
    location: 'Jaipur',
    type: 'Internship',
    color: '#60efff',
    projects: [
      {
        name: 'Cloud-Based Video Editing Service',
        tags: ['Node.js', 'Cloud', 'REST API'],
        points: [
          'Developed and maintained a cloud-based video editing service using Node.js',
          'Collaborated with cross-functional teams to develop, test and deploy new features',
          'Assisted in troubleshooting and resolving production issues',
        ]
      }
    ]
  },
  {
    role: 'Mobile App Developer Intern',
    company: 'Shortcast',
    period: 'Jan 2022 — Mar 2022',
    location: 'Remote',
    type: 'Internship',
    color: '#ff6b35',
    projects: [
      {
        name: 'Short-Audio Social Media App',
        tags: ['React Native', 'iOS', 'Android'],
        points: [
          'Developed a short-audio social media app using React Native',
          'Optimized app size by 58% by migrating from Expo to React Native CLI',
          'Built reusable audio recorder and player components',
          'Ensured smooth cross-platform performance on iOS and Android',
        ]
      }
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'The Sparks Foundation',
    period: 'Aug 2021 — Sep 2021',
    location: 'Remote',
    type: 'Internship',
    color: '#a78bfa',
    projects: [
      {
        name: 'Banking & Donation Websites',
        tags: ['React.js', 'Redux', 'Firebase', 'Stripe'],
        points: [
          'Developed banking and donation websites using React.js and Redux',
          'Integrated Firebase backend services and Stripe payment gateway',
        ]
      }
    ]
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeExp, setActiveExp] = useState(0)

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

  const exp = experiences[activeExp]

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-20">
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="font-display text-3xl font-black text-text tracking-tight">Experience</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="reveal grid md:grid-cols-[280px,1fr] gap-0">
          {/* Sidebar tabs */}
          <div className="no-scrollbar flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-border">
            {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setActiveExp(i)}
                className={`text-left px-5 py-4 font-mono text-xs tracking-wide transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 shrink-0 ${
                  activeExp === i
                    ? 'border-accent text-accent bg-accent/5'
                    : 'border-transparent text-muted hover:text-text hover:bg-surface'
                }`}
              >
                <div className="font-bold">{e.company}</div>
                <div className="text-[10px] mt-0.5 opacity-70">{e.period}</div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="pl-0 md:pl-10 pt-6 md:pt-0">
            <div className="mb-6">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3 className="font-display text-xl font-bold text-text">{exp.role}</h3>
                <span className="font-mono text-xs border px-2 py-0.5 rounded-sm" style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}08` }}>
                  {exp.type}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-1 flex-wrap">
                <span className="font-mono text-sm" style={{ color: exp.color }}>@ {exp.company}</span>
                <span className="font-mono text-xs text-muted">• {exp.location} • {exp.period}</span>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-6">
              {exp.projects.map((proj, pi) => (
                <div key={pi} className="card-glow bg-surface p-5 rounded-sm">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <span className="font-mono text-sm text-text font-bold">{proj.name}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map(tag => (
                        <span key={tag} className="tech-badge text-[10px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {proj.points.map((point, pti) => (
                      <li key={pti} className="flex gap-2 text-xs text-muted leading-relaxed">
                        <svg className="shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={exp.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 6 15 12 9 18" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
