import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  aboutNarrative,
  aboutPillars,
  capabilityCards,
  pageImages,
  whyChooseUs,
} from "../content/companyContent";

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Augment Infotech"
        title="A practical technology partner for ambitious digital work."
        description="We help teams move from idea to implementation with clearer planning, stronger execution, and more reliable long-term support."
        image={pageImages.technologyHero}
      />

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="surface-card p-8 md:p-10">
            <SectionHeading
              eyebrow="Who we are"
              title="Built to reduce friction between planning, design, engineering, and delivery."
              description={aboutNarrative[0]}
            />
            <p className="mt-6 text-base leading-8 text-slate-600">
              {aboutNarrative[1]}
            </p>
          </div>

          <div className="grid gap-4">
            {aboutPillars.map((item) => (
              <article key={item.title} className="surface-card p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 w-14 object-contain"
                  />
                  <h3 className="font-heading text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
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
            eyebrow="How we operate"
            title="The qualities clients rely on when delivery gets complex."
            description="We aim to make execution feel more calm, more transparent, and less risky than it usually does."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="about-operate-card">
                <div className="about-operate-card__media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="about-operate-card__image"
                  />
                </div>
                <div className="about-operate-card__body">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Capabilities"
            title="What that partnership looks like in practice."
            description="These are the working qualities we bring into engagements across product, platform, and operations work."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((item) => (
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
    </>
  );
}

export default AboutPage;
