import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  deliveryWorkflow,
  pageImages,
  serviceApproach,
  serviceCatalog,
  serviceEngagements,
} from "../content/companyContentV2";

function ServicesPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital services designed for businesses that want cleaner execution and stronger results."
        description="We support product design, software engineering, cloud delivery, and platform support with the goal of making systems more credible, more useful, and easier to maintain."
        image={pageImages.servicesHero}
        meta={["Product engineering", "Experience design", "Cloud and support"]}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Service lines"
            title="Core areas where we support product and platform delivery."
            description="Each engagement is shaped around practical business needs, realistic implementation decisions, and what the product has to support after launch."
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
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {item.focus}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {item.deliverables.map((entry) => (
                      <li
                        key={entry}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
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
            description="That is how design quality, technical decisions, and delivery accountability stay aligned instead of drifting apart."
            align="center"
            tone="light"
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

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {deliveryWorkflow.map((item) => (
              <article
                key={item.step}
                className="rounded-[32px] border border-white/10 bg-slate-950/40 p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Step {item.step}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
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

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Engagement model"
              title="Different ways to work with us depending on what the business needs most."
              description="Some teams need a full delivery partner. Others need stronger engineering bandwidth or help recovering momentum on an existing product."
            />
            <Link to="/contact" className="button-primary mt-8">
              Discuss your project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceEngagements.map((item) => (
              <article key={item.title} className="surface-card p-7">
                <h3 className="font-heading text-2xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
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

export default ServicesPageV2;
