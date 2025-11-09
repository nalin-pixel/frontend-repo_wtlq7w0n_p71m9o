import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent. Transmission received.');
  };

  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">Initiate Contact</h3>
        <p className="mt-3 text-white/70">
          Send a pulse or email directly at{' '}
          <a href="mailto:sayam1win@gmail.com" className="underline decoration-white/30 hover:decoration-white">sayam1win@gmail.com</a>.
        </p>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            required
            placeholder="your@email"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          />
          <textarea
            required
            placeholder="Your message"
            rows={5}
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
          >
            <Send size={18} /> Send
          </button>
          {status && <p className="text-sm text-emerald-400">{status}</p>}
        </form>
      </div>
    </section>
  );
}
