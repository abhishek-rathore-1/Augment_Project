import { ChevronDown } from "lucide-react";
import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import {
  faqItems,
  pageImages,
} from "../content/companyContent";

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers to the questions teams usually ask before engaging."
        description="If you are trying to understand fit, process, or how we usually work, this is a good place to start."
        image={pageImages.faqHero}
      />

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Straightforward answers about how we approach delivery."
              description="We prefer being direct about scope, process, and how teams work together."
            />

            <div className="mt-10 space-y-4">
              {faqItems.map((item, index) => (
                <article key={item.question} className="surface-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-xl font-semibold text-slate-950">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-500 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index ? (
                    <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600">
                      {item.answer}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-card p-6">
            <img
              src={pageImages.faqIllustration}
              alt="FAQ"
              className="rounded-[28px] object-cover"
            />
            <h3 className="mt-6 font-heading text-2xl font-semibold text-slate-950">
              Need a more specific answer?
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              If your project has a unique timeline, architecture, or delivery
              concern, we can talk through it directly.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

export default FaqPage;
