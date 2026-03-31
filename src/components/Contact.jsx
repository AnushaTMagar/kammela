import { useState } from 'react'
import { MapPin, Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react'

const hours = [
  { day: 'Sun – Fri', time: '10:00 AM – 05:00 PM' },
  { day: 'Saturday',  time: 'Closed' },
  // { day: 'Sunday',    time: '10:00 – 16:00' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Opens default mail client as a lightweight fallback (no backend)
    const subject = encodeURIComponent(`KamMela Enquiry from ${form.name}`)
    const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:info@kammela.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 bg-white dark:bg-[#0a0a0a]">
      <div className="section-container">
        {/* Header */}
        <div className="mb-20">
          <span className="section-label">
            <span className="w-5 h-px bg-primary dark:bg-primary-300" />
            Contact Us
          </span>
          <h2 className="section-heading mb-6">
            We'd love to{' '}
            <span className="text-primary dark:text-primary-300">hear from you.</span>
          </h2>
          <p className="section-subtext">
            Our users are our partners. Feel free to reach out during normal business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact form */}
          <div className="card p-10">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <Send size={28} className="text-primary dark:text-primary-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  className="text-sm text-primary dark:text-primary-300 underline underline-offset-2 mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Drop Us a Message</h3>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary dark:focus:border-primary-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary justify-center w-full"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <a
                href="https://maps.google.com/?q=Ward+06+Mahankal+Kathmandu+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary dark:group-hover:bg-primary-300 transition-colors">
                  <MapPin size={16} className="text-primary dark:text-primary-300 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Address</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                    Ward 06, Mahankal, Kathmandu<br />
                    Mangawa Nepal Pvt. Ltd.
                  </p>
                </div>
              </a>

              <a href="mailto:info@kammela.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary dark:group-hover:bg-primary-300 transition-colors">
                  <Mail size={16} className="text-primary dark:text-primary-300 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Email</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">info@kammela.com</p>
                </div>
              </a>

              <a href="tel:009779705435952" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary dark:group-hover:bg-primary-300 transition-colors">
                  <Phone size={16} className="text-primary dark:text-primary-300 group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Phone</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">+977 9705435952</p>
                </div>
              </a>

              <a
                href="https://wa.me/9779705435952"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500 transition-colors">
                  <MessageCircle size={16} className="text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">WhatsApp</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">Message us on WhatsApp</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={16} className="text-primary dark:text-primary-300" />
                <h4 className="font-bold text-gray-900 dark:text-white">Opening Hours</h4>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{day}</span>
                    <span className={`text-sm font-medium ${time === 'Closed' ? 'text-red-400' : 'text-gray-900 dark:text-white'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
