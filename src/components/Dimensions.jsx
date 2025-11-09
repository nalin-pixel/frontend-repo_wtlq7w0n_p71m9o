import { Rocket, Star, Sparkles } from 'lucide-react';

const cards = [
  {
    icon: Rocket,
    title: 'Hyperreal Constructs',
    desc: 'Weightless architecture and breathing fabrics rendered as living geometry.',
  },
  {
    icon: Star,
    title: 'Fractal Light',
    desc: 'Cosmic illumination patterns that fold space and memory into form.',
  },
  {
    icon: Sparkles,
    title: 'Celestial Type',
    desc: 'Typography that sings — glyphs tuned to emotional frequencies.',
  },
];

export default function Dimensions() {
  return (
    <section id="dimensions" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">Dimensions of Practice</h3>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <Icon className="text-white/90" size={28} />
              <h4 className="mt-4 text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
