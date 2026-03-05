import { useParams, Link } from "react-router-dom";
import { services } from "@/lib/services-data";
import ServiceCard from "@/components/ServiceCard";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const textColorMap: Record<string, string> = {
  cyan: "text-nf-cyan",
  violet: "text-nf-violet",
  emerald: "text-nf-emerald",
  amber: "text-nf-amber",
  rose: "text-nf-rose",
  indigo: "text-nf-indigo",
};

const ServicioDetalle = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container pt-32 pb-24 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Servicio no encontrado</h1>
        <Link to="/servicios" className="text-primary hover:underline">
          ← Volver a servicios
        </Link>
      </div>
    );
  }

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="noise-bg">
      <div className="container pt-32 pb-24">
        {/* Breadcrumbs */}
        <nav className="font-mono text-xs text-muted-foreground mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
          <span>/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left */}
          <div className="lg:col-span-3">
            <span className="text-5xl">{service.icon}</span>
            <h1 className="font-display text-4xl font-extrabold mt-4 mb-6">{service.title}</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">{service.longDesc}</p>
            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-flex items-center h-11 px-6 rounded bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Solicitar este servicio
              </Link>
            </div>
          </div>

          {/* Right — sticky card */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 bg-card border border-border rounded p-6">
              <p className={cn("font-mono text-2xl font-bold mb-6", textColorMap[service.color])}>
                {service.price}
              </p>
              <Link
                to="/contacto"
                className="flex items-center justify-center h-11 w-full rounded bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 mb-3"
              >
                Empezar ahora
              </Link>
              <Link
                to="/contacto"
                className="flex items-center justify-center h-11 w-full rounded border border-border text-foreground font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-200 mb-6"
              >
                Hablar con ventas
              </Link>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-nf-emerald mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="mt-24">
          <h2 className="font-display text-2xl font-bold mb-8">Otros servicios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} showPrice />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioDetalle;
