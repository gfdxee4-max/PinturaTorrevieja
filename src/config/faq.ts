import type { Locale } from "@/config/i18n";
import { additionalFaqItems } from "@/config/additional-faq";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: Record<Locale, readonly FaqItem[]> = {
  es: [
    {
      question: "¿Cómo puedo recibir una estimación previa?",
      answer: "Envíanos fotos del vehículo por WhatsApp y te daremos una orientación inicial sobre la reparación.",
    },
    {
      question: "¿Buscas un chapista en Torrevieja?",
      answer: "En PaintLab realizamos pintura de coche, reparación de chapa y reparación de carrocería en nuestro taller de chapa y pintura en Torrevieja, Alicante.",
    },
    {
      question: "¿Trabajáis con vehículos en Torrevieja?",
      answer: "Sí, atendemos solicitudes de pintura y carrocería para vehículos en Torrevieja.",
    },
  ],
  en: [
    {
      question: "How can I get a preliminary estimate?",
      answer: "Send us photos of the vehicle on WhatsApp and we will give you initial guidance on the repair.",
    },
    {
      question: "What services does PINTURA TORREVIEJA provide?",
      answer: "We provide vehicle painting, surface preparation and repair of bodywork damage.",
    },
    {
      question: "Do you work with vehicles in Torrevieja?",
      answer: "Yes, we handle vehicle paint and bodywork requests in Torrevieja.",
    },
  ],
  ru: [
    {
      question: "Как получить предварительную оценку?",
      answer: "Отправьте фотографии автомобиля в WhatsApp, и мы дадим первичный ориентир по ремонту.",
    },
    {
      question: "Какие услуги выполняет PINTURA TORREVIEJA?",
      answer: "Мы выполняем покраску автомобилей, подготовку поверхности и ремонт повреждений кузова.",
    },
    {
      question: "Вы работаете с автомобилями в Торревьехе?",
      answer: "Да, мы принимаем запросы на покраску и кузовной ремонт автомобилей в Торревьехе.",
    },
  ],
  uk: [
    {
      question: "Як отримати попередню оцінку?",
      answer: "Надішліть фотографії автомобіля в WhatsApp, і ми дамо первинний орієнтир щодо ремонту.",
    },
    {
      question: "Які послуги виконує PINTURA TORREVIEJA?",
      answer: "Ми виконуємо фарбування автомобілів, підготовку поверхні та ремонт пошкоджень кузова.",
    },
    {
      question: "Ви працюєте з автомобілями в Торрев'єсі?",
      answer: "Так, ми приймаємо запити на фарбування та кузовний ремонт автомобілів у Торрев'єсі.",
    },
  ],
  de: [
    {
      question: "Wie bekomme ich eine erste Einschätzung?",
      answer: "Senden Sie uns Fahrzeugfotos per WhatsApp, und wir geben Ihnen eine erste Orientierung zur Reparatur.",
    },
    {
      question: "Welche Leistungen bietet PINTURA TORREVIEJA an?",
      answer: "Wir bieten Fahrzeuglackierung, Oberflächenvorbereitung und Reparatur von Karosserieschäden an.",
    },
    {
      question: "Arbeiten Sie mit Fahrzeugen in Torrevieja?",
      answer: "Ja, wir bearbeiten Anfragen für Fahrzeuglackierung und Karosseriearbeiten in Torrevieja.",
    },
  ],
  fr: [
    {
      question: "Comment obtenir une estimation préalable ?",
      answer: "Envoyez-nous des photos du véhicule sur WhatsApp et nous vous donnerons une première orientation pour la réparation.",
    },
    {
      question: "Quels services propose PINTURA TORREVIEJA ?",
      answer: "Nous proposons la peinture automobile, la préparation des surfaces et la réparation des dommages de carrosserie.",
    },
    {
      question: "Travaillez-vous avec des véhicules à Torrevieja ?",
      answer: "Oui, nous traitons les demandes de peinture et carrosserie automobile à Torrevieja.",
    },
  ],
  pl: [
    {
      question: "Jak uzyskać wstępną ocenę?",
      answer: "Wyślij zdjęcia samochodu przez WhatsApp, a my podamy pierwszy orientacyjny zakres naprawy.",
    },
    {
      question: "Jakie usługi wykonuje PINTURA TORREVIEJA?",
      answer: "Wykonujemy lakierowanie pojazdów, przygotowanie powierzchni i naprawę uszkodzeń karoserii.",
    },
    {
      question: "Czy obsługujecie samochody w Torrevieja?",
      answer: "Tak, przyjmujemy zapytania dotyczące lakierowania i naprawy karoserii pojazdów w Torrevieja.",
    },
  ],
  nl: [
    {
      question: "Hoe krijg ik een voorlopige schatting?",
      answer: "Stuur foto's van het voertuig via WhatsApp en wij geven een eerste indicatie voor de reparatie.",
    },
    {
      question: "Welke diensten biedt PINTURA TORREVIEJA?",
      answer: "Wij verzorgen autospuitwerk, oppervlaktevoorbereiding en herstel van carrosserieschade.",
    },
    {
      question: "Werken jullie met voertuigen in Torrevieja?",
      answer: "Ja, wij behandelen aanvragen voor autospuitwerk en carrosserieherstel in Torrevieja.",
    },
  ],
  it: [
    {
      question: "Come posso ricevere una valutazione preliminare?",
      answer: "Inviaci le foto del veicolo su WhatsApp e ti daremo un primo orientamento sulla riparazione.",
    },
    {
      question: "Quali servizi offre PINTURA TORREVIEJA?",
      answer: "Offriamo verniciatura auto, preparazione delle superfici e riparazione dei danni alla carrozzeria.",
    },
    {
      question: "Lavorate con veicoli a Torrevieja?",
      answer: "Sì, gestiamo richieste di verniciatura e carrozzeria per veicoli a Torrevieja.",
    },
  ],
  ...additionalFaqItems,
};

export function getFaqItems(locale: Locale) {
  return faqItems[locale];
}
