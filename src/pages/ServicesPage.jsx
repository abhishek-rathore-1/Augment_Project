import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  pageImages,
  serviceApproach,
  serviceCatalog,
} from "../content/companyContent";

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital services designed to feel credible, useful, and production-ready."
        description="We help businesses shape, build, and support digital systems that need clarity in both design and engineering."
        image={pageImages.servicesHero}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Service lines"
            title="Core areas where we support product and platform delivery."
            description="From interface design to infrastructure enablement, our focus is on practical digital execution that holds up after launch."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCatalog.map((item) => (
              <article
                key={item.title}
                className="surface-card surface-card-hover overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Approach"
            title="We do not separate strategic thinking from implementation."
            description="That is how we keep visual quality, technical decisions, and delivery accountability aligned."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceApproach.map((item) => (
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
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
