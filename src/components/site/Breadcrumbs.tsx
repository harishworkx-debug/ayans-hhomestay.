import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/site";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-24 md:pt-28">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-1.5">
              {last ? (
                <span className="font-medium text-pine" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link to={c.to} className="transition-colors hover:text-pine">
                    {c.name}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 text-border" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
