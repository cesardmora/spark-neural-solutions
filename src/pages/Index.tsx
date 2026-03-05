import { Link } from "react-router-dom";
import SectionBadge from "@/components/SectionBadge";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services-data";

const stats = [
  { value: "500+", label: "Proyectos entregados" },
  { value: "98%", label: "Satisfacción de clientes" },
  { value: "60ms", label: "Latencia promedio" },
  { value: "24/7", label: "Soporte técnico" },
];

const terminalCode = `<?php
// NeuralForge API — Generación de Texto
$response = NeuralForge::generate([
    'model'  => 'nf-text-v3',
    'prompt' => 'Escribe un resumen ejecutivo...',
    'tokens' => 512,
]);

// Response:
// status: 200
// tokens_used: 487
// confidence: 0.96
// latency: 42ms`;

const Index = () => (
  <div className="noise-bg">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center grid-hero overflow-hidden">
      <div className="container relative z-10 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <SectionBadge>INTELIGENCIA ARTIFICIAL</SectionBadge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Construye el futuro con{" "}
              <span className="text-primary">Inteligencia Artificial</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Soluciones de IA a medida para empresas que quieren automatizar procesos, 
              reducir costes y escalar su negocio con tecnología de vanguardia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/servicios"
                className="inline-flex items-center h-11 px-6 rounded bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Ver servicios
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center h-11 px-6 rounded border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
              >
                Hablar con un experto
              </Link>
            </div>
          </div>

          {/* Terminal card */}
          <div
            className="opacity-0 animate-fade-up hidden lg:block"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-card border border-border rounded overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-nf-rose/70" />
                <span className="w-3 h-3 rounded-full bg-nf-amber/70" />
                <span className="w-3 h-3 rounded-full bg-nf-emerald/70" />
                <span className="ml-3 text-xs font-mono text-muted-foreground">
                  neuralforge-api.php
                </span>
              </div>
              <pre className="p-5 text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto">
                <code>{terminalCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="border-y border-border bg-secondary/30">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured services */}
    <section className="container py-24">
      <SectionBadge>SERVICIOS</SectionBadge>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
        Servicios destacados
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </section>

    {/* CTA band */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-nf-cyan/5 to-transparent pointer-events-none" />
      <div className="container py-20 text-center relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
          ¿Listo para transformar tu empresa?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Agenda una demo gratuita y descubre cómo NeuralForge puede impulsar tu negocio.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center h-11 px-8 rounded bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 glow-cyan"
        >
          Solicitar demo gratuita
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
