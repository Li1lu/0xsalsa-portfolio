export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08030f] text-white">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,0,0.22),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.2),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.04),_transparent_45%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur">
          <a
            className="text-lg font-semibold tracking-tight"
            href="#top"
            aria-label="0xSalsa home"
          >
            0xSalsa
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-white/70 sm:flex">
            <a className="transition hover:text-white" href="#top">
              Home
            </a>
            <a
              className="rounded-full bg-white px-4 py-2 text-[#08030f] transition hover:bg-orange-100"
              href="mailto:hello@0xsalsa.com"
            >
              Contact
            </a>
          </div>
        </nav>

        <section id="top" className="flex flex-1 items-center py-24 sm:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm font-medium text-orange-100">
              Digital art, motion, and AI-led storytelling
            </p>
            <h1 className="text-5xl font-black tracking-tight text-balance sm:text-7xl lg:text-8xl">
              0xSalsa Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/70 sm:text-2xl">
              AI Illustrator &amp; Video Creator
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
