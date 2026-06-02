import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              {eyebrow}
            </span>
          )}
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">{title}</h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
              {description}
            </p>
          )}
          <div className="mx-auto mt-6 h-px w-16 bg-[color:var(--gold)]" />
        </div>
        {children}
      </div>
    </section>
  );
}
