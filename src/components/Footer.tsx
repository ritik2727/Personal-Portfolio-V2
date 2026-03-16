export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-accent/40 flex items-center justify-center">
            <span className="font-mono text-accent text-xs font-bold">RJ</span>
          </div>
          <span className="font-mono text-xs text-muted">Ritik Jain — Full-Stack Developer</span>
        </div>
        <div className="font-mono text-xs text-muted">
          Built with <span className="text-accent">Next.js</span> + <span className="text-accent">Tailwind CSS</span>
          <span className="mx-3 text-border">|</span>
          <span className="text-text">2026</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ritik2727" target="_blank" className="text-muted hover:text-accent transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ritik-jain-3b2208217/" target="_blank" className="text-muted hover:text-accent transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:reactjsdeveloper45@gmail.com" className="text-muted hover:text-accent transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
