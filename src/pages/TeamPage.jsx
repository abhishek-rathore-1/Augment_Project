import SectionHeading from "../components/ui/SectionHeading";
import PageHero from "../components/ui/PageHero";
import {
  pageImages,
  teamMembers,
  teamPrinciples,
} from "../content/companyContent";

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership Team"
        title="A small team that stays close to delivery."
        description="We keep communication direct and project ownership visible, so clients do not feel distance between decisions and execution."
        image={pageImages.teamHero}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="People"
            title="Leaders and builders who stay hands-on."
            description="Our structure is intentionally compact so projects stay connected to the people actually shaping the work."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="surface-card p-7">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full rounded-[28px] object-cover"
                />
                <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-800">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {member.bio}
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
            description="The way we work matters just as much as the code we ship."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamPrinciples.map((item) => (
              <article
                key={item}
                className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm"
              >
                <p className="text-sm leading-8 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamPage;
