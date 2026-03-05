export interface Service {
  slug: string;
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  price: string;
  color: "cyan" | "violet" | "emerald" | "amber" | "rose" | "indigo";
  features: string[];
}

export const services: Service[] = [
  {
    slug: "generacion-de-texto",
    icon: "✍️",
    title: "Generación de Texto",
    shortDesc: "Modelos de lenguaje avanzados para crear contenido, resumir documentos y generar respuestas naturales.",
    longDesc: "Nuestro servicio de Generación de Texto utiliza modelos de lenguaje de última generación, entrenados con miles de millones de parámetros. Ideal para automatizar la creación de contenido, resumir documentos extensos, traducir idiomas y generar respuestas conversacionales naturales para tus aplicaciones.",
    price: "Desde €49/mes",
    color: "cyan",
    features: [
      "Modelos GPT personalizados",
      "Fine-tuning con tus datos",
      "API REST y WebSocket",
      "Soporte multiidioma",
    ],
  },
  {
    slug: "vision-por-computadora",
    icon: "👁️",
    title: "Visión por Computadora",
    shortDesc: "Reconocimiento de imágenes, detección de objetos y análisis visual automatizado en tiempo real.",
    longDesc: "Potencia tu aplicación con Visión por Computadora avanzada. Detección de objetos, clasificación de imágenes, OCR, reconocimiento facial y análisis de video en tiempo real. Todo accesible mediante nuestra API escalable y optimizada para baja latencia.",
    price: "Desde €99/mes",
    color: "violet",
    features: [
      "Detección de objetos en tiempo real",
      "OCR con 99.5% de precisión",
      "Reconocimiento facial seguro",
      "Análisis de video streaming",
    ],
  },
  {
    slug: "automatizacion-inteligente",
    icon: "⚙️",
    title: "Automatización Inteligente",
    shortDesc: "Workflows automatizados con IA que optimizan procesos empresariales y reducen costes operativos.",
    longDesc: "Transforma tus procesos de negocio con Automatización Inteligente. Nuestros agentes de IA aprenden de tus workflows, identifican cuellos de botella y automatizan tareas repetitivas. Integración con más de 200 herramientas empresariales.",
    price: "Desde €149/mes",
    color: "emerald",
    features: [
      "Agentes autónomos de IA",
      "Integración con 200+ herramientas",
      "Dashboard de métricas en tiempo real",
      "Workflows personalizables",
    ],
  },
  {
    slug: "chatbots-conversacionales",
    icon: "💬",
    title: "Chatbots Conversacionales",
    shortDesc: "Asistentes virtuales inteligentes con comprensión de lenguaje natural y memoria contextual.",
    longDesc: "Despliega chatbots que realmente entienden a tus usuarios. Con memoria contextual, integración con bases de conocimiento y capacidad de escalar a miles de conversaciones simultáneas. Disponibles en web, WhatsApp, Telegram y más.",
    price: "Desde €79/mes",
    color: "amber",
    features: [
      "Memoria contextual avanzada",
      "Multicanal: web, WhatsApp, Telegram",
      "Base de conocimiento integrada",
      "Análisis de sentimiento",
    ],
  },
  {
    slug: "analisis-predictivo",
    icon: "📊",
    title: "Análisis Predictivo",
    shortDesc: "Modelos predictivos y de machine learning para anticipar tendencias y tomar decisiones basadas en datos.",
    longDesc: "Anticipa el futuro con nuestros modelos de Análisis Predictivo. Detección de anomalías, predicción de demanda, scoring de riesgo y segmentación de clientes. Todo con dashboards interactivos y alertas automatizadas.",
    price: "Desde €199/mes",
    color: "rose",
    features: [
      "Predicción de demanda",
      "Detección de anomalías",
      "Scoring de riesgo crediticio",
      "Dashboards interactivos",
    ],
  },
  {
    slug: "audio-sintesis-de-voz",
    icon: "🎙️",
    title: "Audio y Síntesis de Voz",
    shortDesc: "Conversión de texto a voz natural, transcripción de audio y clonación de voz con IA.",
    longDesc: "Lleva la interacción por voz al siguiente nivel. Text-to-Speech con voces ultrarrealistas, transcripción de audio con speaker diarization, y clonación de voz personalizada. Ideal para podcasts, asistentes de voz e IVR.",
    price: "Desde €59/mes",
    color: "indigo",
    features: [
      "Voces ultrarrealistas en 30+ idiomas",
      "Transcripción con speaker diarization",
      "Clonación de voz personalizada",
      "API de streaming de baja latencia",
    ],
  },
];
