import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  pageImages,
  technologyCards,
  technologyLogos,
} from "../content/companyContent";

function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A delivery stack chosen for maintainability, scalability, and fit."
        description="We work across modern frameworks, enterprise platforms, and cloud tooling that support real business applications."
        image={pageImages.technologyHero}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Core technologies"
            title="Frameworks and platforms we rely on in active delivery."
            description="The goal is not to showcase a buzzword wall. It is to use the right tools to keep systems dependable and teams productive."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyCards.map((item) => (
              <article key={item.title} className="surface-card surface-card-hover p-7">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Supporting ecosystem"
            title="Cloud, infrastructure, and support tooling that help products scale."
            description="We work across implementation and operations because product quality depends on both."
            align="center"
          />

          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/4 p-6">
            <div className="logo-ticker flex w-max gap-4">
              {[...technologyLogos, ...technologyLogos].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex min-w-36 items-center justify-center rounded-[24px] border border-white/8 bg-white/8 px-6 py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnologyPage;
