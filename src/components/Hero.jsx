import { useState, useEffect, useRef, useCallback } from 'react'
import { Download, UserPlus, ArrowDown } from 'lucide-react'

const rotatingWords = [
  'Professionals',
  'Developers',
  'Designers',
  'Plumbers',
  'Photographers',
  'Educators',
]

const stats = [
  { num: '10K+',  label: 'App Downloads' },
  { num: '500+',  label: 'Professionals' },
  { num: '50+',   label: 'Service Categories' },
  { num: '0',     label: 'Fraud Tolerance' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const haloRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % rotatingWords.length)
        setVisible(true)
      }, 280)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!haloRef.current || !sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    haloRef.current.style.transform = `translate(${x}px, ${y}px)`
    haloRef.current.style.opacity = '1'
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (haloRef.current) haloRef.current.style.opacity = '0'
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'url(/b.png) 16 16, auto' }}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0a0a0a]"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 dark:opacity-100" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/8 dark:bg-primary/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gold/8 dark:bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cursor halo — follows mouse, yellow faded blur */}
      <div
        ref={haloRef}
        className="absolute top-0 left-0 pointer-events-none rounded-full"
        style={{
          width: '180px',
          height: '180px',
          marginLeft: '-90px',
          marginTop: '-90px',
          background: 'radial-gradient(circle, rgba(239,201,0,0.22) 0%, rgba(239,201,0,0.08) 45%, transparent 70%)',
          filter: 'blur(18px)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />

      <div className="relative section-container pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/8 dark:bg-primary/15 text-primary dark:text-primary-300 border border-primary/20 dark:border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-10 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
          Nepal's Premier Job Marketplace
        </div>

        {/* Main heading */}
        <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-tight mb-8">
          <span className="block text-gray-900 dark:text-white animate-fade-up" style={{ animationDelay: '50ms' }}>
            Connect
          </span>
          <span className="block text-gray-900 dark:text-white animate-fade-up" style={{ animationDelay: '120ms' }}>
            Clients With
          </span>
          {/* Fixed-height wrapper — prevents layout shift when word length changes */}
          <span className="block relative" style={{ height: '0.92em' }}>
            <span
              className="absolute left-0 top-0 whitespace-nowrap text-gold transition-opacity transition-transform duration-[280ms]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              {rotatingWords[index]}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl mb-14 leading-relaxed font-light animate-fade-up" style={{ animationDelay: '200ms' }}>
          KamMela bridges skilled professionals with clients who need them —
          direct, transparent, and fraud-free.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-24 animate-fade-up" style={{ animationDelay: '280ms' }}>
          <a
            href="https://onelink.to/cpnd73"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            <Download size={18} />
            Download App
          </a>
          <a
            href="https://kammela.com/sign-up"
            className="btn-outline text-base"
          >
            <UserPlus size={18} />
            Sign Up Free
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-8 animate-fade-up"
          style={{ animationDelay: '360ms' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-black text-primary dark:text-primary-300 leading-none">
                {s.num}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600 hover:text-primary dark:hover:text-primary-300 transition-colors"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  )
}
