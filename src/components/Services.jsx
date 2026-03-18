import {
  Hammer, Monitor, Palette, BookOpen, Heart, Scissors,
  Truck, BarChart2, Camera, Music, Wrench, Globe,
} from 'lucide-react'

const services = [
  { icon: Hammer,   label: 'Home Services',        color: 'text-orange-500 bg-orange-50  dark:bg-orange-900/20' },
  { icon: Monitor,  label: 'Technology & IT',       color: 'text-blue-500   bg-blue-50   dark:bg-blue-900/20' },
  { icon: Palette,  label: 'Creative & Design',     color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20' },
  { icon: BookOpen, label: 'Education & Tutoring',  color: 'text-green-500  bg-green-50  dark:bg-green-900/20' },
  { icon: Heart,    label: 'Health & Wellness',     color: 'text-red-500    bg-red-50    dark:bg-red-900/20' },
  { icon: Scissors, label: 'Beauty & Grooming',     color: 'text-pink-500   bg-pink-50   dark:bg-pink-900/20' },
  { icon: Truck,    label: 'Transport & Delivery',  color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20' },
  { icon: BarChart2,label: 'Business Support',      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' },
  { icon: Camera,   label: 'Photography & Media',   color: 'text-teal-500   bg-teal-50   dark:bg-teal-900/20' },
  { icon: Music,    label: 'Events & Entertainment',color: 'text-fuchsia-500 bg-fuchsia-50 dark:bg-fuchsia-900/20' },
  { icon: Wrench,   label: 'Repairs & Maintenance', color: 'text-stone-500  bg-stone-50  dark:bg-stone-900/20' },
  { icon: Globe,    label: 'And Many More…',        color: 'text-primary    bg-primary/8 dark:bg-primary/15' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white dark:bg-[#0a0a0a]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <span className="section-label">
            <span className="w-5 h-px bg-primary dark:bg-primary-300" />
            Services
          </span>
          <h2 className="section-heading mb-6">
            Every sector.{' '}
            <span className="text-primary dark:text-primary-300">One platform.</span>
          </h2>
          <p className="section-subtext">
            KamMela covers almost every industry imaginable. Our system is designed to fit any sector
            with a smart, easy-to-use interface.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="card card-hover p-6 flex flex-col gap-4 cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={18} />
              </div>
              <span className="font-semibold text-sm text-gray-800 dark:text-gray-200 leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
