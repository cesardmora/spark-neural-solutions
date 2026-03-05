import SectionBadge from "@/components/SectionBadge";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services-data";

const Servicios = () => (
  <div className="noise-bg">
    <div className="container pt-32 pb-24">
      <SectionBadge>CATÁLOGO</SectionBadge>
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4">
        Nuestros Servicios
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Soluciones de Inteligencia Artificial diseñadas para cada necesidad empresarial. 
        Desde generación de texto hasta análisis predictivo.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} showPrice />
        ))}
      </div>
    </div>
  </div>
);

export default Servicios;
