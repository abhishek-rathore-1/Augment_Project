import { Link } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import {
  pageImages,
  teamMembers,
  teamPrinciples,
} from "../content/companyContentV2";

function TeamPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Leadership Team"
        title="A small team that stays close to delivery."
        description="We keep communication direct and project ownership visible, so clients do not feel distance between decisions and execution."
        image={pageImages.teamHero}
        meta={["Hands-on leadership", "Direct communication", "Execution-minded"]}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="People"
            title="Leaders and builders who stay hands-on."
            description="Our structure is intentionally compact so projects stay connected to the people actually shaping the work."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="surface-card mx-auto w-full max-w-[260px] p-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-52 w-full rounded-2xl object-cover"
                  style={{
                    objectPosition: member.imagePosition ?? "center",
                  }}
                />
                <h3 className="mt-4 font-heading text-lg font-semibold text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-800">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Working style"
            title="How we try to make collaboration easier for clients."
            description="The way a team communicates and handles responsibility matters just as much as the code it ships."
            align="center"
            tone="light"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamPrinciples.map((item) => (
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

          <div className="mt-12 flex justify-center">
            <Link to="/careers" className="button-secondary is-inverted">
              Explore careers with Augment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamPageV2;
