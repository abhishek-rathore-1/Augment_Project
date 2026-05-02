import { ArrowRight, ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ui/ContactForm";
import SectionHeading from "../components/ui/SectionHeading";
import {
  capabilityCards,
  contactChannels,
  homeHeroImage,
  homeHighlights,
  homeMetrics,
  serviceCatalog,
  teamMembers,
  technologyLogos,
  testimonials,
} from "../content/companyContent";

function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 pb-20 pt-34 text-white md:pt-42">
        <div className="absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-500/12 blur-3xl" />
        </div>

        <div className="site-shell relative">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
                Software delivery that feels accountable
              </span>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Professional software engineering for teams that need dependable execution.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Augment Infotech helps businesses ship customer-facing products,
                internal systems, and modern web platforms with clearer planning,
                better design decisions, and stronger follow-through after launch.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/services" className="button-primary">
                  Explore services
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="button-secondary is-inverted">
                  Start a conversation
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {homeMetrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-slate-100">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.7)] backdrop-blur-md">
              <img
                src={homeHeroImage}
                alt="Augment Infotech team collaboration"
                className="aspect-[4/3] w-full rounded-[28px] object-cover"
              />
              <div className="mt-6 space-y-4">
                {homeHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/8 bg-white/5 p-4"
                  >
                    <h2 className="font-heading text-lg font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="What we bring"
            title="A technology partner built around business clarity, delivery discipline, and modern execution."
            description="We work across strategy, product engineering, interface design, and operational support so teams can move from idea to launch without losing momentum."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilityCards.map((item) => (
              <article
                key={item.title}
                className="surface-card surface-card-hover p-7"
              >
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
            eyebrow="Delivery model"
            title="Structured execution without the agency chaos."
            description="Our engagements are built to reduce ambiguity, keep stakeholders aligned, and make technical progress feel visible."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Understand what matters",
                description:
                  "We get clear on goals, users, constraints, architecture needs, and what success actually looks like.",
              },
              {
                step: "02",
                title: "Build with real accountability",
                description:
                  "Design, engineering, QA, and deployment work as one delivery motion instead of disconnected silos.",
              },
              {
                step: "03",
                title: "Support what we ship",
                description:
                  "Launch is treated as a milestone, not the finish line. We stay involved where optimisation and support matter.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  {item.step}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/4 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Core delivery stack
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                  Technology ecosystems we use to build maintainable products.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                We choose tools based on fit, scalability, and operational
                practicality instead of trend-chasing.
              </p>
            </div>

            <div className="mt-8 overflow-hidden">
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
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Focused service lines for digital products, platforms, and operations."
              description="We design and build with the goal of making systems easier to use, easier to maintain, and more reliable in production."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 transition-colors hover:text-cyan-700"
            >
              View the full service page
              <ArrowUpRight size={16} />
            </Link>
          </div>

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

      <section className="section-space bg-slate-50/80">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Client perspective"
            title="The difference clients usually notice is ownership."
            description="Good design and engineering matter, but so does how a team communicates, handles ambiguity, and protects delivery momentum."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="surface-card p-7">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-slate-950">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-cyan-700">
                  <CheckCircle2 size={18} />
                  <span className="text-sm font-semibold">Trusted delivery feedback</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title="A compact team with a hands-on delivery mindset."
              description="We keep communication direct, decisions practical, and project ownership close to the people doing the work."
            />
            <Link to="/team" className="button-primary mt-8">
              Meet the team
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="surface-card p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[4/5] w-full rounded-[28px] object-cover"
                />
                <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-800">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let us talk about what needs to get shipped."
              description="If you need a partner who can bring clarity to design, engineering, and delivery, start here."
            />

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, channel: contactChannels[0] },
                { icon: Phone, channel: contactChannels[1] },
                { icon: MapPin, channel: contactChannels[2] },
              ].map(({ icon: Icon, channel }) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="flex items-start gap-4 rounded-[28px] border border-white/10 bg-white/6 p-5 transition-colors hover:bg-white/10"
                >
                  <div className="rounded-2xl bg-white/10 p-3 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                      {channel.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {channel.value}
                    </p>
                    {channel.secondary ? (
                      <p className="mt-1 text-sm text-slate-300">
                        {channel.secondary}
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {channel.note}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm md:p-8">
            <ContactForm includeWebsite subject="Homepage contact enquiry" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
