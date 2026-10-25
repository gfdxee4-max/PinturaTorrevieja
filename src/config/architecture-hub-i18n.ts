import type { ArchitecturePage } from "@/config/architecture";
import { getArchitecturePage } from "@/config/architecture";
import type { Locale } from "@/config/i18n";
import { getProjectsPath } from "@/config/projects-i18n";
import { notFound } from "next/navigation";
import { polishServicePages } from "@/config/polish-service-pages";
import { locales } from "@/config/locales";
import { newWheelHubPaths, newWheelHubUi, newWheelHubPages } from "@/config/new-wheel-hubs";
import { newWheelPages } from "@/config/wheel-locales";
import { getLocalizedServicePath } from "@/config/localized-service-pages";

export const architectureHubLocales = locales;

export type ArchitectureHubLocale = (typeof architectureHubLocales)[number];
export type ArchitectureHubKind = "services" | "cities";

export type ArchitectureHubUiCopy = {
  navigation: string;
  languageMenu: string;
  menu: string;
  services: string;
  cities: string;
  works: string;
  faq: string;
  contact: string;
  about: string;
  call: string;
  internalLinks: string;
  home: string;
  informationHeading: string;
  informationText: string;
  relatedPages: string;
  faqHeading: string;
  consultation: string;
  sendPhotos: string;
};

const hubPaths: Record<ArchitectureHubKind, Partial<Record<ArchitectureHubLocale, string>> & { es: string }> = {
  services: {
    ...newWheelHubPaths,
    es: "/servicios",
    de: "/de/servicios",
    pl: "/pl/servicios",
    en: "/en/servicios",
    ru: "/ru/servicios",
    uk: "/uk/servicios",
  },
  cities: {
    es: "/ciudades",
    de: "/de/ciudades",
    en: "/en/ciudades",
    ru: "/ru/ciudades",
    uk: "/uk/ciudades",
  },
};

export const architectureHubUi: Record<ArchitectureHubLocale, ArchitectureHubUiCopy> = {
  ...newWheelHubUi,
  pl: {
    navigation: "Nawigacja", languageMenu: "Język", menu: "Menu", services: "Usługi", cities: "Obszar obsługi", works: "Realizacje", faq: "FAQ", contact: "Kontakt", about: "O nas", call: "Zadzwoń", internalLinks: "Powiązane strony", home: "Strona główna", informationHeading: "Jasne informacje przed naprawą.", informationText: "Porównaj usługi, zobacz rzeczywiste realizacje lub prześlij zdjęcia do wstępnej oceny.", relatedPages: "Powiązane strony", faqHeading: "Najczęściej zadawane pytania", consultation: "Zapytanie", sendPhotos: "Prześlij zdjęcia samochodu przez WhatsApp.",
  },
  es: {
    navigation: "Secciones",
    languageMenu: "Idioma",
    menu: "Menú",
    services: "Servicios",
    cities: "Ciudades",
    works: "Trabajos",
    faq: "FAQ",
    contact: "Contacto",
    about: "Sobre nosotros",
    call: "Llamar",
    internalLinks: "Enlaces internos",
    home: "Inicio",
    informationHeading: "Informacion clara antes de reparar.",
    informationText:
      "Cada pagina esta pensada para ayudar a elegir el siguiente paso sin promesas inventadas: enviar fotos, comparar servicios o pedir una consulta.",
    relatedPages: "Paginas relacionadas",
    faqHeading: "Preguntas frecuentes",
    consultation: "Consulta",
    sendPhotos: "Envia fotos del vehiculo por WhatsApp.",
  },
  de: {
    navigation: "Bereiche",
    languageMenu: "Sprache",
    menu: "Menü",
    services: "Leistungen",
    cities: "Einzugsgebiet",
    works: "Arbeiten",
    faq: "FAQ",
    contact: "Kontakt",
    about: "Über uns",
    call: "Anrufen",
    internalLinks: "Interne Links",
    home: "Startseite",
    informationHeading: "Klare Informationen vor der Reparatur.",
    informationText: "Vergleichen Sie Leistungen, sehen Sie echte Arbeiten oder senden Sie Fotos für eine erste Einschätzung.",
    relatedPages: "Verwandte Seiten",
    faqHeading: "Häufig gestellte Fragen",
    consultation: "Anfrage",
    sendPhotos: "Senden Sie Fahrzeugfotos per WhatsApp.",
  },
  en: {
    navigation: "Sections",
    languageMenu: "Language",
    menu: "Menu",
    services: "Services",
    cities: "Service areas",
    works: "Work",
    faq: "FAQ",
    contact: "Contact",
    about: "About us",
    call: "Call",
    internalLinks: "Internal links",
    home: "Home",
    informationHeading: "Clear information before the repair.",
    informationText:
      "Each page helps you choose the next practical step: send photos, compare services or request an initial assessment.",
    relatedPages: "Related pages",
    faqHeading: "Frequently asked questions",
    consultation: "Enquiry",
    sendPhotos: "Send vehicle photos on WhatsApp.",
  },
  ru: {
    navigation: "Разделы",
    languageMenu: "Язык",
    menu: "Меню",
    services: "Услуги",
    cities: "Города",
    works: "Работы",
    faq: "FAQ",
    contact: "Контакты",
    about: "О нас",
    call: "Позвонить",
    internalLinks: "Внутренние ссылки",
    home: "Главная",
    informationHeading: "Понятная информация до начала ремонта.",
    informationText:
      "Каждая страница помогает выбрать следующий шаг: отправить фотографии, сравнить услуги или запросить предварительную оценку.",
    relatedPages: "Связанные страницы",
    faqHeading: "Частые вопросы",
    consultation: "Консультация",
    sendPhotos: "Отправьте фотографии автомобиля в WhatsApp.",
  },
  uk: {
    navigation: "Розділи",
    languageMenu: "Мова",
    menu: "Меню",
    services: "Послуги",
    cities: "Міста",
    works: "Роботи",
    faq: "FAQ",
    contact: "Контакти",
    about: "Про нас",
    call: "Зателефонувати",
    internalLinks: "Внутрішні посилання",
    home: "Головна",
    informationHeading: "Зрозуміла інформація до початку ремонту.",
    informationText:
      "Кожна сторінка допомагає обрати наступний крок: надіслати фотографії, порівняти послуги або запросити попередню оцінку.",
    relatedPages: "Пов’язані сторінки",
    faqHeading: "Часті запитання",
    consultation: "Консультація",
    sendPhotos: "Надішліть фотографії автомобіля у WhatsApp.",
  },
};

const localizedHubPages: Record<Exclude<ArchitectureHubLocale, "es">, Partial<Record<ArchitectureHubKind, Omit<ArchitecturePage, "path">>>> = {
  ...newWheelHubPages,
  pl: {
    services: {
      locale: "pl", hubKind: "services",
      title: "Usługi blacharskie i lakiernicze w Torrevieja | PaintLab",
      description: "Usługi PaintLab w Torrevieja: lakierowanie samochodów, naprawy blacharskie, zderzaki, naprawy powypadkowe oraz renowacja felg.",
      h1: "USŁUGI BLACHARSKIE I LAKIERNICZE", eyebrow: "USŁUGI PAINTLAB",
      lead: "Wybierz usługę odpowiednią do stanu samochodu. Na stronach opisujemy zakres prac, sposób oceny i kolejne etapy bez obietnic niepopartych oględzinami.",
      cta: "Prześlij zdjęcia przez WhatsApp",
      sections: [{ heading: "Zakres prac w warsztacie", paragraphs: ["PaintLab znajduje się w Torrevieja. Zdjęcia pomagają we wstępnej ocenie, natomiast ostateczny zakres i koszt potwierdzamy po oględzinach samochodu lub felg."] }],
      links: polishServicePages.map((page) => ({ href: `/pl/${page.slug}`, label: page.h1, text: page.description })),
      whatsappMessage: "Dzień dobry, PaintLab. Chcę omówić naprawę samochodu w Torrevieja. Mogę przesłać zdjęcia.",
    },
  },
  de: {
    services: {
      locale: "de",
      hubKind: "services",
      title: "Autolackierung und Karosseriereparatur in Torrevieja | PaintLab",
      description: "Leistungen von PaintLab in Torrevieja: Autolackierung, Karosseriereparatur, Stoßfänger, Unfallreparatur und Felgenaufbereitung.",
      h1: "AUTOLACKIERUNG UND KAROSSERIEREPARATUR",
      eyebrow: "LEISTUNGEN",
      lead: "Wählen Sie die passende Leistung für Lack-, Karosserie-, Unfall- oder Felgenschäden. Für eine erste Einschätzung können Sie Fotos per WhatsApp senden.",
      cta: "Fotos per WhatsApp senden",
      sections: [{ heading: "Leistungen nach Reparaturart", paragraphs: ["Die einzelnen Seiten erklären Arbeitsumfang, Ablauf und Grenzen der jeweiligen Leistung. Der endgültige Reparaturweg wird nach der Besichtigung festgelegt."] }],
      links: [
        { href: "/de/autolackierung-torrevieja", label: "Autolackierung", text: "Komplette Fahrzeuge und einzelne Karosserieteile vorbereiten und lackieren." },
        { href: "/de/karosseriereparatur-torrevieja", label: "Karosseriereparatur", text: "Dellen, Kratzer und beschädigte Karosserieteile instand setzen." },
        { href: "/de/stossfaenger-reparatur-lackierung-torrevieja", label: "Stoßfänger-Reparatur", text: "Geeignete Kratzer, Lackschäden und Verformungen bearbeiten." },
        { href: "/de/unfallreparatur-versicherung-torrevieja", label: "Unfall- und Versicherungsschäden", text: "Konkrete Reparaturfälle nach einem Unfall prüfen und bearbeiten." },
        { href: "/de/felgenaufbereitung-pulverbeschichtung-torrevieja", label: "Felgenaufbereitung", text: "Felgen prüfen, sandstrahlen, pulverbeschichten und bei Eignung richten." },
      ],
      whatsappMessage: "Hallo PaintLab. Ich möchte eine erste Einschätzung für eine Reparatur in Torrevieja und kann Fotos senden.",
    },
    cities: {
      locale: "de",
      hubKind: "cities",
      title: "Karosserie und Lackierung an der südlichen Costa Blanca | PaintLab",
      description: "PaintLab befindet sich in Torrevieja und arbeitet für Kunden aus Torrevieja und den umliegenden Orten der südlichen Costa Blanca.",
      h1: "KAROSSERIE UND LACKIERUNG AN DER SÜDLICHEN COSTA BLANCA",
      eyebrow: "EINZUGSGEBIET",
      lead: "Die Werkstatt PaintLab befindet sich in Torrevieja. Kunden aus den umliegenden Orten kommen für Karosseriereparatur, Lackierung und Felgenaufbereitung zu uns.",
      cta: "Reparatur per WhatsApp anfragen",
      sections: [{ heading: "Werkstatt in Torrevieja", paragraphs: ["PaintLab hat keine Filialen in den genannten Orten und bietet keinen mobilen Reparaturservice. Senden Sie vor der Anfahrt Fotos, um eine erste Einschätzung und einen Besichtigungstermin abzustimmen."] }],
      links: [
        { href: "/de", label: "Torrevieja", text: "Deutsche Übersicht der PaintLab Werkstatt in Torrevieja." },
        { href: "/de/servicios", label: "PaintLab Leistungen", text: "Autolackierung, Karosserie-, Unfall-, Stoßfänger- und Felgenarbeiten." },
        { href: "/ciudades/orihuela-costa", label: "Orihuela Costa", text: "Werkstattleistungen für Kunden aus Orihuela Costa." },
        { href: "/ciudades/guardamar-del-segura", label: "Guardamar del Segura", text: "Werkstattleistungen für Kunden aus Guardamar del Segura." },
        { href: "/ciudades/ciudad-quesada", label: "Ciudad Quesada", text: "Werkstattleistungen für Kunden aus Ciudad Quesada." },
        { href: "/ciudades/la-mata", label: "La Mata", text: "PaintLab in Torrevieja für Kunden aus La Mata." },
      ],
      whatsappMessage: "Hallo PaintLab. Ich bin in der Nähe von Torrevieja und möchte eine erste Einschätzung. Ich kann Fotos senden.",
    },
  },
  ru: {
    services: {
      locale: "ru",
      hubKind: "services",
      title: "Услуги по покраске и кузовному ремонту | PaintLab",
      description:
        "Услуги по кузовному ремонту и покраске автомобилей в Торревьехе. Выберите нужную услугу или отправьте фотографии автомобиля в WhatsApp для предварительной оценки ремонта.",
      h1: "УСЛУГИ ПО ПОКРАСКЕ И КУЗОВНОМУ РЕМОНТУ",
      eyebrow: "УСЛУГИ",
      lead:
        "Услуги по кузовному ремонту и покраске автомобилей в Торревьехе. Выберите нужную услугу или отправьте фотографии автомобиля в WhatsApp для предварительной оценки ремонта.",
      cta: "Получить оценку в WhatsApp",
      sections: [
        {
          heading: "Услуги по типу ремонта",
          paragraphs: [
            "Выберите подходящий вид ремонта по повреждённой детали и состоянию лакокрасочного покрытия. Для предварительной оценки можно отправить общий вид автомобиля и несколько фотографий повреждения.",
          ],
        },
      ],
      links: [
        { href: "/ru/avtopokraska-torrevieja", label: "Автопокраска в Торревьехе", text: "Покраска автомобилей и восстановление лакокрасочного покрытия." },
        { href: "/servicios/pintura-coche", label: "Покраска автомобиля", text: "Покраска и восстановление повреждённых элементов кузова." },
        { href: "/servicios/pintar-coche-completo", label: "Покраска автомобиля целиком", text: "Полная покраска автомобиля и восстановление внешнего вида." },
        { href: "/ru/pokraska-bampera-torrevieja", label: "Покраска бампера", text: "Ремонт царапин, повреждений пластика и покраска бампера." },
        { href: "/ru/kuzovnoy-remont-torrevieja", label: "Кузовной ремонт", text: "Восстановление повреждённых элементов кузова автомобиля." },
        { href: "/ru/remont-po-strahovke-torrevieja", label: "Кузовной ремонт после ДТП по страховке", text: "Ремонт и покраска повреждённых деталей с учётом документов по конкретному страховому случаю." },
        { href: "/ru/restavraciya-pokraska-diskov-torrevieja", label: "Реставрация и порошковая покраска дисков", text: "Пескоструйная подготовка и восстановление покрытия автомобильных дисков." },
        { href: "/servicios/reparacion-aranazos-coche", label: "Ремонт царапин", text: "Удаление повреждений и последующая подготовка и покраска." },
        { href: "/servicios/pulido-carroceria", label: "Полировка кузова", text: "Восстановление блеска и внешнего вида лакокрасочного покрытия." },
        { href: "/servicios/pulido-faros", label: "Полировка фар", text: "Восстановление прозрачности автомобильных фар." },
      ],
      whatsappMessage:
        "Здравствуйте, PaintLab. Хочу получить предварительную оценку кузовного ремонта или покраски автомобиля. Могу отправить фотографии.",
    },
    cities: {
      locale: "ru",
      hubKind: "cities",
      title: "Кузовной ремонт и покраска на юге Коста-Бланки | PaintLab",
      description:
        "PaintLab находится в Торревьехе и обслуживает клиентов из Торревьехи и ближайших городов юга Коста-Бланки.",
      h1: "КУЗОВНОЙ РЕМОНТ И ПОКРАСКА НА ЮГЕ КОСТА-БЛАНКИ",
      eyebrow: "ЗОНЫ ОБСЛУЖИВАНИЯ",
      lead:
        "PaintLab находится в Торревьехе и обслуживает клиентов из Торревьехи и ближайших городов юга Коста-Бланки.",
      cta: "Уточнить ремонт в WhatsApp",
      sections: [
        {
          heading: "ГОРОДА И ЗОНЫ ОБСЛУЖИВАНИЯ",
          paragraphs: [
            "Мастерская PaintLab физически находится в Торревьехе. Клиенты из соседних городов приезжают сюда для кузовного ремонта, подготовки деталей и покраски автомобилей.",
            "Перед визитом можно отправить фотографии повреждения в WhatsApp, чтобы получить предварительную оценку и согласовать удобное время осмотра.",
          ],
        },
      ],
      links: [
        { href: "/ru", label: "Торревьеха", text: "Кузовной ремонт и покраска автомобилей в Торревьехе." },
        { href: "/ciudades/orihuela-costa", label: "Ориуэла-Коста", text: "Кузовной ремонт и покраска автомобилей для клиентов из Ориуэла-Коста." },
        { href: "/ciudades/guardamar-del-segura", label: "Гуардамар-дель-Сегура", text: "Покраска и кузовной ремонт автомобилей для клиентов из Гуардамара." },
        { href: "/ciudades/ciudad-quesada", label: "Сьюдад-Кесада", text: "Кузовной ремонт и покраска автомобилей для клиентов из Сьюдад-Кесады." },
        { href: "/ciudades/la-mata", label: "Ла-Мата", text: "Покраска и кузовной ремонт автомобилей рядом с Ла-Мата." },
        { href: "/ru/avtopokraska-torrevieja", label: "Покраска автомобилей в Торревьехе", text: "Услуги автопокраски, окраска отдельных деталей и восстановление лакокрасочного покрытия." },
        { href: "/ru/servicios", label: "Услуги PaintLab", text: "Посмотрите доступные виды кузовного ремонта и покраски." },
      ],
      whatsappMessage:
        "Здравствуйте, PaintLab. Я нахожусь недалеко от Торревьехи и хочу получить предварительную оценку ремонта. Могу отправить фотографии.",
    },
  },
  uk: {
    services: {
      locale: "uk",
      hubKind: "services",
      title: "Послуги з фарбування та кузовного ремонту | PaintLab",
      description:
        "Послуги з кузовного ремонту та фарбування автомобілів у Торрев'єсі. Оберіть потрібну послугу або надішліть фотографії автомобіля у WhatsApp для попередньої оцінки ремонту.",
      h1: "ПОСЛУГИ З ФАРБУВАННЯ ТА КУЗОВНОГО РЕМОНТУ",
      eyebrow: "ПОСЛУГИ",
      lead:
        "Послуги з кузовного ремонту та фарбування автомобілів у Торрев'єсі. Оберіть потрібну послугу або надішліть фотографії автомобіля у WhatsApp для попередньої оцінки ремонту.",
      cta: "Отримати оцінку у WhatsApp",
      sections: [
        {
          heading: "Послуги за типом ремонту",
          paragraphs: [
            "Оберіть потрібний вид ремонту за пошкодженою деталлю та станом лакофарбового покриття. Для попередньої оцінки надішліть загальний вигляд автомобіля та кілька фотографій пошкодження.",
          ],
        },
      ],
      links: [
        { href: "/uk/farbuvannya-avto-torrevieja", label: "Фарбування авто у Торрев'єсі", text: "Фарбування автомобілів і відновлення лакофарбового покриття." },
        { href: "/servicios/pintura-coche", label: "Фарбування автомобіля", text: "Фарбування та відновлення пошкоджених елементів кузова." },
        { href: "/servicios/pintar-coche-completo", label: "Повне фарбування автомобіля", text: "Повне фарбування автомобіля та відновлення зовнішнього вигляду." },
        { href: "/uk/farbuvannya-bampera-torrevieja", label: "Фарбування бампера", text: "Ремонт подряпин, пошкоджень пластику та фарбування бампера." },
        { href: "/uk/kuzovnyi-remont-torrevieja", label: "Кузовний ремонт", text: "Відновлення пошкоджених елементів кузова автомобіля." },
        { href: "/uk/remont-po-strahovci-torrevieja", label: "Ремонт після ДТП та страхового випадку", text: "Оцінка конкретного випадку, кузовні роботи й фарбування пошкоджених деталей." },
        { href: "/uk/restavraciya-farbuvannya-dyskiv-torrevieja", label: "Реставрація та порошкове фарбування дисків", text: "Перевірка геометрії, вирівнювання придатних дисків і підготовка покриття." },
        { href: "/servicios/reparacion-aranazos-coche", label: "Ремонт подряпин", text: "Усунення пошкоджень із подальшою підготовкою та фарбуванням." },
        { href: "/servicios/pulido-carroceria", label: "Полірування кузова", text: "Відновлення блиску та зовнішнього вигляду лакофарбового покриття." },
        { href: "/servicios/pulido-faros", label: "Полірування фар", text: "Відновлення прозорості автомобільних фар." },
      ],
      whatsappMessage:
        "Вітаю, PaintLab. Хочу отримати попередню оцінку кузовного ремонту або фарбування автомобіля. Можу надіслати фотографії.",
    },
    cities: {
      locale: "uk",
      hubKind: "cities",
      title: "Кузовний ремонт і фарбування на півдні Коста-Бланки | PaintLab",
      description:
        "PaintLab знаходиться в Торрев'єсі та обслуговує клієнтів із Торрев'єхи й найближчих міст півдня Коста-Бланки.",
      h1: "КУЗОВНИЙ РЕМОНТ І ФАРБУВАННЯ НА ПІВДНІ КОСТА-БЛАНКИ",
      eyebrow: "ЗОНИ ОБСЛУГОВУВАННЯ",
      lead:
        "PaintLab знаходиться в Торрев'єсі та обслуговує клієнтів із Торрев'єхи й найближчих міст півдня Коста-Бланки.",
      cta: "Уточнити ремонт у WhatsApp",
      sections: [
        {
          heading: "МІСТА ТА ЗОНИ ОБСЛУГОВУВАННЯ",
          paragraphs: [
            "Майстерня PaintLab фізично знаходиться в Торрев'єсі. Клієнти із сусідніх міст приїжджають сюди для кузовного ремонту, підготовки деталей і фарбування автомобілів.",
            "Перед візитом можна надіслати фотографії пошкодження у WhatsApp, щоб отримати попередню оцінку та узгодити зручний час огляду.",
          ],
        },
      ],
      links: [
        { href: "/uk", label: "Торрев'єха", text: "Кузовний ремонт і фарбування автомобілів у Торрев'єсі." },
        { href: "/ciudades/orihuela-costa", label: "Оріуела-Коста", text: "Кузовний ремонт і фарбування автомобілів для клієнтів з Оріуела-Коста." },
        { href: "/ciudades/guardamar-del-segura", label: "Гуардамар-дель-Сегура", text: "Фарбування та кузовний ремонт автомобілів для клієнтів із Гуардамара." },
        { href: "/ciudades/ciudad-quesada", label: "Сьюдад-Кесада", text: "Кузовний ремонт і фарбування автомобілів для клієнтів зі Сьюдад-Кесади." },
        { href: "/ciudades/la-mata", label: "Ла-Мата", text: "Фарбування та кузовний ремонт автомобілів поруч із Ла-Мата." },
        { href: "/uk/servicios", label: "Послуги PaintLab", text: "Перегляньте доступні види кузовного ремонту та фарбування." },
      ],
      whatsappMessage:
        "Вітаю, PaintLab. Я перебуваю неподалік Торрев'єхи та хочу отримати попередню оцінку ремонту. Можу надіслати фотографії.",
    },
  },
  en: {
    services: {
      locale: "en",
      hubKind: "services",
      title: "Car Painting and Body Repair Services | PaintLab",
      description:
        "Car painting and body repair services in Torrevieja. Choose the service you need or send us photos of your vehicle on WhatsApp for a preliminary repair estimate.",
      h1: "CAR PAINTING AND BODY REPAIR SERVICES",
      eyebrow: "SERVICES",
      lead:
        "Car painting and body repair services in Torrevieja. Choose the service you need or send us photos of your vehicle on WhatsApp for a preliminary repair estimate.",
      cta: "Request an estimate on WhatsApp",
      sections: [
        {
          heading: "Services by repair type",
          paragraphs: [
            "Choose the appropriate repair by the damaged panel and the condition of the paintwork. For a preliminary estimate, send an overall view of the vehicle and several clear photos of the damage.",
          ],
        },
      ],
      links: [
        { href: "/en/car-respray-torrevieja", label: "Car respray and painting", text: "Full resprays and painting of individual body panels." },
        { href: "/en/car-body-repair-torrevieja", label: "Car body repair", text: "Repair of dents, scratches and damaged body panels." },
        { href: "/en/bumper-repair-paint-torrevieja", label: "Bumper repair and painting", text: "Repair and refinishing for suitable bumper damage." },
        { href: "/en/insurance-car-repair-torrevieja", label: "Insurance and accident repair", text: "Assessment and body repair after an accident or insurance claim." },
        { href: "/servicios/chapa-y-pintura", label: "Car painting in Torrevieja", text: "Vehicle painting and restoration of damaged paintwork." },
        { href: "/servicios/pintura-coche", label: "Car painting", text: "Painting and refinishing damaged body panels." },
        { href: "/servicios/pintar-coche-completo", label: "Complete car painting", text: "Full vehicle painting and exterior restoration." },
        { href: "/en/alloy-wheel-refurbishment-torrevieja", label: "Alloy wheel refurbishment", text: "Wheel inspection, straightening when suitable, sandblasting and powder coating." },
        { href: "/servicios/pintar-paragolpes", label: "Bumper painting", text: "Scratch repair, plastic repair and bumper painting." },
        { href: "/servicios/reparacion-carroceria", label: "Car body repair", text: "Restoration of damaged vehicle body panels." },
        { href: "/servicios/reparacion-aranazos-coche", label: "Car scratch repair", text: "Damage removal followed by surface preparation and painting." },
        { href: "/servicios/pulido-carroceria", label: "Body polishing", text: "Restoring the shine and appearance of the paintwork." },
        { href: "/servicios/pulido-faros", label: "Headlight polishing", text: "Restoring the clarity of vehicle headlights." },
      ],
      whatsappMessage:
        "Hello PaintLab. I would like a preliminary estimate for car body repair or painting. I can send photos of the vehicle.",
    },
    cities: {
      locale: "en",
      hubKind: "cities",
      title: "Car Body Repair and Painting in South Costa Blanca | PaintLab",
      description:
        "PaintLab is based in Torrevieja and provides car body repair and painting services for customers from Torrevieja and nearby areas of the southern Costa Blanca.",
      h1: "CAR BODY REPAIR AND PAINTING IN SOUTH COSTA BLANCA",
      eyebrow: "SERVICE AREAS",
      lead:
        "PaintLab is based in Torrevieja and provides car body repair and painting services for customers from Torrevieja and nearby areas of the southern Costa Blanca.",
      cta: "Ask about a repair on WhatsApp",
      sections: [
        {
          heading: "CITIES AND SERVICE AREAS",
          paragraphs: [
            "The PaintLab workshop is physically located in Torrevieja. Customers from nearby towns bring their vehicles here for body repair, panel preparation and car painting.",
            "Before visiting, send photos of the damage on WhatsApp for a preliminary assessment and to arrange a convenient inspection time.",
          ],
        },
      ],
      links: [
        { href: "/en", label: "Torrevieja", text: "Car body repair and painting in Torrevieja." },
        { href: "/ciudades/orihuela-costa", label: "Orihuela Costa", text: "Car body repair and painting for customers from Orihuela Costa." },
        { href: "/ciudades/guardamar-del-segura", label: "Guardamar del Segura", text: "Car painting and body repair for customers from Guardamar." },
        { href: "/ciudades/ciudad-quesada", label: "Ciudad Quesada", text: "Car body repair and painting for customers from Ciudad Quesada." },
        { href: "/ciudades/la-mata", label: "La Mata", text: "Car painting and body repair near La Mata." },
        { href: "/en/servicios", label: "PaintLab services", text: "See the available car body repair and painting services." },
      ],
      whatsappMessage:
        "Hello PaintLab. I am near Torrevieja and would like a preliminary repair estimate. I can send photos of the vehicle.",
    },
  },
};

export function isArchitectureHubLocale(value: string): value is ArchitectureHubLocale {
  return architectureHubLocales.some((locale) => locale === value);
}

export function getArchitectureHubPath(locale: ArchitectureHubLocale, kind: ArchitectureHubKind) {
  return hubPaths[kind][locale] ?? hubPaths[kind].es;
}

export function getLocalizedArchitectureHubHref(locale: Locale, href: string) {
  if (!isArchitectureHubLocale(locale) || locale === "es") return href;
  if (href === "/servicios") return getArchitectureHubPath(locale, "services");
  if (href === "/ciudades") return getArchitectureHubPath(locale, "cities");
  return href;
}

export function getArchitectureHubNavItems(locale: ArchitectureHubLocale) {
  const copy = architectureHubUi[locale];
  const items = [
    { href: getArchitectureHubPath(locale, "services"), label: copy.services },
    { href: getArchitectureHubPath(locale, "cities"), label: copy.cities },
  ];

  if (locale === "es") {
    return [...items, { href: "/contacto", label: copy.contact }];
  }

  return [
    ...items,
    { href: getProjectsPath(locale), label: copy.works },
    { href: `/${locale}#faq`, label: copy.faq },
    { href: `/${locale}#booking`, label: copy.contact },
    { href: "/sobre-nosotros", label: copy.about },
  ];
}

export function getArchitectureHubPage(locale: ArchitectureHubLocale, kind: ArchitectureHubKind): ArchitecturePage {
  const alternatePaths = hubPaths[kind];

  if (locale === "es") {
    const original = getArchitecturePage(hubPaths[kind].es);
    if (!original) throw new Error(`Missing Spanish architecture hub: ${kind}`);
    return {
      ...original,
      links: kind === "services" ? [
        ...original.links,
        ...newWheelPages.filter((page) => page.locale === "es").map((page) => ({
          href: getLocalizedServicePath(page), label: page.h1, text: page.description,
        })),
      ] : original.links,
      locale,
      hubKind: kind,
      alternatePaths,
    };
  }

  const page = localizedHubPages[locale][kind];
  const path = hubPaths[kind][locale];
  if (!page || !path) notFound();
  return {
    ...page,
    path,
    alternatePaths,
  };
}
