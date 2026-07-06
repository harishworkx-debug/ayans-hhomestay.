import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { Calendar, Clock, ArrowUpRight, ChevronLeft, MessageCircle } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaSection } from "@/components/site/CtaSection";
import { useReveal } from "@/hooks/use-reveal";
import { supabase, type BlogPost, type BlogPostSummary, type BlogCategory } from "@/lib/supabase";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  buildMetaTags,
  buildLinkTags,
  articleSchema,
  breadcrumbSchema,
  jsonLdScripts,
} from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: buildMetaTags({
          title: "Article Not Found | Ayansh Snow-View Blog",
          description: "This blog post may have been moved or is no longer available.",
          path: "/blog",
          noindex: true,
        }),
        links: buildLinkTags("/blog"),
      };
    }
    return {
      meta: buildMetaTags({
        title: `${post.title} | Ayansh Snow-View Blog`,
        description: post.excerpt,
        path: `/blog/${post.slug}`,
        image: post.cover_image ?? undefined,
        imageAlt: post.cover_alt ?? post.title,
        type: "article",
        publishedTime: post.published_at,
      }),
      links: buildLinkTags(`/blog/${post.slug}`),
      scripts: jsonLdScripts(
        articleSchema({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.cover_image ?? undefined,
          imageAlt: post.cover_alt ?? post.title,
          publishedTime: post.published_at,
          author: post.author,
        }),
        breadcrumbSchema([
          { name: "Home", to: "/" },
          { name: "Blog", to: "/blog" },
          { name: post.category_slug, to: `/blog/category/${post.category_slug}` },
          { name: post.title, to: `/blog/${post.slug}` },
        ]),
      ),
    };
  },
  loader: async ({ params }) => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", params.slug)
      .maybeSingle();
    if (error || !data) return { post: null };
    return { post: data as BlogPost };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  useReveal();
  const { post: loadedPost } = Route.useLoaderData();
  const { slug } = Route.useParams();
  const [post, setPost] = useState<BlogPost | null>(loadedPost ?? null);
  const [related, setRelated] = useState<BlogPostSummary[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(!loadedPost);
  const [error, setError] = useState(!loadedPost);

  useEffect(() => {
    if (loadedPost) {
      (async () => {
        const [relRes, catRes] = await Promise.all([
          supabase
            .from("blog_posts")
            .select("slug, title, excerpt, category_slug, author, reading_minutes, cover_image, cover_alt, published_at")
            .neq("slug", slug)
            .order("published_at", { ascending: false })
            .limit(3),
          supabase.from("blog_categories").select("slug, name, description").order("name"),
        ]);
        setRelated(relRes.data ?? []);
        setCategories(catRes.data ?? []);
      })();
      return;
    }
    (async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error || !data) {
        setError(true);
        setLoading(false);
        return;
      }
      setPost(data);
      const [relRes, catRes] = await Promise.all([
        supabase
          .from("blog_posts")
          .select("slug, title, excerpt, category_slug, author, reading_minutes, cover_image, cover_alt, published_at")
          .neq("slug", slug)
          .order("published_at", { ascending: false })
          .limit(3),
        supabase.from("blog_categories").select("slug, name, description").order("name"),
      ]);
      setRelated(relRes.data ?? []);
      setCategories(catRes.data ?? []);
      setLoading(false);
    })();
  }, [slug, loadedPost]);

  if (loading) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
          <div className="animate-pulse">
            <div className="aspect-[16/9] rounded-3xl bg-border/30" />
            <div className="mt-8 h-8 w-3/4 rounded bg-border/30" />
            <div className="mt-4 h-4 w-full rounded bg-border/20" />
            <div className="mt-2 h-4 w-5/6 rounded bg-border/20" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 text-center">
          <h1 className="text-2xl font-semibold text-pine">Article not found</h1>
          <p className="mt-3 text-muted-foreground">
            This blog post may have been moved or is no longer available.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-snow transition-all hover:bg-pine"
          >
            <ChevronLeft className="h-4 w-4" /> Back to blog
          </Link>
        </div>
      </Layout>
    );
  }

  const categoryName =
    categories.find((c) => c.slug === post.category_slug)?.name ?? post.category_slug;

  return (
    <Layout>
      <Breadcrumbs
        items={[
          { name: "Home", to: "/" },
          { name: "Blog", to: "/blog" },
          { name: categoryName, to: `/blog/category/${post.category_slug}` },
          { name: post.title, to: `/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-6 pb-10">
        <Link
          to="/blog/category/$category"
          params={{ category: post.category_slug }}
          className="text-xs font-semibold uppercase tracking-widest text-moss hover:text-forest"
        >
          {categoryName}
        </Link>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-pine md:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
          {post.excerpt}
        </p>
        <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.published_at).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.reading_minutes} min read
          </span>
          <span>By {post.author}</span>
        </div>
      </section>

      {/* Cover image */}
      <section className="mx-auto max-w-4xl px-6">
        <img
          src={post.cover_image ?? "/assets/trek.jpg"}
          alt={post.cover_alt ?? post.title}
          width={1200}
          height={675}
          loading="eager"
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-lift"
        />
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-6">
          <div className="prose-blog">
            {renderMarkdown(post.body)}
          </div>

          {/* CTA within article */}
          <div className="mt-12 rounded-3xl border-2 border-forest/20 bg-gradient-to-r from-forest/5 to-moss/5 p-7 text-center">
            <h2 className="text-lg font-semibold text-pine">Planning a trek or a stay?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We are here to help. Message us on WhatsApp for availability and guidance.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-snow transition-all hover:bg-pine"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </article>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-cream/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="reveal text-2xl font-semibold text-pine md:text-3xl">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="reveal group overflow-hidden rounded-3xl border border-border/60 bg-snow shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={r.cover_image ?? "/assets/trek.jpg"}
                      alt={r.cover_alt ?? r.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold leading-snug text-pine">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {r.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-forest">
                      Read more <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </Layout>
  );
}

function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: ReactNode[] = [];
  let list: string[] = [];
  let para: string[] = [];

  const flushPara = () => {
    if (para.length) {
      elements.push(<p key={`p-${elements.length}`}>{para.join(" ")}</p>);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      elements.push(
        <ul key={`ul-${elements.length}`}>
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>,
      );
      list = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      flushPara();
      flushList();
      elements.push(<h1 key={`h1-${elements.length}`}>{trimmed.slice(2)}</h1>);
    } else if (trimmed.startsWith("## ")) {
      flushPara();
      flushList();
      elements.push(<h2 key={`h2-${elements.length}`}>{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith("### ")) {
      flushPara();
      flushList();
      elements.push(<h3 key={`h3-${elements.length}`}>{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("- ")) {
      flushPara();
      list.push(trimmed.slice(2));
    } else if (trimmed === "") {
      flushPara();
      flushList();
    } else {
      para.push(trimmed);
    }
  }
  flushPara();
  flushList();
  return elements;
}
