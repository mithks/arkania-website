// 'use client'

// import { motion } from 'framer-motion'

// export default function ContactSection() {
//   return (
//     <section
//       id="contact"
//       className="relative min-h-screen bg-light px-6 md:px-8 py-48 md:py-64"
//     >
//       <div className="w-full max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//           className="max-w-2xl"
//         >
//           {/* Heading */}
//           <h2 className="text-[56px] md:text-[80px] font-bold text-dark leading-tight mb-6">
//             Let’s Connect.
//           </h2>

//           {/* Subtext */}
//           <p className="text-[20px] md:text-[24px] text-dark/80 font-medium mb-12 max-w-lg leading-relaxed">
//             Connect with us to discuss solutions tailored to your business.
//           </p>

//           {/* Glass Button */}
//           <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   className="
//     group relative rounded-full px-10 py-4
//     backdrop-blur-xl
//     bg-white/60
//     border border-primary/30
//     shadow-[0_8px_24px_rgba(15,23,42,0.12)]
//     transition-all
//   "
// >
//   <span className="relative z-10 text-[20px] font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
//     Send message
//   </span>

//   {/* Purple glow */}
//   <div className="
//     absolute -inset-1 rounded-full opacity-0
//     group-hover:opacity-100 transition-opacity duration-300
//     blur-xl bg-secondary/30
//   " />
// </motion.button>

//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Failed')

      setName('')
      setEmail('')
      setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-light px-6 md:px-8 py-48 md:py-64 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h2 className="text-[56px] md:text-[80px] font-bold text-dark leading-tight mb-6">
              Let’s Connect.
            </h2>

            <p className="text-[20px] md:text-[24px] text-dark/70 font-medium mb-12 max-w-lg leading-relaxed">
              Connect with us to discuss solutions tailored to your business.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="
              relative rounded-3xl p-10
              glass
              border border-primary/30
              shadow-[0_20px_60px_rgba(15,23,42,0.18)]
            "
          >
            <div className="space-y-6">
              <input
                required
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="
                  w-full rounded-xl px-5 py-4
                  bg-light/80
                  border border-dark/10
                  text-dark placeholder:text-dark/50
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
              />

              <input
                required
                type="email"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="
                  w-full rounded-xl px-5 py-4
                  bg-light/80
                  border border-dark/10
                  text-dark placeholder:text-dark/50
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
              />

              <textarea
                required
                rows={5}
                placeholder="Your message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="
                  w-full rounded-xl px-5 py-4
                  bg-light/80
                  border border-dark/10
                  text-dark placeholder:text-dark/50
                  resize-none
                  focus:outline-none focus:ring-2 focus:ring-primary/40
                "
              />

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full rounded-full py-4 font-semibold text-[20px]
                  transition-all shadow-lg
                  ${
                    loading
                      ? 'bg-primary/60 cursor-not-allowed text-light'
                      : 'bg-primary hover:bg-secondary text-light'
                  }
                `}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* STATUS MESSAGE */}
              {status === 'success' && (
                <p className="text-secondary text-center font-medium">
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-500 text-center font-medium">
                  Failed to send message. Try again.
                </p>
              )}
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
