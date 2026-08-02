import type { Locale } from "@/config/i18n";
import { additionalServiceTranslations } from "@/config/additional-service-i18n";

export type ServiceSectionCopy = {
  eyebrow: string;
  titleBase: string;
  titleAccent: string;
  paragraphs: readonly [string, string, string];
  beforeAlt: string;
  afterAlt: string;
  sliderLabel: string;
};

export type ComparisonSectionCopy = {
  titleStart: string;
  titleMiddle: string;
  titleEnd: string;
  subtitle: string;
  beforeLabel: string;
  afterLabel: string;
  projectTitle: string;
  viewAllLabel: string;
};

export const comparisonSectionTranslations: Record<Locale, ComparisonSectionCopy> = {
  es: { titleStart: "Antes", titleMiddle: "y después", titleEnd: "de la reparación", subtitle: "Mostramos claramente el resultado del trabajo", beforeLabel: "Antes de la reparación", afterLabel: "Después de la reparación", projectTitle: "Reparación y pintura de la aleta trasera", viewAllLabel: "Ver todos nuestros trabajos" },
  en: { titleStart: "Before", titleMiddle: "and after", titleEnd: "repair", subtitle: "See the result of the work at a glance", beforeLabel: "Before repair", afterLabel: "After repair", projectTitle: "Rear quarter panel repair and painting", viewAllLabel: "View all our work" },
  ru: { titleStart: "До", titleMiddle: "и после", titleEnd: "ремонта", subtitle: "Наглядно показываем результат работы", beforeLabel: "До ремонта", afterLabel: "После ремонта", projectTitle: "Ремонт и покраска заднего крыла", viewAllLabel: "Наши остальные работы" },
  uk: { titleStart: "До", titleMiddle: "і після", titleEnd: "ремонту", subtitle: "Наочно показуємо результат роботи", beforeLabel: "До ремонту", afterLabel: "Після ремонту", projectTitle: "Ремонт і фарбування заднього крила", viewAllLabel: "Усі наші роботи" },
  de: { titleStart: "Vor", titleMiddle: "und nach", titleEnd: "der Reparatur", subtitle: "Das Arbeitsergebnis auf einen Blick", beforeLabel: "Vor der Reparatur", afterLabel: "Nach der Reparatur", projectTitle: "Reparatur und Lackierung des hinteren Seitenteils", viewAllLabel: "Alle unsere Arbeiten" },
  fr: { titleStart: "Avant", titleMiddle: "et après", titleEnd: "réparation", subtitle: "Le résultat du travail en un coup d'œil", beforeLabel: "Avant réparation", afterLabel: "Après réparation", projectTitle: "Réparation et peinture de l’aile arrière", viewAllLabel: "Voir tous nos travaux" },
  pl: { titleStart: "Przed", titleMiddle: "i po", titleEnd: "naprawie", subtitle: "Wyraźnie pokazujemy efekt pracy", beforeLabel: "Przed naprawą", afterLabel: "Po naprawie", projectTitle: "Naprawa i lakierowanie tylnego błotnika", viewAllLabel: "Zobacz wszystkie realizacje" },
  nl: { titleStart: "Voor", titleMiddle: "en na", titleEnd: "herstel", subtitle: "Het resultaat van het werk in één oogopslag", beforeLabel: "Voor herstel", afterLabel: "Na herstel", projectTitle: "Reparatie en spuitwerk van het achterscherm", viewAllLabel: "Bekijk al ons werk" },
  it: { titleStart: "Prima", titleMiddle: "e dopo", titleEnd: "la riparazione", subtitle: "Il risultato del lavoro in un solo sguardo", beforeLabel: "Prima della riparazione", afterLabel: "Dopo la riparazione", projectTitle: "Riparazione e verniciatura del parafango posteriore", viewAllLabel: "Vedi tutti i nostri lavori" },
  nb: { titleStart: "Før", titleMiddle: "og etter", titleEnd: "reparasjon", subtitle: "Se resultatet av arbeidet med én gang", beforeLabel: "Før reparasjon", afterLabel: "Etter reparasjon", projectTitle: "Reparasjon og lakkering av bakskjermen", viewAllLabel: "Se alle arbeidene våre" },
  fi: { titleStart: "Ennen", titleMiddle: "ja jälkeen", titleEnd: "korjauksen", subtitle: "Työn tulos selkeästi nähtävissä", beforeLabel: "Ennen korjausta", afterLabel: "Korjauksen jälkeen", projectTitle: "Takalokasuojan korjaus ja maalaus", viewAllLabel: "Katso kaikki työmme" },
  da: { titleStart: "Før", titleMiddle: "og efter", titleEnd: "reparation", subtitle: "Se resultatet af arbejdet med det samme", beforeLabel: "Før reparation", afterLabel: "Efter reparation", projectTitle: "Reparation og lakering af bagskærmen", viewAllLabel: "Se alle vores arbejder" },
  sv: { titleStart: "Före", titleMiddle: "och efter", titleEnd: "reparation", subtitle: "Se resultatet av arbetet direkt", beforeLabel: "Före reparation", afterLabel: "Efter reparation", projectTitle: "Reparation och lackering av bakskärmen", viewAllLabel: "Se alla våra arbeten" },
  sk: { titleStart: "Pred", titleMiddle: "a po", titleEnd: "oprave", subtitle: "Výsledok práce prehľadne na jednom mieste", beforeLabel: "Pred opravou", afterLabel: "Po oprave", projectTitle: "Oprava a lakovanie zadného blatníka", viewAllLabel: "Pozrieť všetky naše práce" },
  hu: { titleStart: "Javítás", titleMiddle: "előtt és", titleEnd: "után", subtitle: "A munka eredménye egyetlen pillantással", beforeLabel: "Javítás előtt", afterLabel: "Javítás után", projectTitle: "A hátsó sárvédő javítása és fényezése", viewAllLabel: "Összes munkánk megtekintése" },
  bg: { titleStart: "Преди", titleMiddle: "и след", titleEnd: "ремонта", subtitle: "Показваме ясно резултата от работата", beforeLabel: "Преди ремонта", afterLabel: "След ремонта", projectTitle: "Ремонт и боядисване на задния калник", viewAllLabel: "Вижте всички наши работи" },
  pt: { titleStart: "Antes", titleMiddle: "e depois", titleEnd: "da reparação", subtitle: "O resultado do trabalho num só olhar", beforeLabel: "Antes da reparação", afterLabel: "Depois da reparação", projectTitle: "Reparação e pintura do guarda-lamas traseiro", viewAllLabel: "Ver todos os nossos trabalhos" },
  el: { titleStart: "Πριν", titleMiddle: "και μετά", titleEnd: "την επισκευή", subtitle: "Το αποτέλεσμα της εργασίας με μια ματιά", beforeLabel: "Πριν από την επισκευή", afterLabel: "Μετά την επισκευή", projectTitle: "Επισκευή και βαφή πίσω φτερού", viewAllLabel: "Δείτε όλες τις εργασίες μας" },
  cs: { titleStart: "Před", titleMiddle: "a po", titleEnd: "opravě", subtitle: "Výsledek práce přehledně na jednom místě", beforeLabel: "Před opravou", afterLabel: "Po opravě", projectTitle: "Oprava a lakování zadního blatníku", viewAllLabel: "Zobrazit všechny naše práce" },
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
    beforeAlt: "Tesla Model 3 antes de reparar y pintar la aleta trasera",
    afterAlt: "Tesla Model 3 después de reparar y pintar la aleta trasera",
    sliderLabel: "Comparar la aleta trasera del Tesla Model 3 antes y después de la reparación",
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
    beforeAlt: "Tesla Model 3 rear quarter panel before repair and painting",
    afterAlt: "Tesla Model 3 rear quarter panel after repair and painting",
    sliderLabel: "Compare the Tesla Model 3 rear quarter panel before and after repair",
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
    beforeAlt: "Tesla Model 3 до ремонта и покраски заднего крыла",
    afterAlt: "Tesla Model 3 после ремонта и покраски заднего крыла",
    sliderLabel: "Сравнение заднего крыла Tesla Model 3 до и после ремонта",
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
    beforeAlt: "Заднє крило Tesla Model 3 до ремонту та фарбування",
    afterAlt: "Заднє крило Tesla Model 3 після ремонту та фарбування",
    sliderLabel: "Порівняння заднього крила Tesla Model 3 до і після ремонту",
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
    beforeAlt: "Hinteres Seitenteil des Tesla Model 3 vor Reparatur und Lackierung",
    afterAlt: "Hinteres Seitenteil des Tesla Model 3 nach Reparatur und Lackierung",
    sliderLabel: "Hinteres Seitenteil des Tesla Model 3 vor und nach der Reparatur vergleichen",
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
    beforeAlt: "Aile arrière de la Tesla Model 3 avant réparation et peinture",
    afterAlt: "Aile arrière de la Tesla Model 3 après réparation et peinture",
    sliderLabel: "Comparer l’aile arrière de la Tesla Model 3 avant et après la réparation",
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
    beforeAlt: "Tylny błotnik Tesla Model 3 przed naprawą i lakierowaniem",
    afterAlt: "Tylny błotnik Tesla Model 3 po naprawie i lakierowaniu",
    sliderLabel: "Porównaj tylny błotnik Tesla Model 3 przed naprawą i po naprawie",
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
    beforeAlt: "Achterscherm van de Tesla Model 3 vóór reparatie en spuitwerk",
    afterAlt: "Achterscherm van de Tesla Model 3 na reparatie en spuitwerk",
    sliderLabel: "Vergelijk het achterscherm van de Tesla Model 3 voor en na het herstel",
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
    beforeAlt: "Parafango posteriore Tesla Model 3 prima della riparazione e verniciatura",
    afterAlt: "Parafango posteriore Tesla Model 3 dopo la riparazione e verniciatura",
    sliderLabel: "Confronta il parafango posteriore della Tesla Model 3 prima e dopo la riparazione",
  },
  ...additionalServiceTranslations,
};
