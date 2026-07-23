export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceTextSection = {
  heading: string;
  paragraphs: string[];
};

export type ServiceProcessStep = {
  title: string;
  text: string;
};

export type ServiceLink = {
  slug: string;
  label: string;
  text: string;
};

const sharedConsultationText =
  "Para una primera orientacion, envia fotos del coche por WhatsApp, indica el modelo, el ano aproximado y que zona quieres reparar. Si lo prefieres, tambien puedes llamar al taller para comentar el caso y preparar una consulta antes de traer el vehiculo.";

export const servicePages = [
  {
    slug: "pintura-coche-torrevieja",
    title: "Pintura de coche en Torrevieja | Cabina y acabado profesional",
    description:
      "Pintura de coche en Torrevieja con preparacion de carroceria, igualacion de color, cabina de pintura y valoracion por WhatsApp.",
    h1: "Pintura de coche en Torrevieja",
    lead:
      "Reparamos y pintamos vehiculos con preparacion cuidada, materiales profesionales, cabina de pintura e integracion del color con el aspecto original del coche.",
    serviceName: "Pintura de vehiculos",
    image: "/images/paint-booth.webp",
    points: [
      "Preparacion de la superficie antes de pintar.",
      "Pintura en cabina con proceso controlado.",
      "Acabado integrado con el aspecto del vehiculo.",
    ],
    sections: [
      {
        heading: "Servicio de pintura pensado para el clima de Torrevieja",
        paragraphs: [
          "La pintura de coche en Torrevieja debe resolver algo mas que una cuestion estetica. El sol, la salinidad del aire, el polvo de carretera y el uso diario pueden apagar el brillo, marcar la laca o dejar diferencias de tono cuando una reparacion no se prepara bien. En PINTURA TORREVIEJA trabajamos cada vehiculo con una revision previa de la carroceria, limpieza de la zona, preparacion de superficies y control del acabado antes de entregar el coche.",
          "Nuestro objetivo es que la pintura nueva no parezca un parche. Para conseguirlo, prestamos atencion a la pieza afectada, al estado de las piezas cercanas, a la orientacion de la luz sobre la carroceria y al tono real que muestra el vehiculo despues de anos de uso. Esta forma de trabajar ayuda en reparaciones localizadas, pintura parcial, pintura completa y trabajos donde se necesita igualacion de color.",
        ],
      },
      {
        heading: "Cuando conviene pintar el coche",
        paragraphs: [
          "La pintura puede ser necesaria despues de un golpe, un roce de aparcamiento, una reparacion de chapa, laca quemada, marcas profundas, piezas sustituidas o desgaste visible en capot, puertas, aletas y parachoques. Tambien es una buena opcion cuando el vehiculo conserva una mecanica correcta pero su imagen exterior ya no transmite cuidado. Antes de recomendar un trabajo, revisamos si basta con pulido de carroceria, si hay que reparar la superficie o si la mejor solucion es pintar una o varias piezas.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Acabado, color y revision final",
        paragraphs: [
          "El proceso se centra en preparar bien antes de aplicar color. Una superficie mal lijada, contaminada o irregular puede arruinar incluso una buena pintura. Por eso cuidamos la base, el enmascarado, la aplicacion y la revision final. La igualacion de color se valora con el coche real, no solo con una referencia teorica, porque cada pintura envejece de forma distinta.",
          "Despues del trabajo revisamos brillo, textura, bordes, integracion visual y limpieza general. Si la reparacion esta relacionada con otras zonas, te recomendaremos enlaces utiles dentro del sitio, como reparacion de carroceria, pintura de puerta, pintura de parachoques o pulido de carroceria. Asi puedes comparar opciones sin repetir la misma consulta.",
        ],
      },
    ],
    process: [
      {
        title: "Revision inicial",
        text: "Analizamos danos, piezas afectadas, tono existente y alcance real del trabajo.",
      },
      {
        title: "Preparacion",
        text: "Lijamos, limpiamos, corregimos detalles y dejamos la superficie lista para pintar.",
      },
      {
        title: "Pintura y control",
        text: "Aplicamos pintura en cabina, revisamos el acabado y comprobamos la integracion visual.",
      },
    ],
    relatedLinks: [
      {
        slug: "reparacion-carroceria",
        label: "Reparacion de carroceria",
        text: "Para golpes, bollos o paneles que necesitan preparacion antes de pintar.",
      },
      {
        slug: "pintura-parachoques",
        label: "Pintura de parachoques",
        text: "Ideal si el dano esta concentrado en la zona delantera o trasera.",
      },
      {
        slug: "pulido-carroceria",
        label: "Pulido de carroceria",
        text: "Opcion recomendada cuando la pintura esta apagada pero no requiere repintado.",
      },
    ],
    faq: [
      {
        question: "Cuanto tarda una pintura de coche en Torrevieja?",
        answer:
          "Depende del numero de piezas, la reparacion previa y el secado. Una pieza localizada suele necesitar menos tiempo que una pintura completa. Con fotos por WhatsApp podemos darte una orientacion inicial.",
      },
      {
        question: "Se puede pintar solo una parte del coche?",
        answer:
          "Si. Pintamos piezas concretas como parachoques, puerta, capo o aleta cuando el dano esta localizado. Revisamos el tono para que la reparacion se integre con el resto del vehiculo.",
      },
      {
        question: "Como se calcula el precio de pintar un coche?",
        answer:
          "Influyen el estado de la carroceria, la preparacion necesaria, el tipo de pieza, el color y el nivel de acabado. Por eso pedimos fotos antes de dar una estimacion.",
      },
      {
        question: "Puedo pedir consulta por WhatsApp?",
        answer:
          "Si. Envia imagenes claras del coche, detalles del dano y un mensaje con el servicio que necesitas. Tambien puedes llamar para comentar la reparacion.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de coche en Torrevieja. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "reparacion-carroceria",
    title: "Reparacion de carroceria en Torrevieja | Chapa y pintura",
    description:
      "Reparacion de carroceria en Torrevieja para golpes, roces, paneles danados y preparacion profesional antes de pintar.",
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
    sections: [
      {
        heading: "Reparacion de chapa antes de pintar",
        paragraphs: [
          "La reparacion de carroceria en Torrevieja suele empezar por danos muy cotidianos: un roce en el aparcamiento, un golpe en una puerta, una aleta marcada, un parachoques deformado o una superficie con irregularidades visibles bajo la luz. Antes de aplicar pintura, la chapa y los paneles deben quedar estables, alineados y preparados. Si se pinta sobre una base defectuosa, el acabado puede verse ondulado, con sombras o con diferencias que aparecen al mirar el coche desde otro angulo.",
          "En PINTURA TORREVIEJA revisamos la zona danada, valoramos si la pieza puede repararse o si necesita sustitucion, y preparamos la superficie para que el proceso de pintura tenga sentido. Esta fase es esencial para trabajos de pintura de coche, pintura de puerta, pintura de capo, pintura de aleta y reparaciones de parachoques.",
        ],
      },
      {
        heading: "Golpes, roces y superficies irregulares",
        paragraphs: [
          "Cada dano tiene una lectura distinta. Un roce superficial puede requerir lijado, correccion estetica y pintura localizada. Un golpe mas profundo puede necesitar trabajo de chapa antes de igualar la superficie. Tambien encontramos vehiculos con reparaciones antiguas mal integradas, masilla visible, laca abierta o zonas donde el color ya no coincide con el resto de la carroceria.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Trabajo ordenado y comunicacion clara",
        paragraphs: [
          "Una buena reparacion de carroceria no se mide solo por tapar el dano. Tambien importa que el coche conserve lineas limpias, que las uniones no llamen la atencion y que la pintura final tenga una presencia coherente. Por eso damos prioridad a preparar, revisar y explicar el alcance del trabajo antes de empezar.",
          "Si dudas entre reparar y pintar una pieza completa, podemos orientarte con fotos. Muchas veces la mejor decision depende de la ubicacion del dano, del color, del estado general de la pintura y de si hay otras zonas que conviene revisar al mismo tiempo.",
          "Tambien tenemos en cuenta el uso del vehiculo. Un coche de trabajo, un familiar de uso diario o un vehiculo que se quiere preparar para vender no siempre necesita el mismo nivel de intervencion. La recomendacion se ajusta al objetivo: recuperar seguridad visual, mejorar presencia exterior o dejar una base correcta para pintura.",
        ],
      },
    ],
    process: [
      {
        title: "Diagnostico del dano",
        text: "Comprobamos profundidad, extension, deformacion y piezas cercanas afectadas.",
      },
      {
        title: "Correccion de superficie",
        text: "Trabajamos la chapa o el panel para recuperar una base uniforme antes de pintar.",
      },
      {
        title: "Preparacion para acabado",
        text: "Dejamos la zona lista para color, laca y revision final de integracion.",
      },
    ],
    relatedLinks: [
      {
        slug: "pintura-coche-torrevieja",
        label: "Pintura de coche",
        text: "Para reparar y pintar una o varias piezas despues del trabajo de chapa.",
      },
      {
        slug: "pintura-puerta",
        label: "Pintura de puerta",
        text: "Enfocada en golpes y roces frecuentes en laterales del vehiculo.",
      },
      {
        slug: "pintura-aleta",
        label: "Pintura de aleta",
        text: "Solucion para danos cerca de ruedas, pasos de rueda y lineas laterales.",
      },
    ],
    faq: [
      {
        question: "La reparacion de carroceria incluye pintura?",
        answer:
          "Cuando el dano afecta a la pintura, normalmente la reparacion incluye preparacion y pintado de la zona o de la pieza. Lo confirmamos despues de revisar fotos o ver el coche.",
      },
      {
        question: "Se puede reparar un golpe pequeno sin cambiar la pieza?",
        answer:
          "En muchos casos si, pero depende de la profundidad, ubicacion y estado del panel. Revisamos cada caso para evitar trabajos innecesarios.",
      },
      {
        question: "Que fotos debo enviar por WhatsApp?",
        answer:
          "Envia una foto general del coche, varias fotos de cerca, una imagen lateral con luz natural y el modelo del vehiculo. Asi podemos orientar mejor la consulta.",
      },
      {
        question: "Trabajais reparacion de carroceria en Torrevieja?",
        answer:
          "Si. Atendemos consultas de carroceria y pintura en Torrevieja, con valoracion previa por WhatsApp o telefono.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre reparacion de carroceria. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-parachoques",
    title: "Pintura de parachoques en Torrevieja | Reparacion estetica",
    description:
      "Pintura de parachoques en Torrevieja para roces, marcas de aparcamiento, plasticos danados e igualacion de color.",
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
    sections: [
      {
        heading: "Parachoques con roces, marcas y pintura saltada",
        paragraphs: [
          "La pintura de parachoques en Torrevieja es una de las consultas mas habituales porque esta pieza recibe roces de aparcamiento, pequenos impactos, arañazos en esquinas y marcas por bordillos o maniobras. Aunque el dano parezca pequeno, el plastico necesita una preparacion especifica para que la pintura agarre bien y el acabado no se desprenda con el tiempo.",
          "Trabajamos el parachoques como una pieza visible del coche, no como un detalle aislado. Revisamos la forma, los bordes, la zona afectada, la textura del plastico y el color del vehiculo. Si hay deformacion, grietas o soportes afectados, te indicaremos si conviene combinar pintura con reparacion de carroceria.",
        ],
      },
      {
        heading: "Reparacion estetica con color integrado",
        paragraphs: [
          "El parachoques puede mostrar diferencias de tono con mas facilidad que otras piezas porque suele estar fabricado en plastico y recibe la luz de forma distinta. Por eso la igualacion de color es importante. Buscamos un acabado limpio, con brillo equilibrado y sin bordes visibles que delaten la reparacion.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Cuando pintar y cuando reparar primero",
        paragraphs: [
          "Si el parachoques solo tiene arañazos superficiales, puede bastar con preparacion, pintura y laca. Si hay golpes, deformaciones o zonas abiertas, primero se corrige la superficie. En danos mas amplios, recomendamos revisar tambien aletas, capo o piezas cercanas porque el impacto puede haber dejado desajustes.",
          "La valoracion previa ayuda a decidir si pintar una zona, pintar la pieza completa o combinar el trabajo con pulido de carroceria para mejorar la lectura visual del resto del coche.",
          "En Torrevieja vemos muchos parachoques marcados por aparcamientos estrechos, rampas, bordillos y pequenos contactos urbanos. Por eso explicamos si el dano es solo estetico o si conviene revisar fijaciones, bordes y encajes. Una reparacion clara evita que el parachoques quede pintado pero mal alineado, con separaciones visibles o con una zona que vuelva a abrirse al poco tiempo.",
          "Tambien comprobamos si sensores, molduras o zonas negras texturizadas condicionan el trabajo. Esos detalles cambian la preparacion y ayudan a entregar una reparacion mas limpia.",
          "Asi el parachoques recupera presencia sin perder sus encajes ni detalles funcionales.",
        ],
      },
    ],
    process: [
      {
        title: "Revision del plastico",
        text: "Comprobamos arañazos, deformaciones, grietas y agarre de la pintura existente.",
      },
      {
        title: "Preparacion especifica",
        text: "Lijamos, limpiamos y preparamos el parachoques para una aplicacion estable.",
      },
      {
        title: "Pintura e igualacion",
        text: "Aplicamos color, laca y revision final para integrar la pieza con el vehiculo.",
      },
    ],
    relatedLinks: [
      {
        slug: "pintura-aleta",
        label: "Pintura de aleta",
        text: "Recomendada si el roce continua hacia el lateral del coche.",
      },
      {
        slug: "pintura-capo",
        label: "Pintura de capo",
        text: "Util para danos frontales que tambien afectan la parte superior.",
      },
      {
        slug: "reparacion-carroceria",
        label: "Reparacion de carroceria",
        text: "Para golpes donde el parachoques necesita correccion antes de pintar.",
      },
    ],
    faq: [
      {
        question: "Se puede pintar solo una esquina del parachoques?",
        answer:
          "A veces si, pero depende del color, la posicion del dano y el estado de la pieza. Valoramos si conviene una reparacion localizada o pintar el parachoques completo.",
      },
      {
        question: "La pintura agarra bien sobre plastico?",
        answer:
          "Si se prepara correctamente. El plastico requiere limpieza, lijado y productos adecuados para evitar problemas de adherencia.",
      },
      {
        question: "Cuanto cuesta pintar un parachoques?",
        answer:
          "El precio depende de arañazos, deformaciones, preparacion y color. Envia fotos por WhatsApp para recibir una orientacion inicial.",
      },
      {
        question: "Puedo combinarlo con pulido de carroceria?",
        answer:
          "Si. Cuando el resto del coche esta apagado, el pulido puede ayudar a que la pieza pintada no destaque por exceso de brillo.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de parachoques. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-puerta",
    title: "Pintura de puerta de coche en Torrevieja | Roce y golpe lateral",
    description:
      "Pintura de puerta de coche en Torrevieja para golpes laterales, roces, arañazos, preparacion e igualacion de color.",
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
    sections: [
      {
        heading: "Puertas con golpes, arañazos y marcas de aparcamiento",
        paragraphs: [
          "La pintura de puerta de coche en Torrevieja requiere especial cuidado porque la puerta es una pieza grande, plana y muy visible. Cualquier diferencia de tono, ondulacion o borde mal integrado se nota al mirar el lateral del vehiculo. Los danos mas habituales son roces de aparcamiento, golpes de otras puertas, arañazos profundos, marcas cerca de manillas y reparaciones antiguas que han perdido brillo.",
          "Antes de pintar, revisamos si la puerta necesita reparacion de carroceria, si hay pequenas deformaciones, si el arañazo ha llegado a capas profundas o si bastaria con pulido. Esta decision evita pintar de mas y ayuda a elegir una solucion proporcionada al estado real del coche.",
        ],
      },
      {
        heading: "Igualacion con aleta, parachoques y piezas cercanas",
        paragraphs: [
          "Una puerta no se ve sola: convive con aletas, estribos, molduras y otras puertas. Por eso el color debe integrarse con todo el lateral. En colores metalizados, perlados o envejecidos por el sol, la preparacion y la lectura del tono son claves para que el resultado sea natural.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Acabado lateral limpio",
        paragraphs: [
          "El proceso incluye limpieza, lijado, proteccion de zonas cercanas, aplicacion de pintura y revision final con luz adecuada. Tambien cuidamos los bordes de la pieza, la zona de la manilla y los encuentros con molduras para que la reparacion no parezca improvisada.",
          "Si el dano continua hacia la aleta o el parachoques, te recomendaremos valorar esas paginas de servicio. La buena comunicacion evita sorpresas y permite planificar la reparacion completa desde el principio.",
          "Tambien revisamos pequenos detalles que influyen mucho en una puerta: la linea de reflejo, la zona inferior expuesta a suciedad, el borde que se ve al abrir, las molduras y la relacion con los paneles vecinos. En una reparacion lateral, esos puntos hacen que el resultado se perciba profesional y no como una pieza pintada de forma aislada.",
          "Si hay dudas, preferimos explicar el alcance antes de empezar. Una puerta puede parecer sencilla, pero su tamano hace que cualquier defecto se vea rapido.",
        ],
      },
    ],
    process: [
      {
        title: "Lectura del lateral",
        text: "Revisamos la puerta junto con las piezas cercanas para entender el dano completo.",
      },
      {
        title: "Correccion previa",
        text: "Tratamos arañazos, marcas y pequenas deformaciones antes de aplicar color.",
      },
      {
        title: "Integracion visual",
        text: "Controlamos tono, brillo y bordes para que el lateral quede uniforme.",
      },
    ],
    relatedLinks: [
      {
        slug: "pintura-aleta",
        label: "Pintura de aleta",
        text: "Para danos que continuan hacia la parte delantera o trasera del lateral.",
      },
      {
        slug: "servicios/pintar-paragolpes",
        label: "Pintura de parachoques",
        text: "Si el roce de aparcamiento tambien llega al extremo del vehiculo.",
      },
      {
        slug: "servicios/pulido-carroceria",
        label: "Pulido de carroceria",
        text: "Alternativa cuando las marcas son superficiales y la pintura esta recuperable.",
      },
    ],
    faq: [
      {
        question: "Siempre hay que pintar la puerta completa?",
        answer:
          "No siempre. Depende del dano, del color y de la ubicacion. En algunos casos se puede trabajar de forma localizada, pero lo valoramos con fotos o revision directa.",
      },
      {
        question: "Se notara diferencia con las otras puertas?",
        answer:
          "Trabajamos la igualacion de color para reducir diferencias visibles. El estado de la pintura antigua y el color influyen en la decision tecnica.",
      },
      {
        question: "Puedo enviar fotos del lateral por WhatsApp?",
        answer:
          "Si. Envia fotos generales y de cerca, preferiblemente con luz natural y sin reflejos fuertes.",
      },
      {
        question: "Reparais golpes antes de pintar la puerta?",
        answer:
          "Si. Cuando hay deformacion o arañazo profundo, preparamos la superficie antes de pintar para conseguir un acabado correcto.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de puerta de coche. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-capo",
    title: "Pintura de capo en Torrevieja | Capot con laca y marcas",
    description:
      "Pintura de capo en Torrevieja para laca quemada, piedras, arañazos, desgaste solar y acabado frontal uniforme.",
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
    sections: [
      {
        heading: "Capo expuesto al sol, piedras y desgaste",
        paragraphs: [
          "La pintura de capo en Torrevieja es importante porque el capot recibe sol directo, impactos de pequenas piedras, contaminacion de carretera y cambios de temperatura. Cuando la laca se quema, el brillo desaparece o aparecen manchas, el frontal del coche pierde presencia aunque el resto del vehiculo este cuidado.",
          "Antes de pintar el capo revisamos el estado de la superficie, la profundidad de los danos, los bordes, la zona cercana al parabrisas y la relacion visual con aletas y parachoques. Si hay golpes o deformaciones, se corrigen antes de aplicar pintura para evitar sombras o marcas bajo la laca.",
        ],
      },
      {
        heading: "Frontal uniforme y color equilibrado",
        paragraphs: [
          "El capot es una pieza amplia y horizontal. Por eso necesita una preparacion muy regular. Una mala base puede verse con reflejos irregulares, especialmente bajo el sol de la Costa Blanca. Trabajamos para recuperar una superficie limpia, con brillo controlado y tono coherente con el resto del coche.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Relacion con parachoques y aletas",
        paragraphs: [
          "Cuando el dano viene de un impacto frontal, conviene comprobar parachoques, aletas y posibles marcas alrededor. A veces el capo necesita pintura, pero el parachoques requiere reparacion estetica o la aleta muestra un desajuste. Revisar todo el conjunto ayuda a evitar una reparacion incompleta.",
          "Si el problema principal es falta de brillo sin laca abierta, puede que el pulido de carroceria sea suficiente. Si la laca esta rota, la pintura suele ser la opcion mas estable.",
          "Tambien valoramos como se usa el coche. En vehiculos que duermen al sol, el capo suele envejecer antes que otras piezas y puede mostrar perdida de brillo aunque los laterales se vean aceptables. En esos casos explicamos si conviene pintar solo el capot, revisar el parachoques o mejorar el conjunto frontal para que el contraste no sea demasiado evidente.",
          "Cuando el vehiculo tiene muchos kilometros de carretera, tambien buscamos pequenas picadas de piedra. Corregirlas antes de pintar mejora la superficie y evita que reaparezcan bajo el brillo nuevo.",
          "El resultado buscado es un frontal limpio, no una pieza brillante que desentone.",
          "Tambien cuidamos que las lineas del capot mantengan una lectura uniforme.",
        ],
      },
    ],
    process: [
      {
        title: "Revision del frontal",
        text: "Analizamos laca, arañazos, impactos, bordes y piezas cercanas.",
      },
      {
        title: "Preparacion del capo",
        text: "Regularizamos la superficie para que el color y la laca queden uniformes.",
      },
      {
        title: "Acabado visible",
        text: "Revisamos brillo, textura y reflejos sobre una pieza muy expuesta.",
      },
    ],
    relatedLinks: [
      {
        slug: "servicios/pintar-paragolpes",
        label: "Pintura de parachoques",
        text: "Para completar reparaciones del frontal despues de roces o impactos.",
      },
      {
        slug: "pintura-aleta",
        label: "Pintura de aleta",
        text: "Recomendada si el dano alcanza las esquinas delanteras.",
      },
      {
        slug: "servicios/pulido-carroceria",
        label: "Pulido de carroceria",
        text: "Opcion si el capo esta apagado pero la laca aun se puede recuperar.",
      },
    ],
    faq: [
      {
        question: "Se puede recuperar un capo con laca quemada?",
        answer:
          "Cuando la laca esta muy deteriorada, normalmente es necesario pintar. Si solo hay perdida de brillo superficial, valoramos si el pulido puede mejorar el aspecto.",
      },
      {
        question: "La pintura del capo debe coincidir con las aletas?",
        answer:
          "Si. Revisamos el tono junto a las aletas y el parachoques para que el frontal se vea equilibrado.",
      },
      {
        question: "Que fotos envio para valorar el capo?",
        answer:
          "Envia una foto frontal, una desde cada lateral y detalles de manchas, piedras o arañazos con luz natural.",
      },
      {
        question: "Puedo pedir presupuesto por telefono?",
        answer:
          "Puedes llamar o escribir por WhatsApp. Para orientar mejor el precio, las fotos del capo son muy utiles.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de capo. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pintura-aleta",
    title: "Pintura de aleta en Torrevieja | Lateral y paso de rueda",
    description:
      "Pintura de aleta en Torrevieja para golpes laterales, arañazos, paso de rueda, preparacion e igualacion del tono.",
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
    sections: [
      {
        heading: "Aletas danadas en maniobras y pequenos impactos",
        paragraphs: [
          "La pintura de aleta en Torrevieja resuelve danos frecuentes en pasos de rueda, esquinas, laterales y zonas cercanas al parachoques. Las aletas suelen recibir roces al aparcar, golpes leves, arañazos profundos y marcas producidas por piedras o suciedad de carretera. Como estan junto a piezas muy visibles, la reparacion debe quedar bien integrada.",
          "Revisamos si la aleta mantiene su forma, si hay deformacion, si el borde del paso de rueda esta afectado y si el color necesita una igualacion especial. La preparacion correcta evita que la pintura nueva destaque o que aparezcan irregularidades despues del acabado.",
        ],
      },
      {
        heading: "Integracion con puerta, capo y parachoques",
        paragraphs: [
          "La aleta conecta visualmente varias piezas del vehiculo. En la parte delantera se relaciona con capo, puerta y parachoques; en la trasera puede marcar todo el lateral. Por eso no basta con cubrir el dano: hay que mirar el coche completo y decidir si la reparacion debe extenderse, difuminarse o combinarse con otra pieza.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Solucion proporcionada al dano",
        paragraphs: [
          "Si el dano es superficial, se puede valorar una intervencion mas sencilla. Si hay golpe, pliegue o pintura abierta, la aleta necesita preparacion antes de pintar. En vehiculos con pintura envejecida por el sol, la igualacion del tono cobra todavia mas importancia.",
          "Tambien podemos orientarte si dudas entre reparar una aleta, pintar una puerta cercana o revisar el parachoques. La idea es ordenar el trabajo para que el lateral quede coherente y no se convierta en una suma de reparaciones aisladas.",
          "La aleta tambien puede ocultar danos que no se aprecian en una sola foto, como un borde doblado, una separacion irregular o una marca en el paso de rueda. Por eso pedimos imagenes desde varios angulos y, si hace falta, recomendamos una revision presencial. Una buena lectura inicial permite decidir si el trabajo sera estetico o si requiere reparacion de chapa antes de pintar.",
          "En aletas delanteras revisamos ademas la continuidad con el paragolpes y el capo; en las traseras, la union con puerta, piloto y zona inferior del lateral.",
          "Ese control ayuda a que la reparacion se lea como parte natural del coche.",
        ],
      },
    ],
    process: [
      {
        title: "Evaluacion de la aleta",
        text: "Comprobamos forma, borde, paso de rueda, arañazos y piezas vecinas.",
      },
      {
        title: "Reparacion previa",
        text: "Corregimos superficie y preparamos la zona antes de aplicar color.",
      },
      {
        title: "Acabado integrado",
        text: "Revisamos tono y brillo junto al lateral completo del vehiculo.",
      },
    ],
    relatedLinks: [
      {
        slug: "pintura-puerta",
        label: "Pintura de puerta",
        text: "Para danos laterales que cruzan desde la aleta hacia la puerta.",
      },
      {
        slug: "servicios/pintar-paragolpes",
        label: "Pintura de parachoques",
        text: "Si el roce afecta tambien al extremo delantero o trasero.",
      },
      {
        slug: "servicios/reparacion-carroceria",
        label: "Reparacion de carroceria",
        text: "Cuando la aleta necesita correccion de forma antes del acabado.",
      },
    ],
    faq: [
      {
        question: "Se puede pintar solo una aleta?",
        answer:
          "Si, cuando el dano esta localizado. Revisamos el color y las piezas cercanas para decidir la mejor integracion.",
      },
      {
        question: "Que pasa si la aleta esta abollada?",
        answer:
          "Primero se corrige la superficie. Pintar encima de una deformacion dejaria sombras o reflejos irregulares.",
      },
      {
        question: "La aleta delantera se iguala con el capo?",
        answer:
          "Se revisa junto al capo, la puerta y el parachoques porque esas piezas determinan como se percibe el tono.",
      },
      {
        question: "Puedo pedir una valoracion rapida?",
        answer:
          "Si. Envia fotos por WhatsApp desde varios angulos y te indicaremos el alcance probable de la reparacion.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pintura de aleta. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pulido-faros",
    title: "Pulido de faros en Torrevieja | Opticas claras y cuidadas",
    description:
      "Pulido de faros en Torrevieja para opticas opacas, amarillentas o apagadas, con mejora visual y consulta por WhatsApp.",
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
    sections: [
      {
        heading: "Faros opacos por sol, uso y envejecimiento",
        paragraphs: [
          "El pulido de faros en Torrevieja ayuda cuando las opticas se ven amarillentas, mates, veladas o envejecidas por el sol. En una zona con muchas horas de luz, los faros pueden perder transparencia y hacer que el frontal parezca descuidado aunque la pintura del coche este en buen estado.",
          "Antes de trabajar los faros revisamos si el problema esta en la superficie exterior, si hay grietas profundas, humedad interior o danos que no se pueden corregir solo con pulido. Esta revision es importante para ofrecer una expectativa realista y no prometer una recuperacion imposible.",
        ],
      },
      {
        heading: "Mejora estetica del frontal",
        paragraphs: [
          "Unos faros mas claros cambian mucho la presencia del vehiculo. El coche se ve mas cuidado, el frontal recupera limpieza visual y combina mejor con trabajos de pintura de capo, pintura de parachoques o pulido de carroceria. El pulido no sustituye a una optica rota, pero puede mejorar de forma notable faros con desgaste superficial.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Proceso progresivo y acabado limpio",
        paragraphs: [
          "El trabajo se realiza de forma progresiva, retirando la capa exterior deteriorada y afinando la superficie hasta recuperar claridad. La clave es no tratar todos los faros igual: algunos necesitan mas correccion y otros solo una mejora ligera.",
          "Si el vehiculo tambien tiene pintura apagada, podemos combinar la consulta con pulido de carroceria. Asi el frontal no queda renovado solo en una parte, sino con una lectura mas equilibrada entre faros, capo y parachoques.",
          "Tambien explicamos cuando el pulido no es la mejor solucion. Si el faro tiene humedad interior, roturas, quemaduras profundas o material muy fatigado, la mejora puede ser parcial. En esos casos es mejor saberlo antes de empezar. La consulta por WhatsApp sirve para filtrar expectativas y decidir si merece la pena pulir o buscar otra solucion.",
          "Cuando ambos faros envejecen de forma distinta, tratamos de equilibrar la claridad visual para que el frontal no quede con una optica mas renovada que la otra.",
          "La mejora debe verse uniforme, especialmente al mirar el coche de frente.",
          "Por eso revisamos ambos faros como conjunto equilibrado y coherente, no como piezas separadas.",
        ],
      },
    ],
    process: [
      {
        title: "Revision de opticas",
        text: "Comprobamos opacidad, amarilleo, grietas, humedad y estado general.",
      },
      {
        title: "Pulido progresivo",
        text: "Trabajamos la superficie con pasos adaptados al deterioro del faro.",
      },
      {
        title: "Control visual",
        text: "Revisamos claridad, uniformidad y presencia del frontal del coche.",
      },
    ],
    relatedLinks: [
      {
        slug: "pulido-carroceria",
        label: "Pulido de carroceria",
        text: "Para mejorar brillo general y acompanar la recuperacion de los faros.",
      },
      {
        slug: "pintura-capo",
        label: "Pintura de capo",
        text: "Si el frontal tambien tiene laca quemada o marcas visibles.",
      },
      {
        slug: "pintura-parachoques",
        label: "Pintura de parachoques",
        text: "Para roces y marcas en la parte baja del frontal.",
      },
    ],
    faq: [
      {
        question: "El pulido elimina el color amarillo de los faros?",
        answer:
          "Cuando el amarilleo es superficial, puede mejorar mucho. Si el dano esta dentro del faro o hay grietas profundas, la mejora sera limitada.",
      },
      {
        question: "Cuanto dura el resultado del pulido de faros?",
        answer:
          "Depende del uso, exposicion solar y cuidado posterior. Podemos orientarte sobre mantenimiento despues de ver el estado de las opticas.",
      },
      {
        question: "Se puede hacer junto con pintura del parachoques?",
        answer:
          "Si. Es habitual combinarlo cuando se quiere recuperar la presencia del frontal del vehiculo.",
      },
      {
        question: "Como envio fotos de los faros?",
        answer:
          "Envia una foto frontal, una lateral y detalles de cada faro con luz natural para valorar opacidad y estado.",
      },
    ],
    whatsapp:
      "Hola PINTURA TORREVIEJA. Quiero informacion sobre pulido de faros. Puedo enviar fotos por WhatsApp.",
  },
  {
    slug: "pulido-carroceria",
    title: "Pulido de carroceria en Torrevieja | Brillo y marcas leves",
    description:
      "Pulido de carroceria en Torrevieja para recuperar brillo, reducir marcas leves, mejorar pintura apagada y consultar por WhatsApp.",
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
    sections: [
      {
        heading: "Pintura apagada, microarañazos y falta de brillo",
        paragraphs: [
          "El pulido de carroceria en Torrevieja es una solucion adecuada cuando la pintura esta apagada, con microarañazos, marcas superficiales, velos o perdida de profundidad. No todos los defectos requieren pintar. A veces, un proceso de pulido bien planteado puede recuperar brillo y mejorar la lectura visual del coche sin entrar en una reparacion mas grande.",
          "Antes de pulir revisamos el estado de la laca, la profundidad de las marcas, las zonas mas castigadas por el sol y si existen arañazos que ya han atravesado capas de pintura. Esta evaluacion evita expectativas irreales: el pulido mejora defectos superficiales, pero no corrige golpes, pintura saltada ni laca destruida.",
        ],
      },
      {
        heading: "Acabado exterior mas uniforme",
        paragraphs: [
          "El pulido ayuda a que el coche se vea mas limpio, con mejor reflejo y una presencia mas cuidada. Es especialmente util antes de vender un vehiculo, despues de una reparacion de pintura o cuando algunas piezas nuevas destacan demasiado frente al resto de la carroceria.",
          sharedConsultationText,
        ],
      },
      {
        heading: "Cuando combinar pulido y pintura",
        paragraphs: [
          "Si encontramos zonas con arañazos profundos, laca levantada o danos por golpe, te indicaremos si conviene pintar una pieza concreta. El pulido de carroceria puede combinarse con pintura de parachoques, pintura de puerta, pintura de capo o pintura de aleta para que el resultado general sea mas coherente.",
          "La clave esta en elegir la intervencion justa. No recomendamos pintar si la pintura puede recuperarse con pulido, pero tampoco recomendamos pulir cuando el defecto necesita reparacion real. Esa diferencia ahorra tiempo, coste y resultados decepcionantes.",
          "En coches que circulan a diario por Torrevieja, el sol, el polvo y los lavados rapidos pueden dejar marcas finas que se acumulan con el tiempo. Un pulido bien planteado mejora el brillo sin cambiar el color del coche, pero requiere criterio para no insistir de mas en zonas delicadas. Por eso revisamos la pintura antes de decidir la intensidad del trabajo.",
          "Tambien miramos zonas como techo, capo y laterales altos, que suelen recibir mas sol. Esa lectura permite priorizar donde el pulido aportara mas valor visual.",
          "Asi el trabajo se concentra donde la carroceria realmente gana presencia.",
        ],
      },
    ],
    process: [
      {
        title: "Evaluacion de la laca",
        text: "Revisamos brillo, marcas, profundidad de arañazos y zonas castigadas.",
      },
      {
        title: "Pulido controlado",
        text: "Trabajamos por pasos para recuperar claridad sin castigar la pintura.",
      },
      {
        title: "Revision del acabado",
        text: "Comprobamos reflejo, uniformidad y presencia exterior del vehiculo.",
      },
    ],
    relatedLinks: [
      {
        slug: "pintura-coche-torrevieja",
        label: "Pintura de coche",
        text: "Para casos donde la laca o la pintura ya no se pueden recuperar.",
      },
      {
        slug: "pulido-faros",
        label: "Pulido de faros",
        text: "Complemento frecuente para renovar el aspecto frontal.",
      },
      {
        slug: "pintura-puerta",
        label: "Pintura de puerta",
        text: "Si las marcas laterales son profundas y no salen con pulido.",
      },
    ],
    faq: [
      {
        question: "El pulido elimina todos los arañazos?",
        answer:
          "No. Mejora marcas superficiales y microarañazos, pero los arañazos profundos o pintura saltada pueden requerir reparacion y pintura.",
      },
      {
        question: "Cuando conviene pulir en lugar de pintar?",
        answer:
          "Cuando la laca esta recuperable y el problema principal es falta de brillo o marcas leves. Lo confirmamos revisando el coche o fotos.",
      },
      {
        question: "Se puede pulir despues de pintar una pieza?",
        answer:
          "Si, cuando el proceso y los tiempos lo permiten. Puede ayudar a equilibrar el aspecto general del vehiculo.",
      },
      {
        question: "Puedo pedir una consulta por WhatsApp?",
        answer:
          "Si. Envia fotos con luz natural de las zonas apagadas o marcadas y te orientaremos sobre pulido o pintura.",
      },
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
