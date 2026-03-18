import { Target, Users, ShieldCheck, Zap } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Direct & Transparent',
    desc: 'No middlemen. Clients connect directly with professionals in real time — clear pricing, clear expectations.',
  },
  {
    icon: Zap,
    title: 'Fast Hiring',
    desc: 'Post a need and get matched instantly. The hiring process is designed to be as quick and frictionless as possible.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Fraud Tolerance',
    desc: 'Every professional on KamMela is verified. We have strict measures to protect both clients and workers.',
  },
  {
    icon: Users,
    title: 'Built for Everyone',
    desc: 'Whether you are actively job-hunting or simply want to be discovered — KamMela creates space for all.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <span className="section-label">
            <span className="w-5 h-px bg-primary dark:bg-primary-300" />
            Our Mission
          </span>
          <h2 className="section-heading mb-6">
            A marketplace built{' '}
            <span className="text-primary dark:text-primary-300">for Nepal.</span>
          </h2>
          <p className="section-subtext">
            At KamMela, our mission is to create the most user-centric and easy-to-use job marketplace
            platform — empowering skilled professionals to leverage their skills and connecting
            clients with the right talent, fast.
          </p>
        </div>

        {/* Two audiences */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="card card-hover group p-10">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-8">
              <Users size={22} className="text-primary dark:text-primary-300" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">For Clients</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              The hiring process is made <strong className="text-gray-800 dark:text-gray-200">direct, transparent, fast, and instant.</strong>{' '}
              Browse verified professionals, compare rates, and get the help you need without
              lengthy back-and-forth.
            </p>
          </div>

          <div className="card card-hover group p-10">
            <div className="w-12 h-12 rounded-2xl bg-gold/15 dark:bg-gold/20 flex items-center justify-center mb-8">
              <Zap size={22} className="text-gold-dark dark:text-gold" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">For Professionals</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              The job-finding process is <strong className="text-gray-800 dark:text-gray-200">simplified and stress-free.</strong>{' '}
              Whether you are a full-time freelancer, a part-timer, or just want to be discovered —
              KamMela puts you in front of the right clients.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-4 p-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary dark:text-primary-300" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
