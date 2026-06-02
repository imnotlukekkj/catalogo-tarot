import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/tarot/Hero";
import { Section } from "@/components/tarot/Section";
import { ServiceCard } from "@/components/tarot/ServiceCard";
import { perguntas, tiragens, WHATSAPP_NUMBER } from "@/data/services";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leituras de Tarot da Larissa | Orientação e Tiragens" },
      { name: "description", content: "Catálogo de leituras de tarot, perguntas, orientações e tiragens especiais com Larissa. Agende sua leitura pelo WhatsApp." },
      { property: "og:title", content: "Leituras de Tarot da Larissa" },
      { property: "og:description", content: "Encontre clareza e direção. Tiragens, orientações e leituras personalizadas." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <div id="catalogo">
        <Section
          eyebrow="Catálogo"
          title="Nossos Serviços"
          description="Escolha entre respostas pontuais e orientações, ou leituras mais profundas com métodos tradicionais e exclusivos."
        >
          <Tabs defaultValue="perguntas" className="w-full">
            <TabsList className="mx-auto mb-10 flex h-auto w-full max-w-lg flex-col gap-2 rounded-full border border-[color:var(--gold-soft)] bg-card p-1.5 sm:flex-row">
              <TabsTrigger
                value="perguntas"
                className="flex-1 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-all data-[state=active]:bg-foreground data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                Perguntas e Orientações
              </TabsTrigger>
              <TabsTrigger
                value="tiragens"
                className="flex-1 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-all data-[state=active]:bg-foreground data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
              >
                Tiragens Especiais e Completas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="perguntas">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {perguntas.map((s) => (
                  <ServiceCard key={s.title} service={s} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tiragens">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tiragens.map((s) => (
                  <ServiceCard key={s.title} service={s} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Section>
      </div>

      {/* Aviso */}
      <section id="aviso" className="scroll-mt-20 px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[color:var(--gold)] bg-card p-8 md:p-10 text-center shadow-[0_8px_30px_-12px_rgba(212,175,55,0.35)]">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--gold-soft)]">
            <AlertCircle className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl text-foreground">Aviso Importante</h3>
          <div className="mx-auto my-4 h-px w-12 bg-[color:var(--gold)]" />
          <p className="text-base leading-relaxed text-muted-foreground">
            Para garantir a organização da nossa agenda, as tiragens são realizadas
            mediante a confirmação do pagamento antecipado.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[color:var(--gold-soft)] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <Star className="h-3 w-3 text-[color:var(--gold)]" fill="currentColor" strokeWidth={0} />
            <span className="font-serif text-lg text-foreground">Leituras de Tarot da Larissa</span>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-[color:var(--gold)]"
          >
            WhatsApp · (91) 92003-9251
          </a>
        </div>
      </footer>
    </main>
  );
}
