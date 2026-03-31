import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: 'About',       href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services',    href: '#services' },
    { label: 'Contact',     href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-100 dark:border-[#1e1e1e] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="../../public/b.png"
            alt="KamMela"
            className="h-8 w-8 rounded-lg object-cover"
            onError={e => { e.target.style.display = 'none' }}
          />
          <span className="text-xl font-black tracking-tight">
            <span className="text-primary">Kam</span><span className="text-gold">Mela</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Sign Up CTA — desktop */}
          <a
            href="https://onelink.to/cpnd73"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:scale-[1.03]"
          >
            Sign Up Free
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f0f0f] border-t border-gray-100 dark:border-[#1e1e1e] px-6 py-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://onelink.to/cpnd73"
            className="mt-2 inline-flex justify-center items-center bg-primary text-white font-semibold px-5 py-2.5 rounded-lg text-sm"
          >
            Sign Up Free
          </a>
        </div>
      )}
    </header>
  )
}
