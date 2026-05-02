import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import {
  blogPosts,
  getBlogPostBySlug,
} from "../content/blogContent";

function BlogArticlePageV2() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <>
        <PageHero
          eyebrow="Insights"
          title="Article not found"
          description="The article you are looking for may have moved or no longer exists."
        />
        <section className="section-space">
          <div className="site-shell">
            <div className="surface-card p-8 md:p-12">
              <Link to="/blog" className="button-primary">
                Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        meta={[post.readTime, "Augment Insights"]}
      />

      <section className="section-space">
        <div className="site-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="surface-card p-6 md:p-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 transition-colors hover:text-cyan-700"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>

            <p className="mt-8 text-lg leading-8 text-slate-700">
              {post.intro}
            </p>

            <div className="mt-10 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-heading text-2xl font-semibold text-slate-950">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-base leading-8 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-30 lg:self-start">
            <div className="surface-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                <Clock3 size={16} />
                {post.readTime}
              </div>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-slate-950">
                Want help turning strategy into delivery?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We help teams move from ideas and architecture decisions to actual shipped systems with stronger design and engineering execution.
              </p>
              <Link to="/contact" className="button-primary mt-6">
                Start a conversation
              </Link>
            </div>

            <div className="surface-card p-6">
              <h3 className="font-heading text-xl font-semibold text-slate-950">
                More from Augment Insights
              </h3>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blog/${item.slug}`}
                    className="group block rounded-3xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-cyan-200 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                          {item.category}
                        </p>
                        <h4 className="mt-2 font-heading text-lg font-semibold text-slate-950">
                          {item.title}
                        </h4>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-700"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default BlogArticlePageV2;
