import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services-data";

const glowMap = {
  cyan: "hover:glow-cyan hover:border-nf-cyan/30",
  violet: "hover:glow-violet hover:border-nf-violet/30",
  emerald: "hover:glow-emerald hover:border-nf-emerald/30",
  amber: "hover:glow-amber hover:border-nf-amber/30",
  rose: "hover:glow-rose hover:border-nf-rose/30",
  indigo: "hover:glow-indigo hover:border-nf-indigo/30",
};

const textColorMap = {
  cyan: "text-nf-cyan",
  violet: "text-nf-violet",
  emerald: "text-nf-emerald",
  amber: "text-nf-amber",
  rose: "text-nf-rose",
  indigo: "text-nf-indigo",
};

interface ServiceCardProps {
  service: Service;
  showPrice?: boolean;
}

const ServiceCard = ({ service, showPrice = false }: ServiceCardProps) => (
  <Link
    to={`/servicios/${service.slug}`}
    className={cn(
      "group block bg-card border border-border rounded p-6 transition-all duration-300 hover:-translate-y-1",
      glowMap[service.color]
    )}
  >
    <span className="text-3xl">{service.icon}</span>
    <h3 className="font-display text-lg font-semibold mt-4 mb-2 text-foreground">
      {service.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      {service.shortDesc}
    </p>
    {showPrice && (
      <p className={cn("font-mono text-sm font-bold mb-3", textColorMap[service.color])}>
        {service.price}
      </p>
    )}
    <span
      className={cn(
        "text-sm font-medium transition-colors duration-200",
        textColorMap[service.color]
      )}
    >
      Ver más →
    </span>
  </Link>
);

export default ServiceCard;
