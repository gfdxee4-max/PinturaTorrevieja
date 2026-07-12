import type { Locale } from "@/config/i18n";

export type ServiceSectionCopy = {
  eyebrow: string;
  titleBase: string;
  titleAccent: string;
  paragraphs: readonly [string, string, string];
  beforeAlt: string;
  afterAlt: string;
  sliderLabel: string;
};

export const serviceSectionTranslations: Record<Locale, ServiceSectionCopy> = {
  es: {
    eyebrow: "Servicios",
    titleBase: "Pintura de vehículos y",
    titleAccent: "reparación de carrocería",
    paragraphs: [
      "Una pintura de calidad no es solo una cuestión estética, sino también una protección del metal frente a la corrosión. Ofrecemos pintura profesional de vehículos con tecnologías modernas para conseguir un resultado de calidad.",
      "Utilizamos pinturas y materiales de calidad para garantizar la durabilidad del acabado y la intensidad del color.",
      "Antes de pintar, preparamos cuidadosamente la superficie del vehículo. Utilizamos herramientas y equipos profesionales para eliminar óxido, arañazos y otros daños. Después aplicamos masilla y lijamos para obtener una superficie lisa y uniforme antes de la pintura.",
    ],
    beforeAlt: "Audi RS negra con daños graves en la parte delantera antes de la reparación de carrocería",
    afterAlt: "La misma Audi RS negra completamente restaurada después de la pintura y reparación de carrocería",
    sliderLabel: "Comparar el vehículo antes y después de la reparación",
  },
  en: {
    eyebrow: "Services",
    titleBase: "Vehicle painting and",
    titleAccent: "bodywork repair",
    paragraphs: [
      "Quality paintwork is not only about appearance; it also protects metal from corrosion. We provide professional vehicle painting using modern technology to achieve a high-quality result.",
      "We use quality paints and materials to ensure a durable finish and rich, consistent colour.",
      "Before painting, we carefully prepare the vehicle surface. Professional tools and equipment are used to remove rust, scratches and other damage. We then apply filler and sand the surface until it is smooth and even for painting.",
    ],
    beforeAlt: "Black Audi RS with severe front-end damage before bodywork repair",
    afterAlt: "The same black Audi RS fully restored after painting and bodywork repair",
    sliderLabel: "Compare the vehicle before and after repair",
  },
  ru: {
    eyebrow: "Услуги",
    titleBase: "Автопокраска и",
    titleAccent: "кузовной ремонт",
    paragraphs: [
      "Качественная покраска — это не только вопрос эстетики, но и защита металла от коррозии. Мы предлагаем профессиональную автопокраску с использованием современных технологий для достижения качественного результата.",
      "Мы используем только качественные краски и материалы, чтобы обеспечить долговечность покрытия и насыщенность цвета.",
      "Перед началом покраски мы тщательно подготавливаем поверхность автомобиля. Используем профессиональные инструменты и оборудование для устранения ржавчины, царапин и других повреждений. Затем наносим шпатлёвку и выполняем шлифовку, чтобы подготовить гладкую и ровную поверхность для нанесения краски.",
    ],
    beforeAlt: "Чёрная Audi RS с сильными повреждениями передней части до кузовного ремонта",
    afterAlt: "Та же чёрная Audi RS после полной покраски и кузовного ремонта",
    sliderLabel: "Сравнение автомобиля до и после кузовного ремонта",
  },
  uk: {
    eyebrow: "Послуги",
    titleBase: "Фарбування авто та",
    titleAccent: "кузовний ремонт",
    paragraphs: [
      "Якісне фарбування — це не лише питання естетики, а й захист металу від корозії. Ми пропонуємо професійне фарбування автомобілів із застосуванням сучасних технологій для досягнення якісного результату.",
      "Ми використовуємо якісні фарби й матеріали, щоб забезпечити довговічність покриття та насиченість кольору.",
      "Перед фарбуванням ми ретельно готуємо поверхню автомобіля. Використовуємо професійні інструменти й обладнання для усунення іржі, подряпин та інших пошкоджень. Потім наносимо шпаклівку й шліфуємо поверхню, щоб зробити її гладкою та рівною перед нанесенням фарби.",
    ],
    beforeAlt: "Чорна Audi RS із сильними пошкодженнями передньої частини до кузовного ремонту",
    afterAlt: "Та сама чорна Audi RS після повного фарбування та кузовного ремонту",
    sliderLabel: "Порівняння автомобіля до і після кузовного ремонту",
  },
  de: {
    eyebrow: "Leistungen",
    titleBase: "Autolackierung und",
    titleAccent: "Karosseriereparatur",
    paragraphs: [
      "Eine hochwertige Lackierung dient nicht nur der Optik, sondern schützt das Metall auch vor Korrosion. Wir bieten professionelle Fahrzeuglackierung mit moderner Technik für ein hochwertiges Ergebnis.",
      "Wir verwenden hochwertige Lacke und Materialien, um eine langlebige Oberfläche und eine intensive Farbtiefe zu erzielen.",
      "Vor der Lackierung bereiten wir die Fahrzeugoberfläche sorgfältig vor. Mit professionellen Werkzeugen und Geräten entfernen wir Rost, Kratzer und andere Schäden. Anschließend tragen wir Spachtelmasse auf und schleifen die Fläche glatt und eben.",
    ],
    beforeAlt: "Schwarzer Audi RS mit schweren Frontschäden vor der Karosseriereparatur",
    afterAlt: "Derselbe schwarze Audi RS vollständig restauriert nach Lackierung und Karosseriereparatur",
    sliderLabel: "Fahrzeug vor und nach der Reparatur vergleichen",
  },
  fr: {
    eyebrow: "Services",
    titleBase: "Peinture automobile et",
    titleAccent: "réparation de carrosserie",
    paragraphs: [
      "Une peinture de qualité ne relève pas seulement de l’esthétique : elle protège aussi le métal contre la corrosion. Nous réalisons des travaux de peinture automobile professionnels avec des technologies modernes pour obtenir un résultat soigné.",
      "Nous utilisons des peintures et des matériaux de qualité afin d’assurer la durabilité de la finition et l’intensité de la couleur.",
      "Avant la peinture, nous préparons soigneusement la surface du véhicule. Des outils et équipements professionnels permettent d’éliminer la rouille, les rayures et les autres dommages. Nous appliquons ensuite du mastic et ponçons la surface pour la rendre lisse et uniforme.",
    ],
    beforeAlt: "Audi RS noire fortement endommagée à l’avant avant réparation de carrosserie",
    afterAlt: "La même Audi RS noire entièrement restaurée après peinture et réparation de carrosserie",
    sliderLabel: "Comparer le véhicule avant et après la réparation",
  },
  pl: {
    eyebrow: "Usługi",
    titleBase: "Lakierowanie samochodów i",
    titleAccent: "naprawa blacharska",
    paragraphs: [
      "Wysokiej jakości lakierowanie to nie tylko estetyka, lecz także ochrona metalu przed korozją. Oferujemy profesjonalne lakierowanie samochodów z wykorzystaniem nowoczesnych technologii, aby uzyskać staranny rezultat.",
      "Stosujemy wysokiej jakości lakiery i materiały, aby zapewnić trwałość powłoki oraz głębię koloru.",
      "Przed lakierowaniem dokładnie przygotowujemy powierzchnię samochodu. Profesjonalne narzędzia i urządzenia pomagają usunąć rdzę, zarysowania i inne uszkodzenia. Następnie nakładamy szpachlę i szlifujemy powierzchnię, aż będzie gładka i równa.",
    ],
    beforeAlt: "Czarne Audi RS z poważnie uszkodzonym przodem przed naprawą blacharską",
    afterAlt: "To samo czarne Audi RS całkowicie odrestaurowane po lakierowaniu i naprawie blacharskiej",
    sliderLabel: "Porównaj samochód przed naprawą i po naprawie",
  },
  ro: {
    eyebrow: "Servicii",
    titleBase: "Vopsitorie auto și",
    titleAccent: "reparații caroserie",
    paragraphs: [
      "O vopsire de calitate nu ține doar de estetică, ci protejează și metalul împotriva coroziunii. Oferim vopsire auto profesională, folosind tehnologii moderne pentru un rezultat de calitate.",
      "Folosim vopsele și materiale de calitate pentru a asigura durabilitatea stratului și intensitatea culorii.",
      "Înainte de vopsire, pregătim cu atenție suprafața automobilului. Folosim scule și echipamente profesionale pentru a elimina rugina, zgârieturile și alte deteriorări. Aplicăm apoi chit și șlefuim suprafața până devine netedă și uniformă.",
    ],
    beforeAlt: "Audi RS negru cu partea frontală grav avariată înainte de reparația caroseriei",
    afterAlt: "Același Audi RS negru complet restaurat după vopsire și repararea caroseriei",
    sliderLabel: "Compară automobilul înainte și după reparație",
  },
  nl: {
    eyebrow: "Diensten",
    titleBase: "Auto spuiten en",
    titleAccent: "autoschadeherstel",
    paragraphs: [
      "Hoogwaardig spuitwerk draait niet alleen om uitstraling, maar beschermt het metaal ook tegen corrosie. Wij verzorgen professioneel autospuitwerk met moderne technieken voor een zorgvuldig resultaat.",
      "Wij gebruiken hoogwaardige lakken en materialen voor een duurzame afwerking en een diepe, egale kleur.",
      "Voor het spuiten bereiden we het oppervlak zorgvuldig voor. Met professioneel gereedschap en apparatuur verwijderen we roest, krassen en andere schade. Daarna brengen we plamuur aan en schuren we het oppervlak glad en vlak voor het lakwerk.",
    ],
    beforeAlt: "Zwarte Audi RS met zware schade aan de voorkant vóór autoschadeherstel",
    afterAlt: "Dezelfde zwarte Audi RS volledig hersteld na spuitwerk en carrosserieherstel",
    sliderLabel: "Vergelijk de auto voor en na het herstel",
  },
  it: {
    eyebrow: "Servizi",
    titleBase: "Verniciatura auto e",
    titleAccent: "riparazione carrozzeria",
    paragraphs: [
      "Una verniciatura di qualità non riguarda solo l’estetica, ma protegge anche il metallo dalla corrosione. Offriamo verniciatura auto professionale con tecnologie moderne per ottenere un risultato accurato.",
      "Utilizziamo vernici e materiali di qualità per garantire la durata della finitura e l’intensità del colore.",
      "Prima della verniciatura prepariamo con cura la superficie dell’auto. Utilizziamo strumenti e attrezzature professionali per eliminare ruggine, graffi e altri danni. Applichiamo quindi lo stucco e levighiamo la superficie fino a renderla liscia e uniforme.",
    ],
    beforeAlt: "Audi RS nera con gravi danni anteriori prima della riparazione della carrozzeria",
    afterAlt: "La stessa Audi RS nera completamente restaurata dopo verniciatura e riparazione della carrozzeria",
    sliderLabel: "Confronta l’auto prima e dopo la riparazione",
  },
};
