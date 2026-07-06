import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowUpRight, BookOpen } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { useReveal } from "@/hooks/use-reveal";
import { supabase, type BlogPostSummary, type BlogCategory } from "@/lib/supabase";
import {
  buildMetaTags,
  buildLinkTags,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMetaTags({
      title:
        "Blog — Trekking Guides, Kinnaur Travel Tips & Homestay Stories | Ayansh Snow-View",
      description:
        "Read practical guides for the Yulla Kanda trek, travel tips for Kinnaur, and real stories from our homestay. Expert advice on routes, seasons, packing, altitude safety, and Kinnauri culture.",
      path: "/blog",
      image: "/assets/g3.jpg",
      imageAlt: "Golden sunrise over the Kinnaur Kailash mountain range",
    }),
    links: buildLinkTags("/blog"),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Blog", to: "/blog" },
      ]),
    ),
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  useReveal();
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [{ data: postData }, { data: catData }] = await Promise.all([
        supabase
          .from("blog_posts")
          .select("slug, title, excerpt, category_slug, author, reading_minutes, cover_image, cover_alt, published_at")
          .order("published_at", { ascending: false }),
        supabase.from("blog_categories").select("slug, name, description").order("name"),
      ]);
      setPosts(postData ?? []);
      setCategories(catData ?? []);
      setLoading(false);
    })();
  }, []);

  return (
    <Layout>
      <PageHeader
        eyebrow="Blog"
        title="Stories from the mountains"
        subtitle="Practical trekking guides, Kinnaur travel tips, and real stories from our homestay — written from years of living and guiding in these hills."
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Blog", to: "/blog" },
        ]}
      />

      {/* Category pills */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/blog"
              className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-snow"
            >
              All posts
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/blog/category/$category"
                params={{ category: c.slug }}
                className="rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-cream"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {posts.length > 0 && (
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              to="/blog/$slug"
              params={{ slug: posts[0].slug }}
              className="reveal group grid overflow-hidden rounded-3xl border border-border/60 bg-snow shadow-soft transition-all hover:shadow-lift lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={posts[0].cover_image ?? "/assets/trek.jpg"}
                  alt={posts[0].cover_alt ?? posts[0].title}
                  width={1200}
                  height={800}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-moss">
                  Featured
                </span>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-pine md:text-3xl">
                  {posts[0].title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {posts[0].excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(posts[0].published_at).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {posts[0].reading_minutes} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  Read article <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse rounded-3xl border border-border/40 bg-cream/30 p-6">
                  <div className="aspect-[16/10] rounded-xl bg-border/30" />
                  <div className="mt-4 h-5 w-3/4 rounded bg-border/30" />
                  <div className="mt-3 h-4 w-full rounded bg-border/20" />
                  <div className="mt-2 h-4 w-2/3 rounded bg-border/20" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="rounded-3xl border border-border/60 bg-cream/30 p-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-moss" />
              <p className="mt-4 text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(1).map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="reveal group overflow-hidden rounded-3xl border border-border/60 bg-snow shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover_image ?? "/assets/trek.jpg"}
                      alt={p.cover_alt ?? p.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-moss">
                      {categories.find((c) => c.slug === p.category_slug)?.name ?? p.category_slug}
                    </span>
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-pine">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {p.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(p.published_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {p.reading_minutes} min
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
