import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { blogHeroImage, blogPosts } from "../content/blogContent";

function BlogPageV2() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Articles on technology shifts, product thinking, and modern delivery."
        description="We use the blog to talk about trends and ideas that affect software, infrastructure, security, and digital experiences."
        image={blogHeroImage}
        meta={["Technology strategy", "Software delivery", "Product perspective"]}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Featured article"
            title="A cleaner, more useful take on emerging technology topics."
            description="These articles are meant to be readable, practical, and grounded in what teams actually need to understand."
          />

          <article className="surface-card mt-12 overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover"
              />
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <span>{featuredPost.category}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="mt-5 font-heading text-3xl font-semibold text-slate-950 md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {featuredPost.excerpt}
                </p>
                <Link to={`/blog/${featuredPost.slug}`} className="button-primary mt-8">
                  Read featured article
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="site-shell">
          <SectionHeading
            eyebrow="More insights"
            title="Additional reading across software, infrastructure, security, and digital experience."
            description="Shorter reads for teams keeping an eye on where product and technology are heading."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="surface-card surface-card-hover overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    <span>{post.category}</span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl font-semibold text-slate-950">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 transition-colors hover:text-cyan-700"
                  >
                    Read article
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPageV2;
