import { createElement } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ui/ContactForm";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  contactChannels,
  contactExpectations,
  pageImages,
} from "../content/companyContent";

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the business context. We will take it from there."
        description="Tell us what you are building, where you are stuck, or what kind of delivery support you need."
        image={pageImages.contactHero}
      />

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Multiple ways to reach the team."
              description="We respond best when we understand the goals, constraints, and timing behind the work."
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
                  className="surface-card block p-5 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-slate-950 p-3 text-cyan-300">
                      {createElement(icon, { size: 18 })}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {channel.title}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-950">
                        {channel.value}
                      </p>
                      {channel.secondary ? (
                        <p className="mt-1 text-sm text-slate-600">
                          {channel.secondary}
                        </p>
                      ) : null}
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {channel.note}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="surface-card mt-8 p-6">
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
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-[0_30px_80px_-52px_rgba(15,23,42,0.35)]">
              <iframe
                title="Augment Infotech office location"
                src="https://www.google.com/maps?q=A.B.%20Road%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010&z=15&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-950 p-6 md:p-8">
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

export default ContactPage;
