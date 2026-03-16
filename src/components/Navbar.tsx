'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 border-b border-border glass' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <div className="w-8 h-8 border border-accent flex items-center justify-center relative">
            <span className="font-mono text-accent font-bold text-sm">RJ</span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity" />
          </div>
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200 animated-underline tracking-widest uppercase"
            >
              <span className="text-accent mr-1">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:reactjsdeveloper45@gmail.com"
            className="font-mono text-xs border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200 tracking-widest uppercase"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-accent transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-accent transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-accent transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <span className="text-accent mr-2">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
