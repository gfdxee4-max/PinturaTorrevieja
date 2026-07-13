import type { Locale } from "@/config/i18n";
import { additionalReviewTranslations } from "@/config/additional-review-i18n";

export type ReviewCopy = {
  title: string;
  intro: string;
  showAll: string;
  showLess: string;
  empty: string;
  formTitle: string;
  formIntro: string;
  name: string;
  rating: string;
  service: string;
  optional: string;
  review: string;
  consent: string;
  privacy: string;
  submit: string;
  sending: string;
  moderation: string;
  success: string;
  trustTitle: string;
  trustItems: readonly [string, string, string];
  errors: Record<"invalid" | "html" | "rate" | "storage" | "server", string>;
};

export const reviewTranslations: Record<Locale, ReviewCopy> = {
  es: {
    title: "Opiniones de clientes", intro: "Opiniones reales sobre nuestro trabajo y la calidad de los servicios", showAll: "Ver todas las opiniones", showLess: "Mostrar menos", empty: "Las opiniones verificadas aparecerán aquí después de su aprobación.",
    formTitle: "Dejar una opinión", formIntro: "Tu opinión es importante. Comparte tu experiencia para ayudar a otros clientes a tomar una decisión.", name: "Tu nombre", rating: "Valoración", service: "Servicio / Vehículo", optional: "opcional", review: "Tu opinión", consent: "Acepto la", privacy: "política de privacidad", submit: "Enviar opinión", sending: "Enviando...", moderation: "Tu opinión se envía a moderación y se publicará después de su revisión.", success: "¡Gracias! Tu opinión se ha enviado a moderación.", trustTitle: "Por qué confían en nosotros", trustItems: ["Materiales profesionales", "Atención a los detalles", "Enfoque profesional"],
    errors: { invalid: "Revisa los campos obligatorios.", html: "No se permite HTML ni código.", rate: "Has enviado demasiadas opiniones. Inténtalo más tarde.", storage: "El servicio no está disponible temporalmente.", server: "No se pudo enviar la opinión. Inténtalo de nuevo." },
  },
  en: {
    title: "Customer reviews", intro: "Genuine feedback about our work and service quality", showAll: "View all reviews", showLess: "Show less", empty: "Verified reviews will appear here after approval.",
    formTitle: "Leave a review", formIntro: "Your opinion matters. Share your experience to help other customers make an informed choice.", name: "Your name", rating: "Rating", service: "Service / Vehicle", optional: "optional", review: "Your review", consent: "I agree to the", privacy: "privacy policy", submit: "Submit review", sending: "Sending...", moderation: "Your review is sent for moderation and will be published after verification.", success: "Thank you! Your review has been sent for moderation.", trustTitle: "Why customers trust us", trustItems: ["Professional materials", "Attention to detail", "Professional approach"],
    errors: { invalid: "Please check the required fields.", html: "HTML and code are not allowed.", rate: "Too many reviews were submitted. Please try later.", storage: "The review service is temporarily unavailable.", server: "The review could not be sent. Please try again." },
  },
  ru: {
    title: "Отзывы клиентов", intro: "Реальные отзывы о нашей работе и качестве услуг", showAll: "Посмотреть все отзывы", showLess: "Свернуть отзывы", empty: "Проверенные отзывы появятся здесь после одобрения.",
    formTitle: "Оставить отзыв", formIntro: "Ваше мнение важно для нас. Оставьте отзыв о нашей работе — это поможет другим клиентам сделать правильный выбор.", name: "Ваше имя", rating: "Оценка", service: "Услуга / Автомобиль", optional: "необязательно", review: "Ваш отзыв", consent: "Я согласен с", privacy: "политикой конфиденциальности", submit: "Отправить отзыв", sending: "Отправка...", moderation: "Ваш отзыв отправляется на модерацию и будет опубликован после проверки.", success: "Спасибо! Ваш отзыв отправлен на модерацию и появится на сайте после проверки", trustTitle: "Почему нам доверяют", trustItems: ["Профессиональные материалы", "Внимание к деталям", "Профессиональный подход"],
    errors: { invalid: "Проверьте обязательные поля.", html: "HTML и программный код запрещены.", rate: "Слишком много попыток. Попробуйте позже.", storage: "Сервис отзывов временно недоступен.", server: "Не удалось отправить отзыв. Попробуйте ещё раз." },
  },
  uk: {
    title: "Відгуки клієнтів", intro: "Реальні відгуки про нашу роботу та якість послуг", showAll: "Переглянути всі відгуки", showLess: "Згорнути відгуки", empty: "Перевірені відгуки з’являться тут після схвалення.",
    formTitle: "Залишити відгук", formIntro: "Ваша думка важлива для нас. Поділіться досвідом, щоб допомогти іншим клієнтам зробити вибір.", name: "Ваше ім’я", rating: "Оцінка", service: "Послуга / Автомобіль", optional: "необов’язково", review: "Ваш відгук", consent: "Я погоджуюся з", privacy: "політикою конфіденційності", submit: "Надіслати відгук", sending: "Надсилання...", moderation: "Ваш відгук надсилається на модерацію та буде опублікований після перевірки.", success: "Дякуємо! Ваш відгук надіслано на модерацію.", trustTitle: "Чому нам довіряють", trustItems: ["Професійні матеріали", "Увага до деталей", "Професійний підхід"],
    errors: { invalid: "Перевірте обов’язкові поля.", html: "HTML і програмний код заборонені.", rate: "Забагато спроб. Спробуйте пізніше.", storage: "Сервіс відгуків тимчасово недоступний.", server: "Не вдалося надіслати відгук. Спробуйте ще раз." },
  },
  de: {
    title: "Kundenbewertungen", intro: "Echte Bewertungen zu unserer Arbeit und Servicequalität", showAll: "Alle Bewertungen ansehen", showLess: "Weniger anzeigen", empty: "Geprüfte Bewertungen erscheinen hier nach der Freigabe.",
    formTitle: "Bewertung abgeben", formIntro: "Ihre Meinung ist uns wichtig. Teilen Sie Ihre Erfahrung und helfen Sie anderen Kunden bei ihrer Entscheidung.", name: "Ihr Name", rating: "Bewertung", service: "Service / Fahrzeug", optional: "optional", review: "Ihre Bewertung", consent: "Ich stimme der", privacy: "Datenschutzerklärung zu", submit: "Bewertung senden", sending: "Wird gesendet...", moderation: "Ihre Bewertung wird moderiert und nach der Prüfung veröffentlicht.", success: "Vielen Dank! Ihre Bewertung wurde zur Moderation gesendet.", trustTitle: "Warum Kunden uns vertrauen", trustItems: ["Professionelle Materialien", "Liebe zum Detail", "Professioneller Ansatz"],
    errors: { invalid: "Bitte prüfen Sie die Pflichtfelder.", html: "HTML und Code sind nicht erlaubt.", rate: "Zu viele Bewertungen. Bitte versuchen Sie es später.", storage: "Der Bewertungsdienst ist vorübergehend nicht verfügbar.", server: "Die Bewertung konnte nicht gesendet werden." },
  },
  fr: {
    title: "Avis clients", intro: "Des avis authentiques sur notre travail et la qualité de nos services", showAll: "Voir tous les avis", showLess: "Afficher moins", empty: "Les avis vérifiés apparaîtront ici après validation.",
    formTitle: "Laisser un avis", formIntro: "Votre avis compte. Partagez votre expérience pour aider les autres clients à faire leur choix.", name: "Votre nom", rating: "Note", service: "Service / Véhicule", optional: "facultatif", review: "Votre avis", consent: "J’accepte la", privacy: "politique de confidentialité", submit: "Envoyer l’avis", sending: "Envoi...", moderation: "Votre avis est envoyé en modération et sera publié après vérification.", success: "Merci ! Votre avis a été envoyé en modération.", trustTitle: "Pourquoi nous faire confiance", trustItems: ["Matériaux professionnels", "Attention aux détails", "Approche professionnelle"],
    errors: { invalid: "Vérifiez les champs obligatoires.", html: "Le HTML et le code sont interdits.", rate: "Trop de tentatives. Réessayez plus tard.", storage: "Le service d’avis est temporairement indisponible.", server: "Impossible d’envoyer l’avis. Réessayez." },
  },
  pl: {
    title: "Opinie klientów", intro: "Prawdziwe opinie o naszej pracy i jakości usług", showAll: "Zobacz wszystkie opinie", showLess: "Pokaż mniej", empty: "Zweryfikowane opinie pojawią się tutaj po zatwierdzeniu.",
    formTitle: "Dodaj opinię", formIntro: "Twoja opinia jest dla nas ważna. Podziel się doświadczeniem i pomóż innym klientom dokonać wyboru.", name: "Twoje imię", rating: "Ocena", service: "Usługa / Samochód", optional: "opcjonalnie", review: "Twoja opinia", consent: "Akceptuję", privacy: "politykę prywatności", submit: "Wyślij opinię", sending: "Wysyłanie...", moderation: "Twoja opinia trafi do moderacji i zostanie opublikowana po sprawdzeniu.", success: "Dziękujemy! Twoja opinia została wysłana do moderacji.", trustTitle: "Dlaczego klienci nam ufają", trustItems: ["Profesjonalne materiały", "Dbałość o szczegóły", "Profesjonalne podejście"],
    errors: { invalid: "Sprawdź wymagane pola.", html: "Kod HTML i skrypty są zabronione.", rate: "Zbyt wiele prób. Spróbuj później.", storage: "Serwis opinii jest chwilowo niedostępny.", server: "Nie udało się wysłać opinii." },
  },
  nl: {
    title: "Klantbeoordelingen", intro: "Echte beoordelingen over ons werk en onze servicekwaliteit", showAll: "Alle beoordelingen bekijken", showLess: "Minder tonen", empty: "Geverifieerde beoordelingen verschijnen hier na goedkeuring.",
    formTitle: "Beoordeling plaatsen", formIntro: "Uw mening is belangrijk. Deel uw ervaring en help andere klanten een keuze te maken.", name: "Uw naam", rating: "Beoordeling", service: "Dienst / Auto", optional: "optioneel", review: "Uw beoordeling", consent: "Ik ga akkoord met het", privacy: "privacybeleid", submit: "Beoordeling versturen", sending: "Versturen...", moderation: "Uw beoordeling wordt gemodereerd en na controle gepubliceerd.", success: "Bedankt! Uw beoordeling is ter moderatie verzonden.", trustTitle: "Waarom klanten ons vertrouwen", trustItems: ["Professionele materialen", "Aandacht voor detail", "Professionele aanpak"],
    errors: { invalid: "Controleer de verplichte velden.", html: "HTML en code zijn niet toegestaan.", rate: "Te veel pogingen. Probeer het later opnieuw.", storage: "De beoordelingsservice is tijdelijk niet beschikbaar.", server: "De beoordeling kon niet worden verzonden." },
  },
  it: {
    title: "Recensioni dei clienti", intro: "Recensioni autentiche sul nostro lavoro e sulla qualità dei servizi", showAll: "Vedi tutte le recensioni", showLess: "Mostra meno", empty: "Le recensioni verificate appariranno qui dopo l’approvazione.",
    formTitle: "Lascia una recensione", formIntro: "La tua opinione è importante. Condividi l’esperienza per aiutare altri clienti a scegliere.", name: "Il tuo nome", rating: "Valutazione", service: "Servizio / Auto", optional: "facoltativo", review: "La tua recensione", consent: "Accetto la", privacy: "politica sulla privacy", submit: "Invia recensione", sending: "Invio...", moderation: "La recensione viene moderata e sarà pubblicata dopo la verifica.", success: "Grazie! La recensione è stata inviata alla moderazione.", trustTitle: "Perché i clienti si fidano", trustItems: ["Materiali professionali", "Attenzione ai dettagli", "Approccio professionale"],
    errors: { invalid: "Controlla i campi obbligatori.", html: "HTML e codice non sono consentiti.", rate: "Troppi tentativi. Riprova più tardi.", storage: "Il servizio recensioni non è disponibile.", server: "Impossibile inviare la recensione." },
  },
  ...additionalReviewTranslations,
};
