import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  Monitor,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  careerBenefits,
  careerHeroImage,
  careerHiringSteps,
  careerJobs,
} from "../content/careersContentV2";

const benefitIcons = [
  GraduationCap,
  BriefcaseBusiness,
  Clock3,
  Users,
  TrendingUp,
  Monitor,
];

function CareersPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Opportunities for people who care about doing the work properly."
        description="We value ownership, communication, technical curiosity, and the willingness to improve the quality of the work around you."
        image={careerHeroImage}
        meta={["Engineering roles", "Real project exposure", "Growth through delivery"]}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Why join us"
            title="A work environment built around steady growth and practical collaboration."
            description="The goal is to create room for strong engineering work without losing the human side of how teams operate."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {careerBenefits.map((item, index) => {
              const Icon = benefitIcons[index];

              return (
                <article key={item.title} className="surface-card p-6">
                  <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-cyan-300">
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

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Hiring process"
            title="A straightforward path from first application to onboarding."
            description="We keep the process practical so candidates know where they stand and what to expect next."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {careerHiringSteps.map((item, index) => (
              <article key={item.title} className="surface-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-slate-950">
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
            eyebrow="Open roles"
            title="Current opportunities at Augment Infotech."
            description="If one of these roles fits your strengths, you can review the details and apply directly through the role page."
            align="center"
            tone="light"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {careerJobs.map((job) => (
              <article
                key={job.id}
                className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="h-16 w-16 object-contain"
                />
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <span>{job.type}</span>
                  <span>{job.mode}</span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                  {job.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-cyan-300">
                  {job.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {job.summary}
                </p>
                <Link to={`/apply/${job.id}`} className="button-primary mt-6">
                  Apply for this role
                  <ArrowRight size={18} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CareersPageV2;
