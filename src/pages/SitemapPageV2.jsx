import { NavLink } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { pageImages } from "../content/companyContentV2";
import { sitemapSections } from "../content/siteNavigation";

function SitemapPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="A direct route to the pages that matter."
        description="Use this page when you want a simple overview of the site structure and available resources."
        image={pageImages.sitemapHero}
      />

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeading
              eyebrow="Site structure"
              title="Everything important in one place."
              description="The grouped links below make it easier to jump directly to the page you need."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {sitemapSections.map((group) => (
                <article key={group.title} className="surface-card p-6">
                  <h3 className="font-heading text-2xl font-semibold text-slate-950">
                    {group.title}
                  </h3>
                  <div className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-200 hover:bg-white hover:text-slate-950"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-card p-6">
            <img
              src={pageImages.sitemapIllustration}
              alt="Sitemap"
              loading="lazy"
              decoding="async"
              className="h-[260px] w-full rounded-[28px] object-cover"
            />
          </aside>
        </div>
      </section>
    </>
  );
}

export default SitemapPageV2;
