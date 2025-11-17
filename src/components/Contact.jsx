import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.target.reset()
      } else {
        setStatus(data.detail || 'Something went wrong.')
      }
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s connect</h2>
          <p className="mt-3 text-slate-600">Have a project in mind or just want to say hi? Drop a message.</p>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            <textarea name="message" required rows="5" placeholder="Message" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition-colors">
                Send message
              </button>
              <span className="text-sm text-slate-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
