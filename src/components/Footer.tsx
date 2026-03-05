import { Link } from "react-router-dom";
import { services } from "@/lib/services-data";

const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="container py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-lg font-bold">
            <span className="text-nf-cyan">N</span>euralForge
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Servicios avanzados de Inteligencia Artificial para empresas que quieren liderar su industria.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Servicios</h4>
          <ul className="space-y-2">
            {services.slice(0, 4).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Empresa</h4>
          <ul className="space-y-2">
            {["Sobre nosotros", "Blog", "Carreras", "Prensa"].map((item) => (
              <li key={item}>
                <span className="text-sm text-muted-foreground cursor-default">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hola@neuralforge.dev</li>
            <li>+34 912 345 678</li>
            <li>Madrid, España</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} NeuralForge. Todos los derechos reservados.</span>
        <span className="font-mono">built with Laravel 11.x</span>
      </div>
    </div>
  </footer>
);

export default Footer;
