import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { blogHeroImage, blogPosts } from "../content/blogContent";

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Articles on technology shifts, product thinking, and modern delivery."
        description="We use the blog to talk about trends and ideas that affect software, infrastructure, security, and digital experiences."
        image={blogHeroImage}
      />

      <section className="section-space">
        <div className="site-shell">
          <SectionHeading
            eyebrow="Latest articles"
            title="A cleaner, more useful take on emerging technology topics."
            description="These articles are meant to be readable, practical, and grounded in what teams actually need to understand."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
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

export default BlogPage;
