export const servicePages = [
  {
    slug: "pintura-coche-torrevieja",
    title: "Pintura coche Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pintura de coche en Torrevieja con preparacion profesional, cabina de pintura y acabado limpio.",
    h1: "Pintura de coche en Torrevieja",
    lead:
      "Reparamos y pintamos vehiculos con preparacion cuidada, materiales profesionales y acabado uniforme.",
    serviceName: "Pintura de vehiculos",
    image: "/images/paint-booth.webp",
    points: [
      "Preparacion de la superficie antes de pintar.",
      "Pintura en cabina con proceso controlado.",
      "Acabado integrado con el aspecto del vehiculo.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de coche en Torrevieja. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "reparacion-carroceria",
    title: "Reparacion de carroceria Torrevieja | PINTURA TORREVIEJA",
    description:
      "Reparacion de carroceria en Torrevieja para golpes, paneles y superficies antes del proceso de pintura.",
    h1: "Reparacion de carroceria",
    lead:
      "Corregimos danos visibles en la carroceria y preparamos cada pieza para un acabado preciso.",
    serviceName: "Reparacion de carroceria",
    image: "/images/body-repair.webp",
    points: [
      "Revision visual de la zona danada.",
      "Correccion de golpes, paneles y superficies.",
      "Preparacion para pintura e igualacion final.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre reparacion de carroceria. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-parachoques",
    title: "Pintura de parachoques Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pintura de parachoques en Torrevieja con preparacion, reparacion estetica e igualacion de color.",
    h1: "Pintura de parachoques",
    lead:
      "Restauramos el aspecto del parachoques con preparacion adecuada y color integrado con el vehiculo.",
    serviceName: "Pintura de parachoques",
    image: "/images/finished-car.webp",
    points: [
      "Preparacion de plasticos y superficies.",
      "Correccion estetica antes de pintar.",
      "Igualacion de color con el resto del coche.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de parachoques. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-puerta",
    title: "Pintura de puerta de coche Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pintura de puerta de coche en Torrevieja con reparacion previa, acabado uniforme e igualacion de color.",
    h1: "Pintura de puerta de coche",
    lead:
      "Trabajamos la puerta danada para recuperar una superficie limpia y un color coherente.",
    serviceName: "Pintura de puerta",
    image: "/images/body-repair.webp",
    points: [
      "Preparacion de la puerta antes de pintar.",
      "Correccion de marcas y pequenas deformaciones.",
      "Acabado limpio con integracion visual.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de puerta de coche. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-capo",
    title: "Pintura de capo Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pintura de capo en Torrevieja para recuperar el acabado del frontal con preparacion profesional.",
    h1: "Pintura de capo",
    lead:
      "Devolvemos presencia al frontal del vehiculo con un proceso de pintura cuidado y preciso.",
    serviceName: "Pintura de capo",
    image: "/images/paint-booth.webp",
    points: [
      "Preparacion del capo y control de superficie.",
      "Pintura profesional para una presencia uniforme.",
      "Revision final del acabado visible.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de capo. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-aleta",
    title: "Pintura de aleta Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pintura de aleta en Torrevieja con reparacion estetica, preparacion e igualacion del tono.",
    h1: "Pintura de aleta",
    lead:
      "Reparamos y pintamos aletas para que la zona reparada quede integrada en la linea del vehiculo.",
    serviceName: "Pintura de aleta",
    image: "/images/finished-car.webp",
    points: [
      "Revision de la aleta y danos visibles.",
      "Preparacion antes del proceso de pintura.",
      "Igualacion del tono con la carroceria.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de aleta. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pulido-faros",
    title: "Pulido de faros Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pulido de faros en Torrevieja para mejorar claridad, presencia visual y aspecto frontal del vehiculo.",
    h1: "Pulido de faros",
    lead:
      "Recuperamos la claridad visual de las opticas para mejorar la presencia del coche.",
    serviceName: "Pulido de faros",
    image: "/images/color-match.webp",
    points: [
      "Revision del estado visual de las opticas.",
      "Pulido progresivo de la superficie.",
      "Acabado limpio para una mejor presencia.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pulido de faros. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pulido-carroceria",
    title: "Pulido de carroceria Torrevieja | PINTURA TORREVIEJA",
    description:
      "Pulido de carroceria en Torrevieja para recuperar brillo, reducir marcas y mejorar el acabado exterior.",
    h1: "Pulido de carroceria",
    lead:
      "Mejoramos el brillo y la lectura visual de la pintura con un proceso de pulido cuidado.",
    serviceName: "Pulido de carroceria",
    image: "/images/polishing.webp",
    points: [
      "Evaluacion del estado de la pintura.",
      "Pulido para recuperar brillo y profundidad.",
      "Acabado final limpio y cuidado.",
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pulido de carroceria. Puedo enviar fotos por WhatsApp.",
  },
] as const;

export type ServicePage = (typeof servicePages)[number];
export type ServicePageSlug = ServicePage["slug"];

export function getServicePage(slug: ServicePageSlug) {
  return servicePages.find((page) => page.slug === slug)!;
}
