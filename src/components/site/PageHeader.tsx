import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import type { Crumb } from "@/lib/site";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="relative">
      <Breadcrumbs items={crumbs} />
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-10 md:pt-8 md:pb-14">
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-moss">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-pine md:text-5xl lg:text-[56px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
