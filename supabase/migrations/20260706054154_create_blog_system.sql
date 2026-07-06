/*
# Create blog system for Ayansh Snow-View (single-tenant, no auth)

1. New Tables
- `blog_categories`: category for blog posts (slug, name, description)
- `blog_posts`: full blog articles with SEO metadata, body in markdown, related category

2. Security
- Enable RLS on both tables.
- Public read for anon + authenticated (content is intentionally public/published).
- No insert/update/delete policies (content is managed via SQL, not from the frontend).

3. Important Notes
- This is a single-tenant, no-auth marketing site. Blog content is read-only from the frontend.
- `published_at` controls ordering and visibility (only posts with a non-null published_at are shown).
- `slug` and `category_slug` are unique and URL-safe.
- Body content is markdown authored to be genuinely helpful (E-E-A-T), not keyword-stuffed.
*/

CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  body text NOT NULL,
  category_slug text NOT NULL REFERENCES blog_categories(slug) ON DELETE RESTRICT,
  author text NOT NULL DEFAULT 'Ayansh Snow-View Team',
  reading_minutes integer NOT NULL DEFAULT 5,
  cover_image text,
  cover_alt text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_blog_categories" ON blog_categories;
CREATE POLICY "public_read_blog_categories"
ON blog_categories FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "public_read_blog_posts" ON blog_posts;
CREATE POLICY "public_read_blog_posts"
ON blog_posts FOR SELECT
TO anon, authenticated USING (published_at IS NOT NULL);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category_slug ON blog_posts(category_slug);
