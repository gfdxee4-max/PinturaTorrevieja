import type { Locale } from "@/config/i18n";

type MultibrandCopy = {
  heading: string;
  intro: string;
  groups: readonly [string, string, string];
  proof: string;
};

export const multibrandCopy: Record<Locale, MultibrandCopy> = {
  es: {
    heading: "Carrocería y pintura para distintas marcas",
    intro: "En nuestro taller de Torrevieja valoramos daños de carrocería, incluidos los de un accidente, en vehículos de las marcas indicadas. Desde reparar y pintar una puerta, aleta, capó o paragolpes hasta recuperar la pintura de todo el coche, el alcance se acuerda según el estado del vehículo.",
    groups: ["Chapa y pintura", "También trabajamos con", "Otras marcas"],
    proof: "Trabajos reales de estas marcas",
  },
  en: {
    heading: "Body repair and painting across different makes",
    intro: "At our Torrevieja workshop we assess body damage, including accident damage, on vehicles from the makes listed below. From repairing and painting a door, wing, bonnet or bumper to a full exterior repaint, the scope is agreed according to the condition of the car.",
    groups: ["Bodywork and painting", "We also work on", "Other makes"],
    proof: "Real projects featuring these makes",
  },
  ru: {
    heading: "Кузовной ремонт и покраска автомобилей разных марок",
    intro: "В мастерской в Торревьехе оцениваем кузовные повреждения, в том числе после ДТП, у автомобилей перечисленных марок. От ремонта и покраски двери, крыла, капота или бампера до восстановления покрытия всего автомобиля: объём согласовываем по его фактическому состоянию.",
    groups: ["Кузовные и малярные работы", "Также работаем с марками", "Другие марки"],
    proof: "Реальные работы с автомобилями этих марок",
  },
  uk: {
    heading: "Кузовний ремонт і фарбування автомобілів різних марок",
    intro: "У майстерні в Торрев’єсі оцінюємо пошкодження кузова, зокрема після ДТП, в автомобілів перелічених марок. Від ремонту й фарбування дверей, крила, капота чи бампера до відновлення покриття всього автомобіля: обсяг погоджуємо за його фактичним станом.",
    groups: ["Кузовні та малярні роботи", "Також працюємо з марками", "Інші марки"],
    proof: "Реальні роботи з автомобілями цих марок",
  },
  de: {
    heading: "Karosserie und Lack für verschiedene Marken",
    intro: "In unserer Werkstatt in Torrevieja beurteilen wir Karosserieschäden, auch nach einem Unfall, an Fahrzeugen der aufgeführten Marken. Von der Instandsetzung und Lackierung einer Tür, eines Kotflügels, einer Motorhaube oder eines Stoßfängers bis zur kompletten Außenlackierung wird der Umfang nach dem Fahrzeugzustand vereinbart.",
    groups: ["Karosserie- und Lackierarbeiten", "Weitere Marken in unserer Werkstatt", "Andere Marken"],
    proof: "Echte Arbeiten an Fahrzeugen dieser Marken",
  },
  fr: {
    heading: "Carrosserie et peinture pour différentes marques",
    intro: "Dans notre atelier de Torrevieja, nous évaluons les dommages de carrosserie, notamment après un accident, sur les véhicules des marques indiquées. De la réparation et peinture d’une porte, d’une aile, d’un capot ou d’un pare-chocs à une remise en peinture complète de l’extérieur, les travaux sont convenus selon l’état du véhicule.",
    groups: ["Travaux de carrosserie et de peinture", "Nous travaillons aussi sur", "Autres marques"],
    proof: "Travaux réels sur ces marques",
  },
  pl: {
    heading: "Naprawy blacharskie i lakierowanie różnych marek",
    intro: "W naszym warsztacie w Torrevieja oceniamy uszkodzenia karoserii, również po wypadku, w samochodach wymienionych marek. Od naprawy i lakierowania drzwi, błotnika, maski lub zderzaka po lakierowanie całego nadwozia: zakres uzgadniamy na podstawie stanu auta.",
    groups: ["Prace blacharsko-lakiernicze", "Pracujemy również z markami", "Pozostałe marki"],
    proof: "Rzeczywiste realizacje dla tych marek",
  },
  nl: {
    heading: "Carrosserieherstel en spuitwerk voor verschillende merken",
    intro: "In onze werkplaats in Torrevieja beoordelen we carrosserieschade, ook na een ongeval, aan auto's van de genoemde merken. Van herstel en spuitwerk aan een portier, spatbord, motorkap of bumper tot het overspuiten van de hele carrosserie: de werkzaamheden worden afgestemd op de staat van de auto.",
    groups: ["Carrosserieherstel en spuitwerk", "We werken ook aan", "Overige merken"],
    proof: "Echte projecten met deze merken",
  },
  it: {
    heading: "Carrozzeria e verniciatura per diverse marche",
    intro: "Nella nostra officina di Torrevieja valutiamo i danni alla carrozzeria, anche dopo un incidente, sui veicoli delle marche indicate. Dalla riparazione e verniciatura di una porta, un parafango, un cofano o un paraurti alla riverniciatura completa dell’esterno, concordiamo gli interventi in base alle condizioni dell’auto.",
    groups: ["Lavori di carrozzeria e verniciatura", "Lavoriamo anche su", "Altre marche"],
    proof: "Lavori reali su queste marche",
  },
  nb: {
    heading: "Karosseriarbeid og lakkering for forskjellige bilmerker",
    intro: "På verkstedet vårt i Torrevieja vurderer vi karosseriskader, også etter en kollisjon, på biler av merkene nedenfor. Fra reparasjon og lakkering av en dør, en skjerm, et panser eller en støtfanger til omlakkering av hele karosseriet avtales arbeidet ut fra bilens tilstand.",
    groups: ["Karosseriarbeid og lakkering", "Vi arbeider også med", "Andre bilmerker"],
    proof: "Utførte arbeider på disse bilmerkene",
  },
  fi: {
    heading: "Korikorjaukset ja maalaus eri automerkeille",
    intro: "Torreviejan korjaamossamme arvioimme alla mainittujen merkkien korivaurioita, myös kolarin jälkeen. Työn laajuus sovitaan auton kunnon perusteella: kyse voi olla oven, lokasuojan, konepellin tai puskurin korjauksesta ja maalauksesta tai koko korin uudelleenmaalauksesta.",
    groups: ["Kori- ja maalaustyöt", "Työskentelemme myös näiden merkkien parissa", "Muut merkit"],
    proof: "Toteutettuja töitä näille merkeille",
  },
  da: {
    heading: "Karrosseriarbejde og lakering af forskellige bilmærker",
    intro: "På vores værksted i Torrevieja vurderer vi karrosseriskader, også efter en ulykke, på biler af de nævnte mærker. Fra reparation og lakering af en dør, skærm, motorhjelm eller kofanger til omlakering af hele karrosseriet aftaler vi omfanget ud fra bilens tilstand.",
    groups: ["Karrosseriarbejde og lakering", "Vi arbejder også med", "Andre bilmærker"],
    proof: "Udførte arbejder på disse mærker",
  },
  sv: {
    heading: "Karossreparation och lackering för olika bilmärken",
    intro: "På vår verkstad i Torrevieja bedömer vi karosskador, även efter en olycka, på bilar av de angivna märkena. Från reparation och lackering av en dörr, skärm, motorhuv eller stötfångare till omlackering av hela karossen bestäms omfattningen utifrån bilens skick.",
    groups: ["Karossarbete och lackering", "Vi arbetar också med", "Övriga bilmärken"],
    proof: "Utförda arbeten på dessa märken",
  },
  sk: {
    heading: "Karosárske opravy a lakovanie rôznych značiek",
    intro: "V našej dielni v Torrevieji posudzujeme poškodenia karosérie vrátane následkov nehody na autách uvedených značiek. Od opravy a lakovania dverí, blatníka, kapoty alebo nárazníka až po prelakovanie celej karosérie dohodneme rozsah podľa stavu vozidla.",
    groups: ["Karosárske a lakovnícke práce", "Pracujeme aj so značkami", "Ďalšie značky"],
    proof: "Skutočné práce na autách týchto značiek",
  },
  hu: {
    heading: "Karosszériajavítás és fényezés különböző márkáknak",
    intro: "Torreviejai műhelyünkben a felsorolt márkák autóinak karosszériasérüléseit mérjük fel, baleset után is. Az ajtó, sárvédő, motorháztető vagy lökhárító javításától és fényezésétől a teljes karosszéria újrafényezéséig az autó állapota alapján egyeztetjük a munkát.",
    groups: ["Karosszéria- és fényezési munkák", "Ezekkel a márkákkal is dolgozunk", "További márkák"],
    proof: "Elvégzett munkák ezeknél a márkáknál",
  },
  bg: {
    heading: "Тенекеджийски и бояджийски услуги за различни марки",
    intro: "В нашия сервиз в Торевиеха оценяваме повредите по каросерията, включително след ПТП, на автомобили от изброените марки. От ремонт и боядисване на врата, калник, преден капак или броня до цялостно пребоядисване на каросерията, обемът се съгласува според състоянието на автомобила.",
    groups: ["Тенекеджийски и бояджийски работи", "Работим също с марките", "Други марки"],
    proof: "Реални ремонти на автомобили от тези марки",
  },
  pt: {
    heading: "Carroçaria e pintura para várias marcas",
    intro: "Na nossa oficina em Torrevieja avaliamos danos de carroçaria, incluindo os de um acidente, em automóveis das marcas indicadas. Da reparação e pintura de uma porta, guarda-lamas, capô ou para-choques à repintura de toda a carroçaria, o trabalho é acordado de acordo com o estado do automóvel.",
    groups: ["Trabalhos de carroçaria e pintura", "Também trabalhamos com", "Outras marcas"],
    proof: "Trabalhos reais nestas marcas",
  },
  el: {
    heading: "Επισκευή αμαξώματος και βαφή για διάφορες μάρκες",
    intro: "Στο συνεργείο μας στην Torrevieja αξιολογούμε ζημιές αμαξώματος, ακόμη και μετά από ατύχημα, σε αυτοκίνητα των μαρκών που αναφέρονται. Από την επισκευή και βαφή μιας πόρτας, φτερού, καπό ή προφυλακτήρα έως την ολική επαναβαφή του αμαξώματος, οι εργασίες συμφωνούνται ανάλογα με την κατάσταση του αυτοκινήτου.",
    groups: ["Εργασίες αμαξώματος και βαφής", "Εργαζόμαστε επίσης με", "Άλλες μάρκες"],
    proof: "Πραγματικές εργασίες σε αυτές τις μάρκες",
  },
  cs: {
    heading: "Karosářské opravy a lakování různých značek",
    intro: "V naší dílně v Torrevieje posuzujeme poškození karoserie včetně následků nehody u aut uvedených značek. Od opravy a lakování dveří, blatníku, kapoty nebo nárazníku až po přelakování celé karoserie dohodneme rozsah podle stavu vozidla.",
    groups: ["Karosářské a lakýrnické práce", "Pracujeme také se značkami", "Další značky"],
    proof: "Skutečné práce na autech těchto značek",
  },
};
