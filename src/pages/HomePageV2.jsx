import { createElement, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ui/ContactForm";
import SectionHeading from "../components/ui/SectionHeading";
import {
  capabilityCards,
  contactChannels,
  deliveryWorkflow,
  engagementSignals,
  homeHighlights,
  homeMetrics,
  industryFocus,
  serviceCatalog,
  teamMembers,
  technologyLogos,
} from "../content/companyContentV2";

function HomePageV2() {
  const servicesScrollRef = useRef(null);

  useEffect(() => {
    const container = servicesScrollRef.current;
    if (!container) return undefined;

    let frameId;
    let isPaused = false;

    const step = () => {
      if (!isPaused) {
        container.scrollLeft += 0.6;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      frameId = window.requestAnimationFrame(step);
    };

    const pause = () => {
      isPaused = true;
    };

    const resume = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  const scrollServices = (direction) => {
    const container = servicesScrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * 360,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 pb-20 pt-34 text-white md:pt-42">
        <div className="absolute inset-0">
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-500/12 blur-3xl" />
        </div>

        <div className="site-shell relative">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
                Software delivery that feels accountable
              </span>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                Professional software delivery for businesses that need clarity, quality, and follow-through.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Augment Infotech helps businesses launch and modernise digital products, internal systems, and cloud-backed platforms with stronger planning, sharper design decisions, and dependable engineering execution.
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
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.7)] backdrop-blur-md">
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Delivery focus
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
                  Built for teams that need software work to feel organised, credible, and production-ready.
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["Discovery clarity", "Execution discipline", "Post-launch support"].map((item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-white/8 bg-white/5 px-4 py-4 text-sm font-semibold text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

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
            eyebrow="Why teams engage us"
            title="A more credible delivery experience for products, platforms, and internal systems."
            description="The aim is to reduce avoidable friction around scope, design, engineering, and post-launch support so execution feels calmer and more visible."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementSignals.map((item) => (
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
            eyebrow="Where we create value"
            title="The work usually sits at the point where business needs and technical execution have to line up."
            description="We support both customer-facing experiences and the internal systems that keep organisations moving."
            align="center"
            tone="light"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industryFocus.map((item) => (
              <article
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm"
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

          <div className="mt-10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => scrollServices(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
              aria-label="Scroll services left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollServices(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
              aria-label="Scroll services right"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-6">
            <div
              ref={servicesScrollRef}
              className="overflow-x-auto pb-4 scrollbar-hide"
            >
              <div className="flex w-max gap-6 pr-8">
                {serviceCatalog.map((item) => (
                  <article
                    key={item.title}
                    className="surface-card surface-card-hover w-[280px] flex-none overflow-hidden sm:w-[310px] lg:w-[340px]"
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
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.deliverables.map((entry) => (
                          <span
                            key={entry}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                          >
                            {entry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
                {serviceCatalog.map((item) => (
                  <article
                    key={`${item.title}-duplicate`}
                    aria-hidden="true"
                    className="surface-card surface-card-hover w-[280px] flex-none overflow-hidden sm:w-[310px] lg:w-[340px]"
                  >
                    <img
                      src={item.image}
                      alt=""
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
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.deliverables.map((entry) => (
                          <span
                            key={`${item.title}-${entry}-duplicate`}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600"
                          >
                            {entry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-950 text-white">
        <div className="site-shell">
          <SectionHeading
            eyebrow="How delivery runs"
            title="A structured process that keeps strategy, design, engineering, and release decisions aligned."
            description="Our goal is to make progress easier to trust, both for the team building the product and for the stakeholders backing it."
            align="center"
            tone="light"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {deliveryWorkflow.map((item) => (
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
                  Technology ecosystems
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-white">
                  Platforms and tooling we use to keep products maintainable in production.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                We choose tools based on fit, scalability, and operational practicality instead of building around buzzwords.
              </p>
            </div>

            <div className="mt-8 overflow-hidden">
              <div className="logo-ticker flex w-max gap-4">
                {[...technologyLogos, ...technologyLogos].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex min-w-36 items-center justify-center rounded-[24px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(241,245,249,0.92))] px-6 py-4 shadow-[0_16px_32px_-26px_rgba(15,23,42,0.35)]"
                  >
                    <div className="flex items-center justify-center px-3 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title="A compact team that stays close to execution."
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
                  style={{
                    objectPosition: member.imagePosition ?? "center",
                  }}
                />
                <h3 className="mt-5 font-heading text-xl font-semibold text-slate-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-sky-800">
                  {member.role}
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
              title="Bring us the business context. We will help shape the delivery path."
              description="If you need a partner who can bring clarity to design, engineering, and execution, start here."
              tone="light"
            />

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, channel: contactChannels[0] },
                { icon: Phone, channel: contactChannels[1] },
                { icon: MapPin, channel: contactChannels[2] },
              ].map(({ icon, channel }) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  className="flex items-start gap-4 rounded-[28px] border border-white/10 bg-white/6 p-5 transition-colors hover:bg-white/10"
                >
                  <div className="rounded-2xl bg-white/10 p-3 text-cyan-300">
                    {createElement(icon, { size: 18 })}
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

export default HomePageV2;
