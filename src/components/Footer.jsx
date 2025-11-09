export default function Footer() {
  return (
    <footer id="archive" className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} SAYAM — Dimensional Archive</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#thesis" className="hover:text-white">Thesis</a>
            <a href="#dimensions" className="hover:text-white">Dimensions</a>
            <a href="#archive" className="hover:text-white">Archive</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
