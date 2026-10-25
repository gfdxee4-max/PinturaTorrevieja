import { newInsuranceContent } from "@/config/insurance-locales";
import { getLocalizedServicePath, localizedServicePages } from "@/config/localized-service-pages";

const existingTerms = {
  en: ["insurance car repair Torrevieja", "insurance claim repair", "accident body repair", "collision repair", "parking damage", "front impact damage", "rear impact damage", "side impact damage", "damaged door", "scuffed bumper", "damaged wing", "multiple damaged panels", "damage assessment", "repair estimate for insurer", "insurance claim", "insurance company", "insurance assessor", "perito in Spain", "repair after inspection", "paint repair after accident"],
  ru: ["ремонт по страховке в Торревьехе", "ремонт страхового автомобиля", "кузовной ремонт после ДТП", "ремонт после столкновения", "парковочные повреждения", "удар спереди", "удар сзади", "боковой удар", "повреждённая дверь", "потёртый бампер", "повреждённое крыло", "ремонт нескольких деталей", "оценка повреждений", "расчёт ремонта для страховой", "страховой случай", "страховая компания", "страховой эксперт", "perito в Испании", "ремонт после осмотра", "покраска после ДТП"],
  uk: ["ремонт за страховкою в Торрев'єсі", "ремонт страхового авто", "кузовний ремонт після ДТП", "ремонт після зіткнення", "паркувальні пошкодження", "удар спереду", "удар ззаду", "боковий удар", "пошкоджені двері", "потертий бампер", "пошкоджене крило", "ремонт кількох деталей", "оцінка пошкоджень", "кошторис для страхової", "страховий випадок", "страхова компанія", "страховий експерт", "perito в Іспанії", "ремонт після огляду", "фарбування після ДТП"],
  de: ["Unfallreparatur Torrevieja", "Reparatur Versicherungsschaden", "Karosserie nach Unfall", "Kollisionsschaden reparieren", "Parkschaden", "Frontschaden", "Heckschaden", "Seitenschaden", "beschädigte Tür", "zerkratzter Stoßfänger", "beschädigter Kotflügel", "mehrere Karosserieteile", "Schadensbewertung", "Kostenvoranschlag Versicherung", "Schadenmeldung", "Versicherungsgesellschaft", "Kfz-Gutachter", "perito Spanien", "Reparatur nach Begutachtung", "Lackierung nach Unfall"],
  pl: ["naprawa powypadkowa Torrevieja", "naprawa z ubezpieczenia", "naprawa karoserii po wypadku", "naprawa po kolizji", "szkoda parkingowa", "uderzenie z przodu", "uderzenie z tyłu", "uderzenie z boku", "uszkodzone drzwi", "otarcie zderzaka", "uszkodzony błotnik", "kilka uszkodzonych elementów", "ocena szkody", "kosztorys dla ubezpieczyciela", "zgłoszenie szkody", "firma ubezpieczeniowa", "rzeczoznawca samochodowy", "perito w Hiszpanii", "naprawa po oględzinach", "lakierowanie po wypadku"],
} as const;

const existingFaqIntents = {
  en: ["Can a bonnet damaged in a collision be repaired?", "Can several panels be assessed together?", "Who confirms the repair scope?", "Can repair avoid replacing a panel?"],
  ru: ["Можно ли отремонтировать капот после ДТП?", "Можно ли оценить несколько повреждённых деталей?", "Кто подтверждает объём ремонта?", "Можно ли восстановить деталь без замены?"],
  uk: ["Чи можна відновити капот після ДТП?", "Чи оцінюєте кілька пошкоджених деталей?", "Хто підтверджує обсяг ремонту?", "Чи можна відремонтувати деталь без заміни?"],
  de: ["Kann eine Motorhaube nach einem Unfall repariert werden?", "Können mehrere Teile gemeinsam geprüft werden?", "Wer bestätigt den Reparaturumfang?", "Ist Reparatur ohne Austausch möglich?"],
  pl: ["Czy można naprawić maskę po kolizji?", "Czy oceniacie kilka uszkodzonych elementów?", "Kto potwierdza zakres naprawy?", "Czy można naprawić element bez wymiany?"],
} as const;

// Editorial query candidates, not measured Google volumes or a visible keyword block.
export const insuranceSemanticMatrix = localizedServicePages.filter((page) => page.key === "insurance").map((page) => {
  const content = newInsuranceContent.find((item) => item.locale === page.locale);
  const oldLocale = page.locale as keyof typeof existingTerms;
  const terms = content?.terms ?? existingTerms[oldLocale];
  const questions = [...page.faq.map((item) => item.question), ...(content ? [] : existingFaqIntents[oldLocale])];
  return {
    locale: page.locale, url: getLocalizedServicePath(page), primary: terms[0],
    secondary: terms,
    problemBased: [terms[4], terms[8], terms[9], terms[10], terms[11]],
    accidentTypes: terms.slice(4, 8), insuranceProcess: [terms[1], terms[13], terms[14], terms[15], terms[18]],
    bodyParts: terms.slice(8, 12), documentationAndAssessor: [terms[14], terms[16], terms[17]],
    localQueries: [terms[0], page.h1], longTail: questions.slice(0, 15),
  };
});
