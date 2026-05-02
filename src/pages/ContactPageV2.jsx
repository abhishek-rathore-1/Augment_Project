import { createElement } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ui/ContactForm";
import PageHero from "../components/ui/PageHero";
import {
  contactChannels,
  contactExpectations,
  contactScenarios,
  pageImages,
} from "../content/companyContentV2";

function ContactPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the business context. We will help shape the delivery path from there."
        description="Tell us what you are building, what is getting in the way, or where you need support across design, engineering, cloud, or post-launch delivery."
        image={pageImages.contactHero}
        meta={["Project enquiries", "Delivery support", "Partnership conversations"]}
      />

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card p-6 md:p-8">
            <div className="max-w-3xl">
              <span className="section-chip">Get in touch</span>
              <h2 className="section-title mt-5 font-heading text-slate-950">
                Multiple ways to reach the team.
              </h2>
              <p className="section-copy mt-4">
                We respond best when we understand the goals, constraints, and timing behind the work.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              { icon: Mail, channel: contactChannels[0] },
              { icon: Phone, channel: contactChannels[1] },
              { icon: MapPin, channel: contactChannels[2] },
            ].map(({ icon, channel }) => (
              <a
                key={channel.title}
                href={channel.href}
                target={channel.title === "Office" ? "_blank" : undefined}
                rel={channel.title === "Office" ? "noreferrer" : undefined}
                className="surface-card block h-full p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-950 p-3 text-cyan-300">
                    {createElement(icon, { size: 18 })}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      {channel.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-7 text-slate-950">
                      {channel.value}
                    </p>
                    {channel.secondary ? (
                      <p className="mt-1 text-sm text-slate-600">
                        {channel.secondary}
                      </p>
                    ) : null}
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {channel.note}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="surface-card p-6">
              <h3 className="font-heading text-xl font-semibold text-slate-950">
                What to expect
              </h3>
              <ul className="mt-4 space-y-3">
                {contactExpectations.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-6">
              <h3 className="font-heading text-xl font-semibold text-slate-950">
                Typical reasons teams contact us
              </h3>
              <ul className="mt-4 space-y-3">
                {contactScenarios.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="h-full overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_30px_80px_-52px_rgba(15,23,42,0.35)]">
              <iframe
                title="Augment Infotech office location"
                src="https://www.google.com/maps?q=519,+Shagun+Tower,+A.B.+Road,+Vijay+Nagar,+Indore,+Madhya+Pradesh+452010&z=15&output=embed"
                className="h-[320px] w-full border-0 md:h-[420px] lg:h-full"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="flex h-full flex-col rounded-[32px] border border-white/10 bg-slate-950 p-6 md:p-8">
              <ContactForm
                includeWebsite
                subject="Contact page enquiry"
                description="A bit of context helps us respond with useful recommendations instead of generic follow-up."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPageV2;
