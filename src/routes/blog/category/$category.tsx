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

export const Route = createFileRoute("/blog/category/$category")({
  head: ({ params }) => ({
    meta: buildMetaTags({
      title: `${categoryLabel(params.category)} — Blog Category | Ayansh Snow-View`,
      description: `Browse all articles in the ${categoryLabel(params.category)} category — practical guides and stories from Kinnaur and the Yulla Kanda trek.`,
      path: `/blog/category/${params.category}`,
      image: "/assets/g3.jpg",
      imageAlt: "Golden sunrise over the Kinnaur Kailash mountain range",
    }),
    links: buildLinkTags(`/blog/category/${params.category}`),
    scripts: jsonLdScripts(
      breadcrumbSchema([
        { name: "Home", to: "/" },
        { name: "Blog", to: "/blog" },
        { name: categoryLabel(params.category), to: `/blog/category/${params.category}` },
      ]),
    ),
  }),
  component: BlogCategoryPage,
});

function categoryLabel(slug: string) {
  const map: Record<string, string> = {
    "trekking-guides": "Trekking Guides",
    "kinnaur-travel": "Kinnaur Travel",
    "homestay-stories": "Homestay Stories",
  };
  return map[slug] ?? slug;
}

function BlogCategoryPage() {
  useReveal();
  const { category } = Route.useParams();
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryName = categoryLabel(category);

  useEffect(() => {
    (async () => {
      const [{ data: postData }, { data: catData }] = await Promise.all([
        supabase
          .from("blog_posts")
          .select("slug, title, excerpt, category_slug, author, reading_minutes, cover_image, cover_alt, published_at")
          .eq("category_slug", category)
          .order("published_at", { ascending: false }),
        supabase.from("blog_categories").select("slug, name, description").order("name"),
      ]);
      setPosts(postData ?? []);
      setCategories(catData ?? []);
      setLoading(false);
    })();
  }, [category]);

  const categoryDesc = categories.find((c) => c.slug === category)?.description;

  return (
    <Layout>
      <PageHeader
        eyebrow="Blog Category"
        title={categoryName}
        subtitle={categoryDesc ?? `Browse all articles in the ${categoryName} category.`}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Blog", to: "/blog" },
          { name: categoryName, to: `/blog/category/${category}` },
        ]}
      />

      {/* Category pills */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-3">
            <Link
              to="/blog"
              className="rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-cream"
            >
              All posts
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/blog/category/$category"
                params={{ category: c.slug }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  c.slug === category
                    ? "bg-forest text-snow"
                    : "border border-border/60 text-pine hover:bg-cream"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6">
          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-pulse rounded-3xl border border-border/40 bg-cream/30 p-6">
                  <div className="aspect-[16/10] rounded-xl bg-border/30" />
                  <div className="mt-4 h-5 w-3/4 rounded bg-border/30" />
                  <div className="mt-3 h-4 w-full rounded bg-border/20" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="rounded-3xl border border-border/60 bg-cream/30 p-12 text-center">
              <BookOpen className="mx-auto h-10 w-10 text-moss" />
              <p className="mt-4 text-muted-foreground">No posts in this category yet.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
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
                    <h2 className="text-lg font-semibold leading-snug text-pine">{p.title}</h2>
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
