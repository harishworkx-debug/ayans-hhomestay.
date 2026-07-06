import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, anonKey);

export type BlogCategory = {
  slug: string;
  name: string;
  description: string | null;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category_slug: string;
  author: string;
  reading_minutes: number;
  cover_image: string | null;
  cover_alt: string | null;
  published_at: string;
};

export type BlogPostSummary = Omit<BlogPost, "body">;
