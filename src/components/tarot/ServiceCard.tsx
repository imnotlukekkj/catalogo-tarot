import { Sparkles } from "lucide-react";
import { whatsappLink, type Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-[color:var(--gold-soft)] bg-card p-6 shadow-[0_1px_0_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-[0_12px_30px_-12px_rgba(74,59,50,0.25)]">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={1.5} />
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Tarot</span>
      </div>
      <h3 className="font-serif text-xl leading-snug text-foreground">{service.title}</h3>
      {service.description && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      )}
      <div className="mt-6 flex items-end justify-between gap-4 pt-4 border-t border-dashed border-[color:var(--gold-soft)]">
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Investimento</span>
          <span className="font-serif text-2xl text-foreground">R${service.price}</span>
        </div>
        <a
          href={whatsappLink(service.title, service.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-[color:var(--gold)] hover:text-foreground"
        >
          Agendar
        </a>
      </div>
    </div>
  );
}
