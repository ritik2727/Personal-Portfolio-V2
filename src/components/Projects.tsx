'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'

/* ── SVG Icons ── */
const IconRobot = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="9" cy="16" r="1" fill={color} /><circle cx="15" cy="16" r="1" fill={color} /><path d="M12 2v4" /><circle cx="12" cy="2" r="1" fill={color} /><path d="M8 11V9a4 4 0 0 1 8 0v2" />
  </svg>
)

const IconPhone = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconChat = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" />
  </svg>
)

const IconGraduation = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>
)

const IconMusic = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
  </svg>
)

const IconBank = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" /><path d="M3 10h18" /><path d="M12 2L2 10h20L12 2z" /><path d="M5 10v11" /><path d="M19 10v11" /><path d="M9 10v11" /><path d="M14 10v11" />
  </svg>
)

const IconCar = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3M9 16A3 3 0 1 1 3 16a3 3 0 0 1 6 0Zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
)

const IconPlane = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5.8L6.5 16.3l-3.2-.8-1.4 1.4 4.1 2.7 2.7 4.1 1.4-1.4-.8-3.2 2.5-2.5 5.8 6l1.2-.7c.4-.2.7-.6.6-1.1z" />
  </svg>
)

const IconSmartphone = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><path d="M12 18h.01" />
  </svg>
)

const IconWebCart = ({ color }: { color: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const projects: {
  id: string; name: string; subtitle: string; company: string;
  description: string; tech: string[]; color: string; accent: string;
  icon: ReactNode; highlights: string[]; featured: boolean;
  github?: string; link?: string;
}[] = [
  {
    id: '01',
    name: 'DaburGPT',
    subtitle: 'Internal AI Assistant Platform',
    company: 'Zenqua / Dabur',
    description: 'A ChatGPT-like internal AI assistant for enterprise teams. Features multi-session conversational interfaces, a modular agent architecture supporting Video, Audio, Image, PPT, Weather, and Deep Search agents.',
    tech: ['React.js', 'Redux', 'REST API', 'Node.js', 'AI Agents', 'Dashboard'],
    color: '#00ff87',
    accent: 'rgba(0,255,135,0.1)',
    icon: <IconRobot color="#00ff87" />,
    highlights: ['Multi-agent architecture', 'Session management', 'Analytics dashboard'],
    featured: true,
  },
  {
    id: '02',
    name: 'Ringemall',
    subtitle: 'AI Voice Calling Agent',
    company: 'Zenqua',
    description: 'AI-powered voice calling platform for automated outreach campaigns. Integrates VAPI APIs for voice automation, with campaign scheduling, lead management, and real-time analytics.',
    tech: ['React.js', 'VAPI API', 'Dashboards', 'Campaign Mgmt'],
    color: '#60efff',
    accent: 'rgba(96,239,255,0.1)',
    icon: <IconPhone color="#60efff" />,
    highlights: ['VAPI integration', 'Campaign scheduler', 'Lead tracking'],
    featured: true,
  },
  {
    id: '03',
    name: 'UmenAI',
    subtitle: 'AI Chatbot Builder Platform',
    company: 'Zenqua',
    description: 'No-code platform for creating, training, and deploying AI chatbots. Features model selection, branding customization, document-based training, and comprehensive analytics.',
    tech: ['React.js', 'Admin Portal', 'File Upload', 'Analytics'],
    color: '#ff6b35',
    accent: 'rgba(255,107,53,0.1)',
    icon: <IconChat color="#ff6b35" />,
    highlights: ['Chatbot builder', 'Token analytics', 'Lead gen via hotspot'],
    featured: true,
  },
  {
    id: '04',
    name: 'Edmitry',
    subtitle: 'Study Abroad AI Platform',
    company: 'Zenqua',
    description: 'AI-driven platform for international education recommendations. Provides personalized university matches with dynamic profiling flows, fee comparisons, rankings, and an admission roadmap.',
    tech: ['Next.js', 'AI Recommendations', 'React.js', 'UX Design'],
    color: '#a78bfa',
    accent: 'rgba(167,139,250,0.1)',
    icon: <IconGraduation color="#a78bfa" />,
    highlights: ['AI university matching', 'Student profiling', 'Admission roadmap'],
    featured: false,
  },
  {
    id: '05',
    name: 'Shortcast App',
    subtitle: 'Short-Audio Social Platform',
    company: 'Shortcast',
    description: 'A short-audio social media mobile app, like TikTok but for audio. Optimized app size by 58% by migrating from Expo to React Native CLI. Features custom audio recorder and player components.',
    tech: ['React Native', 'iOS', 'Android', 'Audio'],
    color: '#fbbf24',
    accent: 'rgba(251,191,36,0.1)',
    icon: <IconMusic color="#fbbf24" />,
    highlights: ['58% size reduction', 'Cross-platform', 'Custom audio components'],
    featured: false,
  },
  {
    id: '06',
    name: 'Banking & Donation Web',
    subtitle: 'Financial Web Platform',
    company: 'The Sparks Foundation',
    description: 'Full-stack banking and donation websites with real payment processing. Integrated Firebase for backend services and Stripe for secure payment gateway with Redux state management.',
    tech: ['React.js', 'Redux', 'Firebase', 'Stripe'],
    color: '#34d399',
    accent: 'rgba(52,211,153,0.1)',
    icon: <IconBank color="#34d399" />,
    highlights: ['Stripe payments', 'Firebase backend'],
    featured: false,
  },
  {
    id: '07',
    name: 'Char Pahiya',
    subtitle: 'Online Cars Selling Website',
    company: 'Personal Project',
    description: 'A full-stack online car selling and browsing marketplace built with the MERN stack. Includes robust dynamic routing and a sleek user interface for discovering vehicles.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#ff2a5f',
    accent: 'rgba(255,42,95,0.1)',
    icon: <IconCar color="#ff2a5f" />,
    highlights: ['MERN Stack', 'Vehicle listings', 'Dynamic UI'],
    featured: false,
    github: 'https://github.com/ritik2727/note-app',
    link: 'https://team-speed.herokuapp.com/',
  },
  {
    id: '08',
    name: 'Travel Companion',
    subtitle: 'India Travel Guide Application',
    company: 'Personal Project',
    description: 'A web-based application which helps users to travel around India with minimal efforts. Built on React.js Framework and Node.js for backend services.',
    tech: ['React.js', 'Node.js', 'API Integration'],
    color: '#00d2ff',
    accent: 'rgba(0,210,255,0.1)',
    icon: <IconPlane color="#00d2ff" />,
    highlights: ['Travel planning', 'India tourism guide'],
    featured: true,
    github: 'https://github.com/ritik2727/Travel-Companion-frontend',
    link: 'https://travel-companion-tau.vercel.app/',
  },
  {
    id: '09',
    name: 'Ecommerce App',
    subtitle: 'Mobile E-Commerce Platform',
    company: 'Personal Project',
    description: 'A comprehensive E-commerce Mobile Application offering a seamless shopping experience. Built for cross-platform compatibility with secure payment processing natively integrated.',
    tech: ['React Native', 'Firebase', 'Express.js', 'Stripe'],
    color: '#ff9900',
    accent: 'rgba(255,153,0,0.1)',
    icon: <IconSmartphone color="#ff9900" />,
    highlights: ['Cross-platform mobile', 'Stripe payments'],
    featured: false,
    github: 'https://github.com/ritik2727/E-Commerce_Mobile_App',
    link: 'https://drive.google.com/drive/folders/1cYXlYOt6daAkdB3fAfHLx1fguGPz1R_w',
  },
  {
    id: '10',
    name: 'E-commerce Website',
    subtitle: 'Full-Stack Web Store',
    company: 'Personal Project',
    description: 'A modern full-stack e-commerce website allowing users to browse products, manage their cart, and securely checkout via Stripe. Powered by a real-time Firebase backend.',
    tech: ['React.js', 'Firebase', 'Express.js', 'Stripe'],
    color: '#b142ff',
    accent: 'rgba(177,66,255,0.1)',
    icon: <IconWebCart color="#b142ff" />,
    highlights: ['Real-time backend', 'Secure checkout'],
    featured: true,
    github: 'https://github.com/ritik2727/ecommerce',
    link: 'https://ecommerse-ritik2727.vercel.app/',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState<'all' | 'featured'>('featured')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.05 }
    )
    // Small delay so newly rendered cards are in the DOM before observing
    const timeout = setTimeout(() => {
      sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 50)
    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [filter])

  const filtered = filter === 'all' ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative bg-surface">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display text-3xl font-black text-text tracking-tight">Projects</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        {/* Filter */}
        <div className="reveal flex items-center gap-3 mb-16">
          {(['all', 'featured'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200 ${
                filter === f
                  ? 'bg-accent text-bg font-bold'
                  : 'border border-border text-muted hover:border-accent/50 hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, i) => (
            <div
              key={proj.id}
              className={`reveal card-glow bg-bg group cursor-pointer overflow-hidden`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Header bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${proj.color}, transparent)` }} />

              <div className="p-6">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div>{proj.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted">{proj.id}</span>
                    {proj.featured && (
                      <span className="font-mono text-xs px-2 py-0.5 border rounded-sm"
                        style={{ color: proj.color, borderColor: `${proj.color}40`, background: proj.accent }}>
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Name & Links */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-display text-lg font-black text-text group-hover:text-accent transition-colors duration-200">
                    {proj.name}
                  </h3>
                  
                  {/* External Links */}
                  <div className="flex items-center gap-3 pt-1">
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" title="View Source">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" title="Live App">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="font-mono text-xs mb-1" style={{ color: proj.color }}>{proj.subtitle}</div>
                <div className="font-mono text-xs text-muted mb-3">@ {proj.company}</div>

                {/* Description */}
                <p className="text-muted text-xs leading-relaxed mb-4">{proj.description}</p>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  {proj.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                      <span style={{ color: proj.color }} className="text-xs">✓</span>
                      <span className="font-mono text-xs text-muted">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {proj.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 group-hover:border-opacity-50 transition-all" style={{}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
