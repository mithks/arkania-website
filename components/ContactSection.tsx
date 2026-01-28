'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ArkaniaTextReveal from '@/components/ArkaniaTextReveal'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState<string | undefined>()
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
        body: JSON.stringify({
          name,
          email,
          phone, // 👈 optional
          message,
        }),
      })

      if (!res.ok) throw new Error('Failed')

      setName('')
      setEmail('')
      setPhone(undefined)
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex flex-col gap-8"
          >
            <h2 className="text-[56px] md:text-[80px] font-bold text-dark">
              Let’s Connect.
            </h2>

            <p className="text-[20px] md:text-[24px] text-dark/70 max-w-lg">
              Connect with us to discuss solutions tailored to your business.
            </p>

            <div className="relative hidden md:flex items-center">
              <div className="h-px w-64 bg-gradient-to-r from-dark/60 to-transparent mr-8" />
              <ArkaniaTextReveal />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-10 border border-primary/30"
          >
            <div className="space-y-6">

              {/* Name */}
              <input
                required
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl px-5 py-4 bg-light/80 border border-dark/10 text-dark placeholder:text-dark/50
                            focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              {/* Email */}
              <input
                required
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl px-5 py-4 bg-light/80 border border-dark/10 text-dark placeholder:text-dark/50
                            focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              {/* Phone (OPTIONAL) */}
              <div className="
                rounded-xl px-4 py-3
                bg-light/80 border border-dark/10
              ">
                <PhoneInput
                  international
                  defaultCountry="IN"
                  value={phone}
                  onChange={setPhone}
                  placeholder="Phone number (optional)"
                  className="phone-input"
                />
              </div>

              {/* Message */}
              <textarea
                required
                rows={5}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl px-5 py-4 bg-light/80 border border-dark/10 resize-none
                text-dark placeholder:text-dark/50 
                focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full rounded-full py-4 text-[20px] font-semibold
                  ${loading
                    ? 'bg-primary/60 text-light'
                    : 'bg-primary hover:bg-secondary text-light'}
                `}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-secondary text-center">
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-500 text-center">
                  Failed to send message.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
