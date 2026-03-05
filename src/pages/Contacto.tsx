import { useState } from "react";
import { z } from "zod";
import { services } from "@/lib/services-data";
import SectionBadge from "@/components/SectionBadge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  email: z.string().trim().email("Introduce un email válido").max(255),
  empresa: z.string().max(100).optional(),
  servicio: z.string().optional(),
  mensaje: z.string().trim().min(1, "El mensaje es obligatorio").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactItems = [
  { icon: Mail, label: "Email", value: "hola@neuralforge.dev" },
  { icon: Phone, label: "Teléfono", value: "+34 912 345 678" },
  { icon: MapPin, label: "Oficina", value: "Calle Gran Vía 42, Madrid" },
  { icon: Clock, label: "Respuesta", value: "Menos de 24 horas" },
];

const Contacto = () => {
  const [form, setForm] = useState<ContactForm>({
    nombre: "",
    email: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSuccess(true);
    setForm({ nombre: "", email: "", empresa: "", servicio: "", mensaje: "" });
    setErrors({});
  };

  const inputClass =
    "w-full h-11 px-4 rounded bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200";

  return (
    <div className="noise-bg">
      <div className="container pt-32 pb-24">
        <SectionBadge>CONTACTO</SectionBadge>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-12">
          Hablemos de tu proyecto
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              ¿Tienes una idea o necesitas asesoramiento? Nuestro equipo de expertos 
              en IA está listo para ayudarte a encontrar la solución perfecta.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="border border-border rounded p-4 flex items-start gap-3"
                >
                  <item.icon size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {success && (
              <div className="mb-6 p-4 rounded border border-nf-emerald/30 bg-nf-emerald/5 text-nf-emerald text-sm">
                ✓ Mensaje enviado correctamente. Te responderemos en menos de 24 horas.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Nombre *</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="text-xs text-destructive mt-1">{errors.nombre}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="tu@empresa.com"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Empresa</label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Servicio de interés</label>
                <select
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.icon} {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Mensaje *</label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} h-auto py-3 resize-none`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.mensaje && (
                  <p className="text-xs text-destructive mt-1">{errors.mensaje}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center h-11 px-8 rounded bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
