import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden" aria-label="Dimensional cover">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            The Dimensional Thesis of SAYAM
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80">
            Reality does not exist in flat surfaces — it curves, breathes, and remembers.
          </p>
        </div>
      </div>
    </section>
  );
}
