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
          <span className="text-text">2024</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" className="font-mono text-xs text-muted hover:text-accent transition-colors">GH</a>
          <a href="https://linkedin.com" target="_blank" className="font-mono text-xs text-muted hover:text-accent transition-colors">LI</a>
          <a href="mailto:reactjsdeveloper45@gmail.com" className="font-mono text-xs text-muted hover:text-accent transition-colors">✉</a>
        </div>
      </div>
    </footer>
  )
}
