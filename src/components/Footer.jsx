import { Facebook, Linkedin, Download } from 'lucide-react'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services',     href: '#services' },
  { label: 'Contact',      href: '#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: 'https://kammela.com/privacy-policy' },
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61572287257901' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/kammela' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-[#1a1a1a]">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <img
                src="https://kammela.com/web%20logo.jpg"
                alt="KamMela"
                className="h-8 w-8 rounded-lg object-cover"
                onError={e => { e.target.style.display = 'none' }}
              />
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                <span className="text-primary">Kam</span><span className="text-gold">Mela</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed max-w-xs">
              Nepal's premier job marketplace connecting skilled professionals with clients who
              need them. Direct, transparent, and fraud-free.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Navigation
            </h5>
            <ul className="flex flex-col gap-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary dark:hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Get Started
            </h5>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 leading-relaxed">
              Download the app and start connecting with professionals or finding work today.
            </p>
            <a
              href="https://onelink.to/cpnd73"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <Download size={15} />
              Download App
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 dark:border-[#1a1a1a] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © 2026 KamMela · Mangawa Nepal Pvt. Ltd. · Ward No. 6, Mahangkal, Kathmandu
          </p>
          <div className="flex gap-4">
            {legalLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray-400 dark:text-gray-600 hover:text-primary dark:hover:text-primary-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
