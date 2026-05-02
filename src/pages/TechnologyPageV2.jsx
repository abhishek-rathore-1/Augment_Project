import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  pageImages,
  technologyCards,
  technologyLogos,
  technologyPrinciples,
} from "../content/companyContentV2";

function TechnologyPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A delivery stack chosen for maintainability, scalability, and operational fit."
        description="We work across modern frameworks, enterprise platforms, and cloud tooling that support real business applications instead of building around hype."
        image={pageImages.technologyHero}
        meta={["Front-end", "Back-end", "Cloud", "Data"]}
      />

      <section className="section-space">
        <div
          className="site-shell overflow-hidden rounded-[40px] border border-white/55 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),linear-gradient(180deg,rgba(248,250,252,0.98),rgba(236,245,248,0.96))] p-6 shadow-[0_35px_100px_-52px_rgba(15,23,42,0.35)] md:p-10"
        >
          <SectionHeading
            eyebrow="Core technologies"
            title="Frameworks and platforms we rely on in active delivery."
            description="The goal is not to showcase a buzzword wall. It is to use the right tools to keep systems dependable, scalable, and easier to evolve."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyCards.map((item) => (
              <article
                key={item.title}
                className="surface-card surface-card-hover min-h-[380px] overflow-hidden p-7 text-white"
                style={{ backgroundImage: "linear-gradient(180deg, rgba(2,6,23,0.96), rgba(15,23,42,0.9))" }}
              >
                <div className="flex h-full flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-18 w-18 object-contain"
                  />
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                  {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((entry) => (
                      <span
                        key={entry}
                        className="rounded-full border border-cyan-400/18 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200"
                      >
                        {entry}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Engineering principles"
            title="Technology choices are shaped around what the product has to support in the real world."
            description="Stack decisions only matter if they help teams ship reliably, operate calmly, and keep evolving without unnecessary rewrites."
            align="center"
            tone="light"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {technologyPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm"
              >
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/4 p-6">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Engineering ecosystem
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-white md:text-3xl">
                Supporting tooling across cloud, front-end, infrastructure, and integration workflows.
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                We use supporting technologies where they add operational value, speed up delivery, or make the platform easier to run in production.
              </p>
            </div>

            <div className="mt-8 overflow-hidden">
              <div className="logo-ticker flex w-max gap-4">
                {[...technologyLogos, ...technologyLogos].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex min-w-36 items-center justify-center rounded-[24px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(241,245,249,0.92))] px-6 py-4 shadow-[0_16px_32px_-26px_rgba(15,23,42,0.35)]"
                  >
                    <div className="flex items-center justify-center px-3 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologyPageV2;
