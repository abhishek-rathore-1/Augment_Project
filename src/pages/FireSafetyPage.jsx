import {
  AlertTriangle,
  CheckCircle,
  FileText,
  Flame,
  Plus,
  Wrench,
} from "lucide-react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  fireBackgroundImage,
  fireClients,
  fireHeroImage,
  fireHighlights,
  fireServices,
} from "../content/careersContent";

const fireIcons = [
  Flame,
  Wrench,
  CheckCircle,
  Plus,
  AlertTriangle,
  FileText,
];

function FireSafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialised solution"
        title="Fire safety services for industrial and commercial environments."
        description="Alongside digital delivery, Augment also supports fire safety installations, audits, testing, and maintenance workflows."
        image={fireHeroImage}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Fire services"
            title="Structured support for compliance, preparedness, and operational safety."
            description="Our fire safety offering focuses on practical service delivery for facilities that need dependable protection and maintenance."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fireServices.map((item, index) => {
              const Icon = fireIcons[index];

              return (
                <article key={item.title} className="surface-card p-7">
                  <div className="inline-flex rounded-2xl bg-amber-50 p-3 text-amber-600">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section-space bg-slate-950 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.92), rgba(2,6,23,0.92)), url(${fireBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="site-shell">
          <SectionHeading
            eyebrow="Why clients engage this team"
            title="A specialist service track with on-ground practical value."
            description="The focus is readiness, documentation quality, inspection discipline, and dependable follow-through."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fireHighlights.map((item) => (
              <article
                key={item}
                className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm"
              >
                <p className="text-sm leading-8 text-slate-200">{item}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-slate-300">
              Trusted facilities
            </span>
            <h3 className="mt-5 font-heading text-3xl font-semibold text-white sm:text-4xl">
              Trusted by teams operating in demanding industrial environments.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              These organisations reflect the kind of facilities where reliability, inspection discipline, and dependable on-ground execution matter.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {fireClients.map((client) => (
              <article key={client.name} className="brand-logo-card">
                <div className="brand-logo-card__panel">
                  <div className="brand-logo-card__image-wrap">
                    <img
                      src={client.image}
                      alt={client.name}
                      loading="lazy"
                      className="brand-logo-card__image"
                    />
                  </div>
                  <p className="brand-logo-card__label">{client.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FireSafetyPage;
