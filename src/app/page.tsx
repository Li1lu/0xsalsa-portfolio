const winnerWorks = [
  {
    title: "Dreamscape Character Study",
    contest: "AI Art Challenge",
    year: "2026",
    description:
      "A cinematic character concept exploring vibrant styling, painterly lighting, and surreal details.",
  },
  {
    title: "Neon Motion Reel",
    contest: "Video Creator Cup",
    year: "2025",
    description:
      "A short-form visual story built around bold color, rhythmic cuts, and AI-assisted animation.",
  },
  {
    title: "Future Streets Illustration",
    contest: "Digital Worlds Showcase",
    year: "2025",
    description:
      "A moody city scene placeholder highlighting atmosphere, composition, and futuristic worldbuilding.",
  },
  {
    title: "Mythic Portrait Series",
    contest: "Creator League Awards",
    year: "2024",
    description:
      "A stylized portrait collection blending fantasy motifs with polished editorial presentation.",
  },
  {
    title: "Abstract Product Teaser",
    contest: "Generative Video Jam",
    year: "2024",
    description:
      "A sleek campaign-style video concept using liquid motion, dramatic contrast, and AI visuals.",
  },
  {
    title: "Solar Bloom Poster",
    contest: "Illustration Sprint",
    year: "2023",
    description:
      "A luminous poster placeholder featuring organic shapes, warm gradients, and award-ready polish.",
  },
];

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

      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-200/80">
              Winner Works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Award-winning placeholders
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/60">
            A curated grid for future contest-winning illustrations, videos, and
            AI creative projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {winnerWorks.map((work) => (
            <article
              key={work.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-orange-200/30 hover:bg-white/[0.09]"
            >
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(251,146,60,0.24),_rgba(168,85,247,0.22)),radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.18),_transparent_34%)] text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                Thumbnail
              </div>

              <div className="p-2 pt-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-orange-200/20 bg-orange-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-100">
                    Winner
                  </span>
                  <span className="text-sm font-medium text-white/50">
                    {work.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-orange-100/80">
                  {work.contest}
                </p>
                <p className="mt-4 min-h-20 text-sm leading-6 text-white/60">
                  {work.description}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-bold text-[#08030f] transition hover:bg-orange-100"
                    type="button"
                  >
                    View Project
                  </button>
                  <button
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/10"
                    type="button"
                  >
                    Original Post
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
