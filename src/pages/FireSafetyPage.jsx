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

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fireClients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-[28px] border border-white/10 bg-white/8 p-5"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FireSafetyPage;
