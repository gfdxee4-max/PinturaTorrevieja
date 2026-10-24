import { locales, type Locale } from "@/config/i18n";
import type { Project } from "@/data/projects";

type Copy = {
  title: string;
  headline: string;
  description: string;
  text: string;
  gallery: string;
  video: string;
  play: string;
};

const copy: Record<Locale, Copy> = {
  ru: {
    title: "Полная покраска автомобиля",
    headline: "Полная покраска BMW 3 Series E46 Cabriolet в Торревьехе",
    description: "Полная покраска BMW 3 Series E46 Cabriolet в мастерской PaintLab в Торревьехе. Реальные фотографии готового автомобиля и видео результата покраски.",
    text: "В мастерской PaintLab выполнена полная покраска BMW 3 Series E46 Cabriolet. После подготовки кузова автомобиль был полностью окрашен. На странице представлены реальные фотографии готового результата и видео автомобиля после покраски.",
    gallery: "Фотографии автомобиля после покраски",
    video: "Видео полной покраски BMW E46 Cabriolet",
    play: "Воспроизвести видео",
  },
  es: {
    title: "Pintura completa del coche",
    headline: "Pintura completa de BMW 3 Series E46 Cabriolet en Torrevieja",
    description: "Pintura completa de un BMW 3 Series E46 Cabriolet en PaintLab, Torrevieja. Fotos reales del coche terminado y vídeo del resultado.",
    text: "En el taller PaintLab hemos realizado la pintura completa de un BMW 3 Series E46 Cabriolet. Tras preparar la carrocería, se pintó el coche por completo. Esta página muestra fotografías reales del resultado y un vídeo del vehículo después de la pintura.",
    gallery: "Fotografías del coche después de la pintura",
    video: "Vídeo de la pintura completa del BMW E46 Cabriolet",
    play: "Reproducir vídeo",
  },
  en: {
    title: "Full car respray",
    headline: "BMW 3 Series E46 Cabriolet full respray in Torrevieja",
    description: "Full respray of a BMW 3 Series E46 Cabriolet at PaintLab in Torrevieja. Real photos of the finished car and a video of the paintwork.",
    text: "PaintLab completed a full respray of this BMW 3 Series E46 Cabriolet. After preparing the bodywork, the entire car was painted. This page shows real photographs of the finished result and a video of the car after painting.",
    gallery: "Photographs of the car after painting",
    video: "BMW E46 Cabriolet full respray video",
    play: "Play video",
  },
  uk: {
    title: "Повне фарбування автомобіля",
    headline: "Повне фарбування BMW 3 Series E46 Cabriolet у Торрев'єсі",
    description: "Повне фарбування BMW 3 Series E46 Cabriolet у майстерні PaintLab у Торрев'єсі. Реальні фотографії готового автомобіля та відео результату фарбування.",
    text: "У майстерні PaintLab виконано повне фарбування BMW 3 Series E46 Cabriolet. Після підготовки кузова автомобіль було повністю пофарбовано. На сторінці представлені реальні фотографії готового результату та відео автомобіля після фарбування.",
    gallery: "Фотографії автомобіля після фарбування",
    video: "Відео повного фарбування BMW E46 Cabriolet",
    play: "Відтворити відео",
  },
  de: {
    title: "Komplettlackierung",
    headline: "BMW 3 Series E46 Cabriolet: Komplettlackierung in Torrevieja",
    description: "Komplettlackierung eines BMW 3 Series E46 Cabriolet bei PaintLab in Torrevieja. Echte Fotos des fertigen Fahrzeugs und ein Video des Ergebnisses.",
    text: "In der Werkstatt PaintLab wurde dieser BMW 3 Series E46 Cabriolet komplett lackiert. Nach der Vorbereitung der Karosserie erfolgte die vollständige Lackierung. Diese Seite zeigt echte Fotos des fertigen Ergebnisses und ein Video des Fahrzeugs nach der Lackierung.",
    gallery: "Fotos des Fahrzeugs nach der Lackierung",
    video: "Video zur Komplettlackierung des BMW E46 Cabriolet",
    play: "Video abspielen",
  },
  fr: {
    title: "Peinture complète du véhicule",
    headline: "Peinture complète d’une BMW 3 Series E46 Cabriolet à Torrevieja",
    description: "Peinture complète d’une BMW 3 Series E46 Cabriolet chez PaintLab à Torrevieja. Photos réelles du véhicule terminé et vidéo du résultat.",
    text: "L’atelier PaintLab a réalisé la peinture complète de cette BMW 3 Series E46 Cabriolet. Après la préparation de la carrosserie, le véhicule a été entièrement peint. Cette page présente des photos réelles du résultat et une vidéo du véhicule après peinture.",
    gallery: "Photos du véhicule après peinture",
    video: "Vidéo de la peinture complète de la BMW E46 Cabriolet",
    play: "Lire la vidéo",
  },
  pl: {
    title: "Lakierowanie całego samochodu",
    headline: "Lakierowanie BMW 3 Series E46 Cabriolet w Torrevieja",
    description: "Lakierowanie całego BMW 3 Series E46 Cabriolet w warsztacie PaintLab w Torrevieja. Prawdziwe zdjęcia gotowego samochodu i film z efektem prac.",
    text: "W warsztacie PaintLab wykonaliśmy lakierowanie całego BMW 3 Series E46 Cabriolet. Po przygotowaniu karoserii samochód został w całości polakierowany. Na stronie znajdują się prawdziwe zdjęcia gotowego efektu oraz film przedstawiający samochód po lakierowaniu.",
    gallery: "Zdjęcia samochodu po lakierowaniu",
    video: "Film z lakierowania całego BMW E46 Cabriolet",
    play: "Odtwórz film",
  },
  nl: {
    title: "Auto volledig overspuiten",
    headline: "BMW 3 Series E46 Cabriolet volledig gespoten in Torrevieja",
    description: "Een BMW 3 Series E46 Cabriolet volledig gespoten bij PaintLab in Torrevieja. Echte foto’s van de afgewerkte auto en een video van het resultaat.",
    text: "Bij PaintLab is deze BMW 3 Series E46 Cabriolet volledig overgespoten. Na de voorbereiding van de carrosserie is de hele auto gespoten. Op deze pagina staan echte foto’s van het resultaat en een video van de auto na het spuiten.",
    gallery: "Foto’s van de auto na het spuiten",
    video: "Video van het volledige spuitwerk van de BMW E46 Cabriolet",
    play: "Video afspelen",
  },
  it: {
    title: "Verniciatura completa dell’auto",
    headline: "Verniciatura completa di BMW 3 Series E46 Cabriolet a Torrevieja",
    description: "Verniciatura completa di una BMW 3 Series E46 Cabriolet presso PaintLab a Torrevieja. Foto reali dell’auto finita e video del risultato.",
    text: "L’officina PaintLab ha eseguito la verniciatura completa di questa BMW 3 Series E46 Cabriolet. Dopo la preparazione della carrozzeria, l’auto è stata interamente verniciata. La pagina presenta fotografie reali del risultato e un video dell’auto dopo la verniciatura.",
    gallery: "Fotografie dell’auto dopo la verniciatura",
    video: "Video della verniciatura completa della BMW E46 Cabriolet",
    play: "Riproduci video",
  },
  nb: {
    title: "Hellakkering av bil",
    headline: "Hellakkering av BMW 3 Series E46 Cabriolet i Torrevieja",
    description: "Hellakkering av en BMW 3 Series E46 Cabriolet hos PaintLab i Torrevieja. Ekte bilder av den ferdige bilen og video av resultatet.",
    text: "PaintLab har hellakkert denne BMW 3 Series E46 Cabriolet. Etter klargjøring av karosseriet ble hele bilen lakkert. Her vises ekte bilder av det ferdige resultatet og en video av bilen etter lakkering.",
    gallery: "Bilder av bilen etter lakkering",
    video: "Video av hellakkeringen av BMW E46 Cabriolet",
    play: "Spill av video",
  },
  fi: {
    title: "Auton kokomaalaus",
    headline: "BMW 3 Series E46 Cabrioletin kokomaalaus Torreviejassa",
    description: "BMW 3 Series E46 Cabrioletin kokomaalaus PaintLab-korjaamolla Torreviejassa. Aidot kuvat valmiista autosta ja video lopputuloksesta.",
    text: "PaintLab-korjaamolla tehtiin tämän BMW 3 Series E46 Cabrioletin kokomaalaus. Korin valmistelun jälkeen koko auto maalattiin. Tällä sivulla on aitoja kuvia valmiista lopputuloksesta sekä video autosta maalauksen jälkeen.",
    gallery: "Kuvia autosta maalauksen jälkeen",
    video: "Video BMW E46 Cabrioletin kokomaalauksesta",
    play: "Toista video",
  },
  da: {
    title: "Hellakering af bil",
    headline: "Hellakering af BMW 3 Series E46 Cabriolet i Torrevieja",
    description: "Hellakering af en BMW 3 Series E46 Cabriolet hos PaintLab i Torrevieja. Ægte billeder af den færdige bil og video af resultatet.",
    text: "PaintLab har udført en hellakering af denne BMW 3 Series E46 Cabriolet. Efter klargøring af karrosseriet blev hele bilen lakeret. Siden viser ægte billeder af det færdige resultat og en video af bilen efter lakeringen.",
    gallery: "Billeder af bilen efter lakering",
    video: "Video af hellakeringen af BMW E46 Cabriolet",
    play: "Afspil video",
  },
  sv: {
    title: "Hellackering av bil",
    headline: "Hellackering av BMW 3 Series E46 Cabriolet i Torrevieja",
    description: "Hellackering av en BMW 3 Series E46 Cabriolet hos PaintLab i Torrevieja. Äkta bilder av den färdiga bilen och en video av resultatet.",
    text: "PaintLab har hellackerat denna BMW 3 Series E46 Cabriolet. Efter förberedelse av karossen lackerades hela bilen. Sidan visar äkta fotografier av det färdiga resultatet och en video av bilen efter lackeringen.",
    gallery: "Bilder av bilen efter lackering",
    video: "Video av hellackeringen av BMW E46 Cabriolet",
    play: "Spela upp video",
  },
  sk: {
    title: "Celkové lakovanie vozidla",
    headline: "Celkové lakovanie BMW 3 Series E46 Cabriolet v Torrevieji",
    description: "Celkové lakovanie BMW 3 Series E46 Cabriolet v dielni PaintLab v Torrevieji. Skutočné fotografie hotového vozidla a video výsledku.",
    text: "V dielni PaintLab sme vykonali celkové lakovanie tohto BMW 3 Series E46 Cabriolet. Po príprave karosérie bolo vozidlo kompletne nalakované. Na stránke nájdete skutočné fotografie výsledku a video vozidla po lakovaní.",
    gallery: "Fotografie vozidla po lakovaní",
    video: "Video celkového lakovania BMW E46 Cabriolet",
    play: "Prehrať video",
  },
  hu: {
    title: "Teljes autófényezés",
    headline: "BMW 3 Series E46 Cabriolet teljes fényezése Torreviejában",
    description: "BMW 3 Series E46 Cabriolet teljes fényezése a torreviejai PaintLab műhelyben. Valódi fényképek az elkészült autóról és videó az eredményről.",
    text: "A PaintLab műhelyében teljes fényezést végeztünk ezen a BMW 3 Series E46 Cabrioleten. A karosszéria előkészítése után az egész autót lefényeztük. Az oldalon valódi fényképek és egy videó mutatják be az autót a fényezés után.",
    gallery: "Fényképek az autóról a fényezés után",
    video: "Videó a BMW E46 Cabriolet teljes fényezéséről",
    play: "Videó lejátszása",
  },
  bg: {
    title: "Цялостно боядисване на автомобил",
    headline: "Цялостно боядисване на BMW 3 Series E46 Cabriolet в Торевиеха",
    description: "Цялостно боядисване на BMW 3 Series E46 Cabriolet в сервиз PaintLab в Торевиеха. Реални снимки на готовия автомобил и видео на резултата.",
    text: "В сервиз PaintLab извършихме цялостно боядисване на този BMW 3 Series E46 Cabriolet. След подготовката на каросерията автомобилът беше изцяло боядисан. На страницата са представени реални снимки на готовия резултат и видео на автомобила след боядисването.",
    gallery: "Снимки на автомобила след боядисването",
    video: "Видео на цялостното боядисване на BMW E46 Cabriolet",
    play: "Пусни видеото",
  },
  pt: {
    title: "Pintura completa do automóvel",
    headline: "Pintura completa de BMW 3 Series E46 Cabriolet em Torrevieja",
    description: "Pintura completa de um BMW 3 Series E46 Cabriolet na PaintLab, em Torrevieja. Fotografias reais do automóvel acabado e vídeo do resultado.",
    text: "Na oficina PaintLab realizámos a pintura completa deste BMW 3 Series E46 Cabriolet. Após a preparação da carroçaria, o automóvel foi totalmente pintado. Esta página apresenta fotografias reais do resultado e um vídeo do automóvel após a pintura.",
    gallery: "Fotografias do automóvel após a pintura",
    video: "Vídeo da pintura completa do BMW E46 Cabriolet",
    play: "Reproduzir vídeo",
  },
  el: {
    title: "Ολική βαφή αυτοκινήτου",
    headline: "Ολική βαφή BMW 3 Series E46 Cabriolet στην Τορεβιέχα",
    description: "Ολική βαφή BMW 3 Series E46 Cabriolet στο συνεργείο PaintLab στην Τορεβιέχα. Πραγματικές φωτογραφίες του ολοκληρωμένου αυτοκινήτου και βίντεο του αποτελέσματος.",
    text: "Στο συνεργείο PaintLab πραγματοποιήθηκε ολική βαφή αυτού του BMW 3 Series E46 Cabriolet. Μετά την προετοιμασία του αμαξώματος, το αυτοκίνητο βάφτηκε ολόκληρο. Η σελίδα παρουσιάζει πραγματικές φωτογραφίες του αποτελέσματος και βίντεο του αυτοκινήτου μετά τη βαφή.",
    gallery: "Φωτογραφίες του αυτοκινήτου μετά τη βαφή",
    video: "Βίντεο της ολικής βαφής του BMW E46 Cabriolet",
    play: "Αναπαραγωγή βίντεο",
  },
  cs: {
    title: "Celkové lakování vozu",
    headline: "Celkové lakování BMW 3 Series E46 Cabriolet v Torrevieje",
    description: "Celkové lakování BMW 3 Series E46 Cabriolet v dílně PaintLab v Torrevieje. Skutečné fotografie hotového vozu a video výsledku.",
    text: "V dílně PaintLab jsme provedli celkové lakování tohoto BMW 3 Series E46 Cabriolet. Po přípravě karoserie byl celý vůz nalakován. Na stránce jsou skutečné fotografie hotového výsledku a video vozu po lakování.",
    gallery: "Fotografie vozu po lakování",
    video: "Video celkového lakování BMW E46 Cabriolet",
    play: "Přehrát video",
  },
};

function localized<T>(select: (value: Copy, locale: Locale) => T): Record<Locale, T> {
  return Object.fromEntries(locales.map((locale) => [locale, select(copy[locale], locale)])) as Record<Locale, T>;
}

const gallery = [1, 2, 3, 4, 5].map((number) => ({
  src: `/images/projects/bmw-e46-cabriolet/after-${number}.webp`,
  width: 1086,
  height: 1448,
  alt: localized((value) => `BMW 3 Series E46 Cabriolet — ${value.gallery} (${number}/5)`),
}));

export const bmwE46Project: Project = {
  mediaKind: "gallery",
  slug: "polnaya-pokraska-bmw-e46-cabriolet-torrevieja",
  vehicle: "BMW 3 Series E46 Cabriolet",
  title: localized((value) => value.title),
  headline: localized((value) => value.headline),
  category: localized((value) => value.title),
  shortDescription: localized((value) => value.description),
  fullDescription: localized((value) => [value.text]),
  services: localized((value) => [value.title]),
  // Publication date of this project page, not the repair or YouTube upload date.
  publishedAt: "2026-10-18T00:00:00+02:00",
  afterImage: gallery[1].src,
  afterImageWidth: gallery[1].width,
  afterImageHeight: gallery[1].height,
  altAfter: gallery[1].alt,
  imageQuality: 95,
  gallery,
  galleryTitle: localized((value) => value.gallery),
  video: {
    id: "8rHqJ2_6els",
    uploadDate: "2026-10-08T01:00:20-07:00",
    title: localized((value) => value.video),
    playLabel: localized((value) => value.play),
  },
  seoTitle: localized((value, locale) => locale === "ru"
    ? "Полная покраска BMW E46 Cabriolet в Торревьехе | PaintLab"
    : `${value.headline} | PaintLab`),
  seoDescription: localized((value) => value.description),
  location: "PaintLab, Torrevieja",
  relatedServicesTitle: { en: "Related service", ru: "Услуги мастерской" },
  relatedLinks: {
    en: [{ href: "/en/car-respray-torrevieja", label: "Car respray in Torrevieja" }],
    ru: [{ href: "/ru/avtopokraska-torrevieja", label: "автопокраска в Торревьехе" }],
  },
};
