import { Search, UserCheck, MessageSquare, Star, Briefcase, BadgeCheck } from 'lucide-react'

const clientSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Post Your Need',
    desc: 'Describe the service you need. Add your location, budget, and timeline in seconds.',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'Browse Professionals',
    desc: 'Get matched with verified professionals nearby. View profiles, ratings, and past work.',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Hire & Communicate',
    desc: 'Connect directly, agree on terms, and get your work done — all within the app.',
  },
]

const proSteps = [
  {
    icon: Briefcase,
    step: '01',
    title: 'Create Your Profile',
    desc: 'Showcase your skills, experience, and portfolio. Get verified to build trust.',
  },
  {
    icon: Star,
    step: '02',
    title: 'Discover Opportunities',
    desc: 'Browse job postings that match your skills and location. Apply with one tap.',
  },
  {
    icon: BadgeCheck,
    step: '03',
    title: 'Get Paid & Grow',
    desc: 'Complete jobs, collect reviews, and build a reputation that attracts more clients.',
  },
]

function StepCard({ icon: Icon, step, title, desc, index }) {
  return (
    <div className="flex gap-5 group">
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary dark:group-hover:bg-primary-300 transition-colors duration-200">
          <Icon size={20} className="text-primary dark:text-primary-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-200" />
        </div>
        {index < 2 && (
          <div className="w-px flex-1 min-h-[40px] bg-gray-200 dark:bg-[#1e1e1e]" />
        )}
      </div>
      <div className="pb-10">
        <span className="text-xs font-bold text-primary/50 dark:text-primary-300/50 tracking-widest uppercase mb-2 block">
          Step {step}
        </span>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
        <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white dark:bg-[#0a0a0a]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <span className="section-label">
            <span className="w-5 h-px bg-primary dark:bg-primary-300" />
            How It Works
          </span>
          <h2 className="section-heading mb-6">
            Simple for everyone,{' '}
            <span className="text-primary dark:text-primary-300">powerful for all.</span>
          </h2>
          <p className="section-subtext">
            Whether you're looking to hire or looking for work — getting started on KamMela takes
            less than 3 minutes.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Clients */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 text-sm font-bold rounded-full">
                For Clients
              </span>
            </div>
            {clientSteps.map((s, i) => (
              <StepCard key={s.step} {...s} index={i} />
            ))}
          </div>

          {/* Professionals */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="px-4 py-1.5 bg-gold/15 dark:bg-gold/20 text-gold-dark dark:text-gold text-sm font-bold rounded-full">
                For Professionals
              </span>
            </div>
            {proSteps.map((s, i) => (
              <StepCard key={s.step} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
