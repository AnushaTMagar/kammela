import { Play } from 'lucide-react'

export default function VideoGuide() {
  return (
    <section id="video-guide" className="py-28 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label">
            <span className="w-5 h-px bg-primary dark:bg-primary-300" />
            Watch &amp; Learn
          </span>
          <h2 className="section-heading mb-6">
            How to register on{' '}
            <span className="text-primary">Kam</span><span className="text-gold">Mela</span>?
          </h2>
          <p className="section-subtext">
            Get started in minutes. Watch our quick guide to creating your account and
            finding your first job or professional.
          </p>
        </div>

        {/* Video embed */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 dark:shadow-primary/20 border border-gray-100 dark:border-[#1e1e1e]">
          {/* Aspect ratio wrapper 16:9 */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/SkcJuelQfLg?rel=0&modestbranding=1"
              title="How to register in KamMela"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-gray-400 dark:text-gray-600 mt-6 flex items-center justify-center gap-2">
          <Play size={13} className="text-primary dark:text-primary-300" />
          Step-by-step registration walkthrough
        </p>
      </div>
    </section>
  )
}
