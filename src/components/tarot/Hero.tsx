import { Star } from "lucide-react";

export function Hero() {
  return (
    <header className="relative overflow-hidden px-6 pt-24 pb-28 md:pt-32 md:pb-36">
      {/* decorative stars */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Star className="absolute left-[8%] top-[18%] h-3 w-3 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
        <Star className="absolute right-[12%] top-[26%] h-2 w-2 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
        <Star className="absolute left-[18%] bottom-[20%] h-2 w-2 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
        <Star className="absolute right-[20%] bottom-[28%] h-3 w-3 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold-soft)] bg-card px-4 py-1.5">
          <Star className="h-3 w-3 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Tarot & Orientação</span>
          <Star className="h-3 w-3 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
        </div>

        <h1 className="font-serif text-4xl leading-tight md:text-6xl text-foreground">
          Leituras de Tarot <span className="italic text-[color:var(--gold)]">da Larissa</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
          Um espaço acolhedor para você encontrar respostas, clareza e direção.
          Que as cartas iluminem o seu caminho com sabedoria e gentileza.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-[color:var(--gold)] hover:text-foreground"
          >
            Ver Catálogo
          </a>
          <a
            href="#aviso"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Como funciona
          </a>
        </div>
      </div>
    </header>
  );
}
