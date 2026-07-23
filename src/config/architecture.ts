import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { getAbsoluteUrl } from "@/lib/seo";

export type ArchitectureLink = {
  href: string;
  label: string;
  text?: string;
};

export type ArchitectureFaq = {
  question: string;
  answer: string;
};

export type ArchitectureSection = {
  heading: string;
  paragraphs: string[];
};

export type ArchitecturePage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  cta: string;
  sections: ArchitectureSection[];
  links: ArchitectureLink[];
  faq?: ArchitectureFaq[];
};

const whatsappDefault = createWhatsAppUrl(
  "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura o reparacion de mi coche. Puedo enviar fotos por WhatsApp.",
);

export const hubPages: ArchitecturePage[] = [
  {
    path: "/servicios",
    title: "Servicios de pintura y carrocería | PaintLab",
    description:
      "Consulta los servicios de pintura por piezas, pintura completa, reparación de carrocería, arañazos y recuperación de faros de PaintLab.",
    h1: "Servicios de pintura y carrocería",
    eyebrow: "Servicios",
    lead:
      "Una guía clara de los trabajos que ofrece el taller para elegir el servicio adecuado antes de enviar las fotos por WhatsApp.",
    cta: "Consultar servicio por WhatsApp",
    sections: [
      {
        heading: "Servicios organizados por necesidad real",
        paragraphs: [
          "Este hub agrupa las paginas principales de pintura y carroceria para que el usuario pueda elegir segun el dano: pintar una pieza, pintar el coche completo, reparar aranazos, pulir la carroceria o recuperar faros.",
          "La estructura evita crear paginas artificiales. Cada servicio existe porque responde a una consulta frecuente y puede recibir enlaces desde ciudades, casos, FAQ y articulos futuros.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pintura-coche", label: "Pintura de coche", text: "Servicio central para reparar y pintar vehiculos." },
      { href: "/servicios/pintar-coche-completo", label: "Pintar coche completo", text: "Para cambios o restauraciones amplias de pintura." },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes", text: "Roces, marcas urbanas y danos en plastico." },
      { href: "/servicios/reparacion-carroceria", label: "Reparacion de carroceria", text: "Golpes, paneles y preparacion antes de pintar." },
      { href: "/servicios/reparacion-aranazos-coche", label: "Reparacion de aranazos", text: "Valoracion de marcas leves o profundas." },
      { href: "/servicios/pulido-carroceria", label: "Pulido de carroceria", text: "Brillo, microaranazos y pintura apagada." },
      { href: "/servicios/pulido-faros", label: "Pulido de faros", text: "Opticas opacas o amarillentas." },
      { href: "/pintura-capo", label: "Pintura de capó", text: "Preparación y pintura de una pieza frontal visible." },
      { href: "/pintura-puerta", label: "Pintura de puertas", text: "Daños, roces y acabado integrado en los laterales." },
      { href: "/pintura-aleta", label: "Pintura de aletas", text: "Reparación y pintura alrededor del paso de rueda." },
      { href: "/ciudades", label: "Zonas atendidas", text: "Torrevieja, Orihuela Costa, Guardamar y areas cercanas." },
    ],
  },
  {
    path: "/ciudades",
    title: "Zonas de servicio en Costa Blanca Sur | PaintLab",
    description:
      "Consulta las zonas de servicio de PaintLab en Costa Blanca Sur: Torrevieja, Orihuela Costa, Guardamar del Segura, Ciudad Quesada y La Mata.",
    h1: "Servicio de chapa y pintura en Costa Blanca Sur",
    eyebrow: "Zonas de servicio",
    lead:
      "Información para conductores de localidades cercanas que quieren solicitar una valoración previa antes de llevar el vehículo al taller.",
    cta: "Consultar desde mi zona",
    sections: [
      {
        heading: "Localidades desde las que recibimos consultas",
        paragraphs: [
          "PaintLab tiene su base en Torrevieja y atiende consultas de conductores de Orihuela Costa, Guardamar del Segura, Ciudad Quesada, La Mata y otras localidades de Costa Blanca Sur.",
          "Las páginas locales explican cómo preparar una consulta con fotos y qué daños son habituales en cada zona, sin duplicar la información de la página principal.",
        ],
      },
    ],
    links: [
      { href: "/es", label: "Taller de chapa y pintura en Torrevieja", text: "Página principal de PaintLab y base del taller." },
      { href: "/ciudades/orihuela-costa", label: "Orihuela Costa", text: "Urbanizaciones costeras y desplazamientos habituales." },
      { href: "/ciudades/guardamar-del-segura", label: "Guardamar del Segura", text: "Coches expuestos a sol, arena y salinidad." },
      { href: "/ciudades/ciudad-quesada", label: "Ciudad Quesada", text: "Vehiculos de residentes y uso diario." },
      { href: "/ciudades/la-mata", label: "La Mata", text: "Zona costera cercana a Torrevieja." },
      { href: "/servicios", label: "Servicios disponibles", text: "Consulta los trabajos antes de enviar fotos." },
    ],
  },
  {
    path: "/marcas",
    title: "Pintura de coches por marca | Pintura Torrevieja",
    description:
      "Futura seccion de pintura y reparacion por marcas de coche. En esta fase funciona como hub de arquitectura, sin paginas de marcas todavia.",
    h1: "Pintura por marca de coche",
    eyebrow: "Marcas",
    lead:
      "Esta seccion queda preparada para crecer con marcas reales cuando haya contenido suficiente, casos propios y consultas frecuentes.",
    cta: "Enviar fotos del coche",
    sections: [
      {
        heading: "Preparada para crecer con criterio",
        paragraphs: [
          "No se crean paginas de BMW, Audi, Toyota o Mercedes en esta fase para evitar contenido prematuro. El hub existe para ordenar la arquitectura y recibir enlaces desde futuras fichas y casos reales.",
          "Cuando haya material propio, cada marca debera tener informacion especifica: colores frecuentes, piezas habituales, enlaces a servicios y trabajos realizados.",
        ],
      },
    ],
    links: [
      { href: "/servicios", label: "Servicios", text: "Primero se priorizan servicios reales del taller." },
      { href: "/trabajos-realizados", label: "Trabajos realizados", text: "Los futuros casos ayudaran a validar paginas por marca." },
      { href: "/contacto", label: "Contacto", text: "Consulta por WhatsApp indicando marca y modelo." },
    ],
  },
  {
    path: "/trabajos-realizados",
    title: "Trabajos realizados de pintura de coches | Pintura Torrevieja",
    description:
      "Seccion preparada para publicar trabajos reales de pintura, pulido y reparacion de carroceria cuando haya fotos y datos verificables.",
    h1: "Trabajos realizados",
    eyebrow: "Casos",
    lead:
      "Un espacio para documentar trabajos reales. En esta etapa no se inventan casos, fotos, opiniones ni resultados.",
    cta: "Consultar una reparacion similar",
    sections: [
      {
        heading: "Solo casos verificables",
        paragraphs: [
          "Los casos deben publicarse cuando existan fotos propias, descripcion del problema, proceso realizado y resultado. Eso protege la confianza del usuario y refuerza la calidad del SEO.",
          "Cada caso futuro enlazara con una ciudad, una marca y uno o varios servicios relacionados.",
        ],
      },
    ],
    links: [
      { href: "/servicios", label: "Servicios", text: "Ver los trabajos que ya se pueden consultar." },
      { href: "/marcas", label: "Marcas", text: "Futura conexion entre casos y marcas." },
      { href: "/contacto", label: "Enviar fotos", text: "Solicita una valoracion de tu coche." },
    ],
  },
  {
    path: "/blog",
    title: "Blog sobre pintura de coches y carroceria | Pintura Torrevieja",
    description:
      "Futura guia de consejos sobre pintura de coches, pulido, faros, laca, aranazos y mantenimiento de carroceria.",
    h1: "Blog de pintura y carroceria",
    eyebrow: "Guia",
    lead:
      "El blog queda preparado como hub informativo. En esta fase no se publican articulos para evitar contenido superficial.",
    cta: "Consultar una duda por WhatsApp",
    sections: [
      {
        heading: "Contenido informativo con intencion clara",
        paragraphs: [
          "Los articulos futuros deberan resolver preguntas reales: precios orientativos sin inventar tarifas, diferencias entre pulir y pintar, cuidado de pintura en la costa y preparacion antes de enviar fotos.",
          "Cada articulo debera enlazar a una pagina de servicio cuando exista una necesidad comercial clara.",
        ],
      },
    ],
    links: [
      { href: "/faq", label: "FAQ", text: "Preguntas frecuentes ya disponibles." },
      { href: "/servicios", label: "Servicios", text: "Soluciones comerciales del taller." },
      { href: "/contacto", label: "Contacto", text: "Consulta directa si tienes fotos del dano." },
    ],
  },
  {
    path: "/faq",
    title: "Preguntas frecuentes sobre pintura de coches | Pintura Torrevieja",
    description:
      "FAQ sobre pintura de coches, reparacion de carroceria, pulido, fotos para presupuesto y consultas por WhatsApp.",
    h1: "Preguntas frecuentes",
    eyebrow: "FAQ",
    lead:
      "Respuestas breves a dudas habituales antes de pedir una valoracion de pintura, carroceria o pulido.",
    cta: "Resolver mi duda por WhatsApp",
    sections: [
      {
        heading: "Antes de traer el coche",
        paragraphs: [
          "La mayoria de consultas empiezan con fotos. Una valoracion inicial ayuda a decidir si conviene pintar, reparar, pulir o revisar el coche presencialmente.",
        ],
      },
    ],
    links: [
      { href: "/servicios", label: "Servicios", text: "Elige el tipo de reparacion." },
      { href: "/ciudades", label: "Zonas", text: "Consulta si estas cerca de Torrevieja." },
      { href: "/contacto", label: "Contacto", text: "WhatsApp y telefono." },
    ],
    faq: [
      {
        question: "Puedo pedir una valoracion por WhatsApp?",
        answer:
          "Si. Envia fotos claras del vehiculo, una imagen general, detalles del dano y el modelo del coche para orientar mejor la consulta.",
      },
      {
        question: "Como se decide entre pintar y pulir?",
        answer:
          "Depende de la profundidad del dano. El pulido mejora marcas superficiales y brillo; la pintura se valora cuando hay laca rota, aranazos profundos o piezas danadas.",
      },
      {
        question: "Trabajais solo en Torrevieja?",
        answer:
          "La pagina prioriza Torrevieja y zonas cercanas como Orihuela Costa, Guardamar, Ciudad Quesada y La Mata.",
      },
    ],
  },
  {
    path: "/contacto",
    title: "Contacto para pintura de coches en Torrevieja | Pintura Torrevieja",
    description:
      "Contacta con Pintura Torrevieja por WhatsApp o telefono para consultar pintura de coche, carroceria, pulido o faros.",
    h1: "Contacto",
    eyebrow: "Consulta",
    lead:
      "Envia fotos del vehiculo por WhatsApp para una primera orientacion sobre el trabajo necesario.",
    cta: "Escribir por WhatsApp",
    sections: [
      {
        heading: "Como preparar la consulta",
        paragraphs: [
          "Incluye una foto general del coche, varias fotos de cerca, el modelo, el ano aproximado y la zona que quieres reparar.",
          "Si el dano afecta a varias piezas, conviene mostrar el lateral o frontal completo para valorar si la reparacion debe ser localizada o mas amplia.",
        ],
      },
    ],
    links: [
      { href: "/servicios", label: "Servicios", text: "Revisa las opciones antes de escribir." },
      { href: "/faq", label: "FAQ", text: "Preguntas frecuentes." },
      { href: "/sobre-nosotros", label: "Sobre nosotros", text: "Informacion del taller." },
    ],
  },
  {
    path: "/sobre-nosotros",
    title: "Sobre Pintura Torrevieja | Taller de pintura de coches",
    description:
      "Informacion sobre Pintura Torrevieja, taller enfocado en pintura de vehiculos, carroceria, pulido y atencion por WhatsApp.",
    h1: "Sobre Pintura Torrevieja",
    eyebrow: "Taller",
    lead:
      "Una presentacion sencilla del proyecto: pintura, reparacion estetica y comunicacion clara antes de empezar.",
    cta: "Consultar mi coche",
    sections: [
      {
        heading: "Enfoque de trabajo",
        paragraphs: [
          "El sitio se centra en explicar servicios reales de pintura y carroceria de forma ordenada. La prioridad es que el usuario entienda que puede enviar fotos, recibir orientacion y decidir el siguiente paso.",
          "No se publican garantias, precios, trabajos o opiniones si no estan confirmados. Esa disciplina evita promesas falsas y mantiene la confianza del proyecto.",
        ],
      },
    ],
    links: [
      { href: "/servicios", label: "Servicios", text: "Pintura, carroceria y pulido." },
      { href: "/ciudades", label: "Zonas atendidas", text: "Paginas locales iniciales." },
      { href: "/contacto", label: "Contacto", text: "WhatsApp y telefono." },
    ],
  },
];

export const serviceArchitecturePages: ArchitecturePage[] = [
  {
    path: "/servicios/pintura-coche",
    title: "Pintura de coche en Torrevieja | PaintLab",
    description:
      "Pintura de coche en Torrevieja para una o varias piezas, igualación de color y repintado de automóvil. Consulta el trabajo por WhatsApp.",
    h1: "Pintura de coche en Torrevieja",
    eyebrow: "Servicio",
    lead:
      "Servicio principal para pintar una o varias piezas del vehiculo con preparacion previa y acabado integrado.",
    cta: "Consultar pintura de coche",
    sections: [
      {
        heading: "Cuando tiene sentido pintar el coche",
        paragraphs: [
          "La pintura de coche se valora cuando hay roces, laca abierta, piezas reparadas, perdida de brillo que no se recupera con pulido o diferencias visibles entre paneles.",
          "Antes de recomendar pintar, conviene revisar fotos del dano, zona afectada y estado general de la carroceria para evitar trabajos innecesarios.",
        ],
      },
      {
        heading: "Preparacion y color",
        paragraphs: [
          "El resultado depende de la base. Lijado, limpieza, proteccion de zonas cercanas e igualacion de color son pasos importantes para que la pieza no parezca aislada del resto del coche.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pintar-coche-completo", label: "Pintar coche completo" },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/servicios/reparacion-carroceria", label: "Reparacion de carroceria" },
      { href: "/pintura-capo", label: "Pintar el capó" },
      { href: "/pintura-puerta", label: "Servicio de pintura de puerta" },
      { href: "/pintura-aleta", label: "Reparación y pintura de aleta" },
      { href: "/es", label: "PaintLab Torrevieja" },
      { href: "/servicios", label: "Todos los servicios" },
    ],
    faq: [
      {
        question: "Se puede pintar solo una pieza?",
        answer:
          "Si. Depende del dano, del color y de como se integra la pieza con el resto de la carroceria.",
      },
      {
        question: "Que fotos conviene enviar?",
        answer:
          "Una foto general del coche, varias fotos de cerca y una imagen con luz natural desde otro angulo.",
      },
    ],
  },
  {
    path: "/servicios/pintar-coche-completo",
    title: "Pintar coche completo en Torrevieja | Pintura completa",
    description:
      "Pintar coche completo en Torrevieja para restaurar imagen exterior, renovar pintura deteriorada o corregir varios paneles.",
    h1: "Pintar coche completo",
    eyebrow: "Servicio",
    lead:
      "Pagina para trabajos amplios donde no basta con una pieza aislada y se necesita valorar el vehiculo como conjunto.",
    cta: "Consultar pintura completa",
    sections: [
      {
        heading: "Pintura completa con valoracion previa",
        paragraphs: [
          "Pintar un coche completo no debe decidirse solo por una foto de cerca. Hay que revisar techo, capo, laterales, paragolpes, estado de la laca y reparaciones antiguas.",
          "La pintura completa puede tener sentido cuando varias piezas estan deterioradas, cuando el coche ha perdido presencia o cuando se busca una restauracion estetica mas uniforme.",
        ],
      },
      {
        heading: "Evitar expectativas irreales",
        paragraphs: [
          "No todos los coches necesitan pintura completa. A veces una combinacion de reparacion localizada y pulido puede ser mas proporcionada. La consulta inicial sirve para ordenar esa decision.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pintura-coche", label: "Pintura de coche" },
      { href: "/servicios/pulido-carroceria", label: "Pulido de carroceria" },
      { href: "/servicios/reparacion-carroceria", label: "Reparacion de carroceria" },
      { href: "/pintura-capo", label: "Pintura completa del capó" },
      { href: "/pintura-puerta", label: "Pintura de una puerta" },
      { href: "/pintura-aleta", label: "Pintura de una aleta" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    path: "/servicios/pintar-paragolpes",
    title: "Pintar paragolpes en Torrevieja | Reparacion estetica",
    description:
      "Pintar paragolpes en Torrevieja para roces de aparcamiento, marcas en plastico, aranazos e igualacion de color.",
    h1: "Pintar paragolpes",
    eyebrow: "Servicio",
    lead:
      "Solucion para danos habituales en paragolpes delanteros o traseros, especialmente roces urbanos y marcas de aparcamiento.",
    cta: "Consultar paragolpes",
    sections: [
      {
        heading: "Danos frecuentes en plastico",
        paragraphs: [
          "El paragolpes suele recibir roces en esquinas, marcas de bordillos, pequenos impactos y pintura saltada. Como es plastico, requiere preparacion adecuada para que el acabado sea estable.",
          "Si hay deformacion, grietas o soportes afectados, primero conviene valorar si hace falta reparacion antes de pintar.",
        ],
      },
      {
        heading: "Integracion con el frontal o la parte trasera",
        paragraphs: [
          "El color del paragolpes debe leerse junto a aletas, capo o porton. Por eso se revisa el conjunto y no solo el punto marcado.",
        ],
      },
    ],
    links: [
      { href: "/servicios/reparacion-carroceria", label: "Reparacion de carroceria" },
      { href: "/servicios/reparacion-aranazos-coche", label: "Reparacion de aranazos" },
      { href: "/ciudades/orihuela-costa", label: "Orihuela Costa" },
      { href: "/servicios", label: "Todos los servicios" },
    ],
    faq: [
      {
        question: "Se pinta todo el paragolpes o solo una zona?",
        answer:
          "Depende del color, la posicion del dano y el estado del plastico. Se valora con fotos antes de recomendar.",
      },
    ],
  },
  {
    path: "/servicios/reparacion-carroceria",
    title: "Reparacion de carroceria en Torrevieja | Chapa y pintura",
    description:
      "Reparacion de carroceria en Torrevieja para golpes, paneles danados, roces y preparacion antes de pintura.",
    h1: "Reparacion de carroceria",
    eyebrow: "Servicio",
    lead:
      "Trabajo previo para corregir golpes, superficies irregulares y paneles antes de aplicar pintura.",
    cta: "Consultar carroceria",
    sections: [
      {
        heading: "La base antes del acabado",
        paragraphs: [
          "Una buena pintura necesita una superficie preparada. Si hay golpes, deformaciones o reparaciones antiguas, la carroceria debe corregirse antes de pensar en color y laca.",
          "La reparacion puede afectar puertas, aletas, paragolpes, capo u otras piezas visibles.",
        ],
      },
      {
        heading: "Valoracion segun el dano",
        paragraphs: [
          "No todos los golpes requieren la misma solucion. Algunas marcas son esteticas; otras afectan forma, ajuste o preparacion de la pieza.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pintura-coche", label: "Pintura de coche" },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/servicios/reparacion-aranazos-coche", label: "Reparacion de aranazos" },
      { href: "/pintura-capo", label: "Reparación y pintura de capó" },
      { href: "/pintura-puerta", label: "Daños en puertas" },
      { href: "/pintura-aleta", label: "Reparación de aletas" },
      { href: "/es", label: "Chapista en Torrevieja" },
    ],
    faq: [
      {
        question: "La reparacion de carroceria incluye pintura?",
        answer:
          "Cuando el dano afecta a la pintura, normalmente hay que preparar y pintar la zona o la pieza. Se confirma tras revisar el coche.",
      },
    ],
  },
  {
    path: "/servicios/reparacion-aranazos-coche",
    title: "Reparacion de aranazos de coche en Torrevieja",
    description:
      "Reparacion de aranazos de coche en Torrevieja. Valoracion de marcas superficiales, profundas, roces y pintura saltada.",
    h1: "Reparacion de aranazos de coche",
    eyebrow: "Servicio",
    lead:
      "Pagina para distinguir entre marcas que pueden mejorar con pulido y aranazos que requieren pintura.",
    cta: "Consultar aranazos",
    sections: [
      {
        heading: "No todos los aranazos se reparan igual",
        paragraphs: [
          "Un aranazo superficial puede mejorar con pulido. Si atraviesa la laca o llega a capas profundas, puede requerir reparacion y pintura localizada.",
          "Las fotos con luz natural ayudan a entender profundidad, extension y posicion del dano.",
        ],
      },
      {
        heading: "Roces de aparcamiento y marcas largas",
        paragraphs: [
          "En laterales y paragolpes es habitual encontrar marcas mezcladas: plastico transferido, pintura de otro coche y dano propio. La valoracion separa lo que se puede limpiar, pulir o pintar.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pulido-carroceria", label: "Pulido de carroceria" },
      { href: "/servicios/pintura-coche", label: "Pintura de coche" },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/pintura-puerta", label: "Arañazos y pintura de puerta" },
      { href: "/pintura-aleta", label: "Roces y pintura de aleta" },
      { href: "/pintura-capo", label: "Marcas y pintura de capó" },
      { href: "/faq", label: "FAQ" },
    ],
    faq: [
      {
        question: "El pulido elimina todos los aranazos?",
        answer:
          "No. El pulido ayuda con marcas superficiales, pero los aranazos profundos pueden necesitar pintura.",
      },
    ],
  },
  {
    path: "/servicios/pulido-carroceria",
    title: "Pulido de carroceria en Torrevieja | Brillo y microaranazos",
    description:
      "Pulido de carroceria en Torrevieja para recuperar brillo, mejorar microaranazos y valorar pintura apagada.",
    h1: "Pulido de carroceria",
    eyebrow: "Servicio",
    lead:
      "Una alternativa a pintar cuando la laca esta recuperable y el problema principal es brillo, marcas finas o aspecto apagado.",
    cta: "Consultar pulido",
    sections: [
      {
        heading: "Cuando pulir antes de pintar",
        paragraphs: [
          "El pulido puede mejorar microaranazos, marcas superficiales y perdida de brillo. No corrige golpes, pintura saltada ni laca destruida.",
          "En la costa, el sol, el polvo y lavados rapidos pueden apagar la pintura con el tiempo. Una revision previa evita insistir en zonas delicadas.",
        ],
      },
      {
        heading: "Acabado mas uniforme",
        paragraphs: [
          "El pulido tambien puede ayudar despues de una reparacion para equilibrar el aspecto general del coche si algunas piezas se ven mas nuevas que otras.",
        ],
      },
    ],
    links: [
      { href: "/servicios/reparacion-aranazos-coche", label: "Reparacion de aranazos" },
      { href: "/servicios/pulido-faros", label: "Pulido de faros" },
      { href: "/servicios/pintura-coche", label: "Pintura de coche" },
      { href: "/ciudades/guardamar-del-segura", label: "Guardamar del Segura" },
    ],
    faq: [
      {
        question: "Cuando no conviene pulir?",
        answer:
          "Cuando la laca esta rota, hay pintura saltada o el dano es profundo. En esos casos se valora reparacion o pintura.",
      },
    ],
  },
  {
    path: "/servicios/pulido-faros",
    title: "Pulido de faros en Torrevieja | Opticas opacas",
    description:
      "Pulido de faros en Torrevieja para opticas opacas, amarillentas o apagadas por sol y uso diario.",
    h1: "Pulido de faros",
    eyebrow: "Servicio",
    lead:
      "Recuperacion visual de opticas cuando el desgaste esta en la superficie exterior del faro.",
    cta: "Consultar faros",
    sections: [
      {
        heading: "Faros opacos por sol y envejecimiento",
        paragraphs: [
          "Los faros pueden verse amarillentos o mates por exposicion solar. El pulido mejora la presencia del frontal cuando el dano es superficial.",
          "Si hay humedad interior, grietas o material muy deteriorado, la mejora puede ser limitada. Por eso conviene revisar fotos antes.",
        ],
      },
      {
        heading: "Frontal mas cuidado",
        paragraphs: [
          "Unos faros claros combinan bien con pintura de paragolpes, pintura de capo o pulido de carroceria cuando se busca mejorar el aspecto frontal del coche.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pulido-carroceria", label: "Pulido de carroceria" },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/ciudades/la-mata", label: "La Mata" },
      { href: "/servicios", label: "Todos los servicios" },
    ],
    faq: [
      {
        question: "El pulido arregla faros con humedad?",
        answer:
          "No. Si el problema esta dentro del faro, el pulido exterior solo puede mejorar parcialmente la apariencia.",
      },
    ],
  },
];

export const cityArchitecturePages: ArchitecturePage[] = [
  {
    path: "/ciudades/orihuela-costa",
    title: "Pintura de coches en Orihuela Costa | Carroceria y pulido",
    description:
      "Pintura de coches para Orihuela Costa, La Zenia, Cabo Roig y Playa Flamenca con consulta por WhatsApp.",
    h1: "Pintura de coches en Orihuela Costa",
    eyebrow: "Ciudad",
    lead:
      "Orientada a residentes y vehiculos que se mueven entre urbanizaciones costeras, parkings y zonas comerciales.",
    cta: "Consultar desde Orihuela Costa",
    sections: [
      {
        heading: "Urbanizaciones, parkings y roces laterales",
        paragraphs: [
          "En Orihuela Costa las consultas suelen venir de roces en paragolpes, laterales marcados en aparcamientos, pequenas reparaciones y pintura deteriorada por exposicion al sol.",
          "Para valorar el trabajo es util enviar fotos desde varios angulos, especialmente si el dano cruza de paragolpes a aleta o puerta.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/servicios/reparacion-carroceria", label: "Reparacion de carroceria" },
      { href: "/servicios/reparacion-aranazos-coche", label: "Reparacion de aranazos" },
      { href: "/es", label: "Taller principal en Torrevieja" },
    ],
  },
  {
    path: "/ciudades/guardamar-del-segura",
    title: "Pintura de coches en Guardamar del Segura | Pintura y pulido",
    description:
      "Pintura de coches cerca de Guardamar del Segura para carroceria, pulido, faros y roces de aparcamiento.",
    h1: "Pintura de coches en Guardamar del Segura",
    eyebrow: "Ciudad",
    lead:
      "Pagina local para vehiculos expuestos a sol, arena, salinidad y uso costero frecuente.",
    cta: "Consultar desde Guardamar",
    sections: [
      {
        heading: "Sol, arena y pintura apagada",
        paragraphs: [
          "En zonas de costa como Guardamar, la pintura puede perder brillo antes, especialmente en capo, techo y piezas horizontales. No siempre hace falta pintar: a veces se valora pulido.",
          "Si hay aranazos profundos o laca abierta, conviene revisar si la solucion requiere pintura localizada o reparacion previa.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pulido-carroceria", label: "Pulido de carroceria" },
      { href: "/servicios/pulido-faros", label: "Pulido de faros" },
      { href: "/servicios/pintura-coche", label: "Pintura de coche" },
      { href: "/ciudades/ciudad-quesada", label: "Ciudad Quesada" },
    ],
  },
  {
    path: "/ciudades/ciudad-quesada",
    title: "Pintura de coches en Ciudad Quesada | Pintura Torrevieja",
    description:
      "Pintura y reparacion estetica de coches para Ciudad Quesada y Rojales, con valoracion previa por WhatsApp.",
    h1: "Pintura de coches en Ciudad Quesada",
    eyebrow: "Ciudad",
    lead:
      "Pagina para consultas desde Ciudad Quesada, con foco en coches de residentes, uso diario y preparacion para venta.",
    cta: "Consultar desde Ciudad Quesada",
    sections: [
      {
        heading: "Coches de residentes y mantenimiento estetico",
        paragraphs: [
          "En Ciudad Quesada son habituales consultas de coches de uso diario que necesitan mejorar presencia: paragolpes marcados, puertas con roces, faros opacos o pintura apagada.",
          "Una descripcion clara del uso del vehiculo ayuda a decidir entre reparacion puntual, pintura de pieza o pulido.",
        ],
      },
    ],
    links: [
      { href: "/servicios/reparacion-aranazos-coche", label: "Reparacion de aranazos" },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/servicios/pulido-faros", label: "Pulido de faros" },
      { href: "/ciudades/guardamar-del-segura", label: "Guardamar" },
    ],
  },
  {
    path: "/ciudades/la-mata",
    title: "Pintura de coches en La Mata | Reparacion y pulido",
    description:
      "Pintura de coches en La Mata para roces, paragolpes, pulido, faros y reparacion de carroceria cerca de Torrevieja.",
    h1: "Pintura de coches en La Mata",
    eyebrow: "Ciudad",
    lead:
      "Pagina local para La Mata, enfocada en reparaciones cercanas a Torrevieja sin repetir contenido generico.",
    cta: "Consultar desde La Mata",
    sections: [
      {
        heading: "Zona costera cercana a Torrevieja",
        paragraphs: [
          "En La Mata se combinan uso urbano, aparcamientos cerca de playa y exposicion al sol. Eso puede traducirse en paragolpes marcados, faros opacos o pintura sin brillo.",
          "Si el dano es pequeno, las fotos ayudan a decidir si basta con pulido o si hay que pintar una pieza concreta.",
        ],
      },
    ],
    links: [
      { href: "/servicios/pulido-faros", label: "Pulido de faros" },
      { href: "/servicios/pintar-paragolpes", label: "Pintar paragolpes" },
      { href: "/servicios/pintura-coche", label: "Pintura de coche" },
      { href: "/es", label: "Chapa y pintura en Torrevieja" },
    ],
  },
];

export const architecturePages = [
  ...hubPages,
  ...serviceArchitecturePages,
  ...cityArchitecturePages,
];

export const footerHubLinks: ArchitectureLink[] = [
  { href: "/servicios", label: "Servicios" },
  { href: "/ciudades", label: "Ciudades" },
  { href: "/marcas", label: "Marcas" },
  { href: "/trabajos-realizados", label: "Trabajos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

export const oldToNewServiceUrlMap = [
  { old: "/pintura-coche-torrevieja", next: "/servicios/pintura-coche" },
  { old: "/pintura-parachoques", next: "/servicios/pintar-paragolpes" },
  { old: "/reparacion-carroceria", next: "/servicios/reparacion-carroceria" },
  { old: "/pulido-carroceria", next: "/servicios/pulido-carroceria" },
  { old: "/pulido-faros", next: "/servicios/pulido-faros" },
] as const;

export function getArchitecturePage(path: string) {
  return architecturePages.find((page) => page.path === path);
}

export function getArchitectureMetadata(page: ArchitecturePage): Metadata {
  const url = getAbsoluteUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: getAbsoluteUrl("/images/og-image.webp"),
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [getAbsoluteUrl("/images/og-image.webp")],
    },
  };
}

export function getArchitectureStructuredData(page: ArchitecturePage) {
  const url = getAbsoluteUrl(page.path);
  const businessId = `${siteConfig.url}/#autobodyshop`;
  const websiteId = `${siteConfig.url}/#website`;
  const pageId = `${url}#webpage`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "es",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": businessId,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteConfig.businessName,
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: url,
        },
      ],
    },
  ];

  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getArchitectureWhatsappUrl(page: ArchitecturePage) {
  return createWhatsAppUrl(
    `Hola PINTURA TORREVIEJA. Quiero informacion sobre: ${page.h1}. Puedo enviar fotos por WhatsApp.`,
  );
}

export { whatsappDefault };
