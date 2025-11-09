import { useState, useMemo } from 'react';
import { Lock, PenTool, Brain, Coins, Dice5 } from 'lucide-react';

const items = [
  {
    key: 'crypto',
    icon: Lock,
    title: 'Cryptography',
    desc: 'Ciphers, signatures, zero-knowledge inspired artifacts — secrecy as design.',
    hue: 'from-cyan-400/30 via-sky-500/20 to-blue-500/20',
  },
  {
    key: 'design',
    icon: PenTool,
    title: 'Designing',
    desc: 'Systems, symbols, and motion — interfaces with ritual precision.',
    hue: 'from-fuchsia-400/30 via-pink-500/20 to-rose-500/20',
  },
  {
    key: 'psyche',
    icon: Brain,
    title: 'Psychologist',
    desc: 'Behavioral heuristics, perception mapping, emotional UX grammars.',
    hue: 'from-emerald-400/30 via-teal-500/20 to-lime-500/20',
  },
  {
    key: 'memecoin',
    icon: Coins,
    title: 'Meme Coin Gem Finder',
    desc: 'Signal hunting, on-chain patterns, narrative-backed volatility.',
    hue: 'from-amber-400/30 via-orange-500/20 to-yellow-500/20',
  },
  {
    key: 'gambler',
    icon: Dice5,
    title: 'Gambler',
    desc: 'Risk choreography — staking probability against elegant constraints.',
    hue: 'from-violet-400/30 via-indigo-500/20 to-purple-500/20',
  },
];

function useMouseTilt() {
  const [state, setState] = useState({ rx: 0, ry: 0, x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 to 1
    const py = (y / rect.height) * 2 - 1; // -1 to 1
    const maxTilt = 8; // deg
    const rx = (-py) * maxTilt;
    const ry = px * maxTilt;
    setState({ rx, ry, x, y });
  };

  const reset = () => setState({ rx: 0, ry: 0, x: 0, y: 0 });

  return { state, handleMove, reset };
}

function DomainCard({ icon: Icon, title, desc, hue }) {
  const { state, handleMove, reset } = useMouseTilt();

  const spotlight = useMemo(
    () => ({
      background: `radial-gradient(400px circle at ${state.x}px ${state.y}px, rgba(255,255,255,0.12), transparent 40%)`,
    }),
    [state.x, state.y]
  );

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
      style={{ transform: `perspective(800px) rotateX(${state.rx}deg) rotateY(${state.ry}deg)`, transition: 'transform 120ms ease-out' }}
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${hue} opacity-0 group-hover:opacity-100 transition-opacity`} />
      <div className="pointer-events-none absolute inset-0" style={spotlight} />

      <div className="relative p-6">
        <Icon className="text-white" size={28} />
        <h4 className="mt-4 text-lg font-semibold text-white">{title}</h4>
        <p className="mt-2 text-sm text-white/75 leading-relaxed">{desc}</p>
        <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
          <span className="rounded-full bg-white/10 px-2 py-1">reactive</span>
          <span className="rounded-full bg-white/10 px-2 py-1">hyperreal</span>
        </div>
      </div>
    </div>
  );
}

export default function ReactiveDomains() {
  return (
    <section id="domains" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">Dimensional Practices</h3>
          <p className="mt-3 text-white/70">Move your cursor — each domain responds with attitude.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <DomainCard key={it.key} icon={it.icon} title={it.title} desc={it.desc} hue={it.hue} />
          ))}
        </div>
      </div>
    </section>
  );
}
