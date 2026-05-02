import PageHero from "../components/ui/PageHero";

function LegalPage({
  eyebrow,
  title,
  description,
  image,
  sections,
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        image={image}
      />

      <section className="section-space">
        <div className="site-shell">
          <div className="surface-card p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
              Last updated: April 7, 2026
            </p>

            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-heading text-2xl font-semibold text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-8 text-slate-600">
                    {section.text}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LegalPage;
