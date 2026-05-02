function PageHero({
  eyebrow,
  title,
  description,
  image,
  meta = [],
}) {
  const heroMeta = meta.length
    ? meta.join(" / ")
    : "Business-first discovery, disciplined engineering, and reliable post-launch support.";

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 pb-18 pt-30 text-white md:pb-24 md:pt-36">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.96),rgba(8,47,73,0.9)_48%,rgba(15,23,42,0.96))]" />
        <div className="hero-grid absolute inset-0 opacity-35" />
        <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-400/14 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-500/12 blur-3xl" />
      </div>

      <div className="site-shell relative">
        <div
          className={`grid gap-10 ${
            image ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end" : ""
          }`}
        >
          <div className="max-w-4xl">
            {eyebrow ? (
              <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {description}
              </p>
            ) : null}
            {meta.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {meta.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {image ? (
            <div className="relative lg:justify-self-end">
              <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/6 p-3 shadow-[0_32px_90px_-54px_rgba(2,6,23,0.95)] backdrop-blur-md">
                <img
                  src={image}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-[28px] object-cover lg:h-[420px] lg:w-[500px]"
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[24px] border border-white/10 bg-slate-950/70 px-5 py-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    {eyebrow || "Augment Infotech"}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{heroMeta}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
