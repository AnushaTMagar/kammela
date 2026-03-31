import { Smartphone, Shield, Zap, Bell } from 'lucide-react'

const features = [
  { icon: Zap,       label: 'Lightning Fast',    desc: 'Optimized for speed' },
  { icon: Shield,    label: 'Secure & Private',  desc: 'Your data is protected' },
  { icon: Bell,      label: 'Push Notifications',desc: 'Stay updated instantly' },
  { icon: Smartphone,label: 'All Platforms',     desc: 'iOS & Android' },
]

export default function Download() {
  return (
    <section id="download" className="py-28 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-primary dark:bg-primary-600 px-8 md:px-16 py-20">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gold/15 rounded-full blur-2xl" />

          <div className="relative grid md:grid-cols-2 gap-14 items-center">
            {/* Left text */}
            <div>
              <span className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Available Now
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Get the <span className="inline-flex items-baseline bg-white rounded-lg px-2 py-0.5"><span className="text-primary">Kam</span><span className="text-gold">Mela</span></span>
                <br />
                <span className="text-gold">app today.</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed">
                All the same features in your pocket, available anytime and anywhere.
                Download for free and start connecting.
              </p>

              {/* Store buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/app/kammela/id6753652939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.35.74 3.17.75.96-.01 1.88-.67 3.18-.72 1.74-.08 3.27.71 4.19 1.86-3.74 2.24-3.12 7.14.46 8.58-.74 1.35-1.6 2.7-3 2.41zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 leading-none">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.iconsoft.kammela&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.03]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.18 23.76a2.4 2.4 0 0 0 2.82-.27l.1-.09 8.02-8.02-2.66-2.67-8.28 8.29c-.38.38-.38.99 0 1.37zm14.49-9.4-2.6 2.6 2.6 2.6 3.3-1.87a1.5 1.5 0 0 0 0-2.6zm-3.54-3.54L5.9.55A2.4 2.4 0 0 0 3.09.3L3 .4l8.47 8.46z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 leading-none">Get it on</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="font-bold text-white text-sm mb-1">{label}</p>
                  <p className="text-white/60 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
