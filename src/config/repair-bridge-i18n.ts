import type { Locale } from "@/config/i18n";

export type RepairBridgeCopy = {
  heading: string;
  paragraphs: readonly string[];
  labels: Record<"body" | "paint" | "insurance" | "services", string>;
  terms: readonly string[];
};

export const repairBridgeCopy: Record<Locale, RepairBridgeCopy> = {
  es: {
    heading: "Reparación de coches y carrocería en Torrevieja",
    paragraphs: [
      "Si buscas reparación de coche en Torrevieja por un golpe, arañazos o abolladuras, PaintLab es un taller de reparación de automóviles especializado en carrocería y pintura. La reparación de vehículos que realizamos se centra en los daños de chapa y del acabado: revisamos la pieza y su estado antes de proponer cómo reparar el coche.",
      "Nuestro taller de carrocería trabaja con paragolpes, puertas, aletas y capós, también después de un pequeño accidente. La reparación de golpes y arañazos puede requerir recuperar la forma, preparar la superficie y renovar la pintura. Consulta la {body}, la {paint} o la {insurance}, según el caso, y compara las opciones en {services} antes de enviarnos fotos.",
    ],
    labels: { body: "reparación de chapa y carrocería", paint: "pintura de coches", insurance: "reparación tras accidente", services: "nuestros servicios" },
    terms: ["reparación de coche", "reparación de automóviles", "reparación de vehículos", "reparar el coche", "taller de reparación de automóviles", "taller de carrocería", "reparación de golpes", "arañazos", "abolladuras", "reparación de chapa", "pintura de coches"],
  },
  en: {
    heading: "Car repair in Torrevieja for body and paint damage",
    paragraphs: [
      "Looking for a car repair shop because your vehicle has dents, scratches or damaged paint? PaintLab specialises in car body repair and painting in Torrevieja. Our auto repair work is focused on bodywork and the exterior finish: we inspect the affected area before recommending how to restore it. This is a body shop, rather than a general vehicle servicing workshop.",
      "Car repairs can involve a scuffed bumper, a dented door, a damaged wing or bonnet, including damage after a minor collision. Bodywork repair and car paint repair are planned around the condition of each panel. Explore {body}, {paint} and {insurance}, or browse {services}. Send photos for initial guidance; the final repair scope is confirmed after inspection.",
    ],
    labels: { body: "car body repair", paint: "car painting", insurance: "accident repair", services: "our services" },
    terms: ["car repair", "car repairs", "auto repair", "car repair shop", "body shop", "bodywork repair", "car body repair", "car paint repair", "car painting", "dents", "scratches", "bumper"],
  },
  ru: {
    heading: "Ремонт автомобиля в Торревьехе: кузов и покраска",
    paragraphs: [
      "Если нужно отремонтировать машину после повреждения кузова, PaintLab в Торревьехе поможет определить подходящий объём работ. Наш автосервис специализируется на кузове и покраске: ремонт авто здесь связан с вмятинами, царапинами, деформированными деталями и повреждённым покрытием, а не с общим техническим обслуживанием. Ремонт машины начинаем с осмотра пострадавшей зоны.",
      "Ремонт автомобилей может затрагивать бампер, дверь, крыло или капот, в том числе после небольшого ДТП. Восстанавливаем подходящие детали и готовим их к окраске по фактическому состоянию. Если выбираете, где отремонтировать машину, посмотрите {body}, {paint} и {insurance} в разделе {services}. По фотографиям можно предварительно обсудить ремонт и покраску авто; окончательное решение принимается после осмотра.",
    ],
    labels: { body: "ремонт кузова", paint: "покраску автомобиля", insurance: "ремонт после ДТП", services: "услуг мастерской" },
    terms: ["ремонт автомобиля", "ремонт машины", "ремонт авто", "ремонт автомобилей", "отремонтировать машину", "где отремонтировать машину", "автосервис", "ремонт кузова", "ремонт и покраску авто", "вмятинами", "царапинами", "бампер", "дверь", "крыло", "капот"],
  },
  uk: {
    heading: "Ремонт авто в Торрев'єсі: кузов і фарбування",
    paragraphs: [
      "Потрібно відремонтувати авто з пошкодженим кузовом? PaintLab у Торрев'єсі виконує ремонт автомобіля в частині кузовних деталей та покриття. Наш автосервіс має кузовну й малярну спеціалізацію: працюємо з вм'ятинами, подряпинами та деформаціями, а не із загальним технічним обслуговуванням. Спочатку оглядаємо пошкодження й пояснюємо можливий обсяг відновлення.",
      "Ремонт автомобілів може охоплювати бампер, двері, крило чи капот, зокрема після невеликої ДТП. Стан кожної деталі визначає підготовку й подальше фарбування. Перегляньте {body}, {paint} та {insurance} або оберіть напрям у розділі {services}. Фото допоможуть попередньо обговорити ремонт пошкодженого авто, але не замінять огляд у майстерні.",
    ],
    labels: { body: "ремонт кузова", paint: "фарбування авто", insurance: "ремонт після ДТП", services: "послуг" },
    terms: ["ремонт авто", "ремонт автомобіля", "ремонт автомобілів", "відремонтувати авто", "автосервіс", "ремонт кузова", "фарбування авто", "ремонт пошкодженого авто", "ремонт після ДТП", "вм'ятинами", "подряпинами"],
  },
  de: {
    heading: "Autoreparatur in Torrevieja für Karosserie und Lack",
    paragraphs: [
      "Möchten Sie Ihr Auto reparieren lassen, weil die Karosserie oder der Lack beschädigt ist? PaintLab ist eine Autowerkstatt mit Schwerpunkt Karosseriereparatur und Autolackierung in Torrevieja. Unsere Fahrzeugreparatur betrifft Dellen, Kratzer, verformte Blechteile und Lackschäden, nicht die allgemeine Wartung. Vor einer Reparatur am Auto prüfen wir den betroffenen Bereich und erklären den passenden Arbeitsumfang.",
      "Stoßfänger, Türen, Kotflügel und Motorhauben werden je nach Zustand beurteilt, auch nach einem kleineren Unfall. Einen Karosserieschaden reparieren wir nur mit technisch geeigneten Arbeiten vor der Lackierung. Informieren Sie sich über {body}, {paint} und {insurance} oder vergleichen Sie {services}. Fotos ermöglichen eine erste Orientierung; die endgültige Festlegung erfolgt nach der Besichtigung.",
    ],
    labels: { body: "Karosseriereparatur", paint: "Autolackierung", insurance: "Unfallreparatur", services: "unsere Leistungen" },
    terms: ["Autoreparatur", "Auto reparieren", "Fahrzeugreparatur", "Reparatur am Auto", "Autowerkstatt", "Karosseriereparatur", "Karosserieschaden reparieren", "Autolackierung", "Lackschäden", "Dellen", "Kratzer"],
  },
  pl: {
    heading: "Naprawa samochodu w Torrevieja: karoseria i lakier",
    paragraphs: [
      "Chcesz naprawić auto z uszkodzoną karoserią lub lakierem? PaintLab w Torrevieja to warsztat samochodowy o specjalizacji blacharsko-lakierniczej. Naprawa auta obejmuje u nas wgniecenia, rysy, odkształcone elementy i uszkodzoną powłokę, a nie ogólną obsługę mechaniczną. Najpierw oglądamy uszkodzenie i wyjaśniamy, jaki zakres prac odpowiada rzeczywistemu stanowi pojazdu.",
      "Naprawa samochodów może dotyczyć zderzaka, drzwi, błotnika lub maski, również po niewielkiej kolizji. Stan części decyduje o przygotowaniu i późniejszym lakierowaniu. Sprawdź {body}, {paint} i {insurance} w katalogu {services}. Zdjęcia pomagają wstępnie omówić naprawę uszkodzonego auta, lecz ostateczny zakres potwierdzamy po oględzinach w warsztacie.",
    ],
    labels: { body: "naprawę karoserii", paint: "lakierowanie samochodu", insurance: "naprawę powypadkową", services: "naszych usług" },
    terms: ["naprawa samochodu", "naprawa auta", "naprawa samochodów", "naprawić auto", "warsztat samochodowy", "naprawę karoserii", "lakierowanie samochodu", "naprawę uszkodzonego auta", "naprawę powypadkową", "wgniecenia", "rysy"],
  },
  fr: {
    heading: "Réparation automobile à Torrevieja : carrosserie et peinture",
    paragraphs: [
      "Vous cherchez un garage de réparation automobile pour une voiture abîmée ? PaintLab intervient à Torrevieja sur la carrosserie et la peinture. Réparer une voiture, dans notre atelier, signifie examiner les bosses, rayures, éléments déformés et dommages du revêtement, puis proposer les travaux adaptés. Notre spécialité est la carrosserie automobile, pas l'entretien mécanique général.",
      "Un pare-chocs, une porte, une aile ou un capot peuvent nécessiter une remise en état, notamment après un petit accident. La préparation et la peinture dépendent de l'état réel de chaque pièce. Consultez nos {services} et notre page de {insurance}. Les photos permettent un premier échange sur la réparation de carrosserie ; l'examen au garage confirme le travail nécessaire.",
    ],
    labels: { body: "réparation de carrosserie", paint: "peinture automobile", insurance: "réparation après accident", services: "prestations" },
    terms: ["réparation automobile", "garage de réparation automobile", "réparer une voiture", "carrosserie automobile", "réparation de carrosserie", "réparation après accident", "bosses", "rayures", "peinture", "voiture abîmée"],
  },
  nl: {
    heading: "Autoreparatie in Torrevieja voor carrosserie en lak",
    paragraphs: [
      "Wilt u uw auto laten repareren vanwege een deuk, krassen of lakschade? PaintLab richt zich in Torrevieja op autoschadeherstel, carrosserieherstel en autospuitwerk. Onze autoreparatie gaat over beschadigde carrosseriedelen en hun afwerking, niet over algemeen mechanisch onderhoud. We bekijken eerst de schade en leggen uit welke werkzaamheden bij de toestand van de auto passen.",
      "Een beschadigde bumper, deur, spatbord of motorkap kan ook na een kleine aanrijding worden beoordeeld. Deukherstel en lakschade herstellen vragen om voorbereiding die bij het paneel past. Bekijk {services} of lees over {insurance}. Foto's helpen om het schadeherstel vooraf te bespreken; de definitieve werkomvang wordt na inspectie in de werkplaats bevestigd.",
    ],
    labels: { body: "carrosserieherstel", paint: "autospuitwerk", insurance: "herstel na een aanrijding", services: "onze diensten" },
    terms: ["autoreparatie", "auto laten repareren", "autoschadeherstel", "schadeherstel", "carrosserieherstel", "autospuitwerk", "lakschade herstellen", "deukherstel", "krassen", "beschadigde bumper"],
  },
  it: {
    heading: "Riparazione auto a Torrevieja: carrozzeria e verniciatura",
    paragraphs: [
      "Se cerchi un'officina per la riparazione auto a Torrevieja a causa di ammaccature, graffi o vernice danneggiata, PaintLab si occupa della carrozzeria. Riparare l'auto nel nostro laboratorio significa valutare i pannelli e il rivestimento, spiegando gli interventi adatti prima di iniziare. La specializzazione è la riparazione della carrozzeria e la verniciatura auto, non la manutenzione meccanica generale.",
      "Portiere, parafanghi, paraurti e cofano si esaminano secondo il loro stato, anche dopo un piccolo incidente. La preparazione segue il danno reale, senza presumere lo stesso lavoro per ogni vettura. Consulta i {services} e la pagina di {insurance}. Le fotografie aiutano a parlare della riparazione dei danni auto; l'ispezione in officina conferma il lavoro necessario.",
    ],
    labels: { body: "riparazione carrozzeria", paint: "verniciatura auto", insurance: "riparazione dopo incidente", services: "nostri servizi" },
    terms: ["riparazione auto", "officina", "riparare l'auto", "riparazione della carrozzeria", "verniciatura auto", "riparazione dei danni auto", "vettura", "ammaccature", "graffi", "riparazione dopo incidente"],
  },
  nb: {
    heading: "Bilreparasjon i Torrevieja med karosseri og lakk i fokus",
    paragraphs: [
      "Trenger du å reparere bilen på grunn av bulker, riper eller lakkskader? PaintLab i Torrevieja er et bilverksted med karosseri og lakk som spesialområde. Reparasjon av bil hos oss gjelder skadde karosserideler og overflater, ikke generell mekanisk service. Vi undersøker skaden før vi forklarer hvilket arbeid som er egnet for den aktuelle delen.",
      "Støtfanger, dør, skjerm og panser vurderes etter tilstand, også etter en mindre kollisjon. Karosserireparasjon og reparasjon av lakkskader planlegges sammen med nødvendig forarbeid. Se {services} og informasjon om {insurance}. Bilder gir et første grunnlag for å diskutere reparasjon av karosseriskader; endelig omfang bekreftes når bilen er undersøkt på verkstedet.",
    ],
    labels: { body: "karosserireparasjon", paint: "billakkering", insurance: "reparasjon etter kollisjon", services: "tjenestene våre" },
    terms: ["bilreparasjon", "reparasjon av bil", "reparere bilen", "bilverksted", "karosserireparasjon", "reparasjon av karosseriskader", "reparasjon av lakkskader", "karosseri og lakk", "bulker", "riper"],
  },
  fi: {
    heading: "Auton korjaus Torreviejassa: kori- ja maalivauriot",
    paragraphs: [
      "Etsitkö korjausta lommoihin, naarmuihin tai vaurioituneeseen maalipintaan? PaintLab Torreviejassa on kori- ja maalaustöihin erikoistunut autokorjaamo. Auton korjaaminen tarkoittaa meillä vaurioituneiden korinosien ja pinnoitteen tarkastusta sekä sopivien töiden suunnittelua, ei yleistä mekaanista huoltoa. Selitämme korjaustarpeen auton todellisen kunnon perusteella ennen työn aloittamista.",
      "Puskuri, ovi, lokasuoja tai konepelti voidaan arvioida myös pienen kolarin jälkeen. Korikorjaus ja maalivaurion korjaus vaativat osaan sopivan esikäsittelyn. Tutustu {services} ja siihen, miten {insurance} toteutetaan. Kuvat auttavat korivaurioiden korjauksen alustavassa arvioinnissa, mutta lopullinen työn laajuus vahvistetaan korjaamossa tehdyn tarkastuksen jälkeen.",
    ],
    labels: { body: "korikorjaus", paint: "automaalaus", insurance: "kolariauton korjaus", services: "palveluihimme" },
    terms: ["auton korjaus", "auton korjaaminen", "autokorjaamo", "korikorjaus", "maalivaurion korjaus", "korivaurioiden korjauksen", "kolariauton korjaus", "lommoihin", "naarmuihin", "kori- ja maalaustöihin"],
  },
  da: {
    heading: "Bilreparation i Torrevieja med fokus på karrosseri og lak",
    paragraphs: [
      "Leder du efter reparation af bil på grund af buler, ridser eller beskadiget lak? PaintLab i Torrevieja er et bilværksted med speciale i karrosseri og autolakering. Vores arbejde handler om skadede karrosseridele og overflader, ikke almindelig mekanisk service. Vi undersøger det berørte område og forklarer den passende reparation, før arbejdet aftales.",
      "Kofanger, dør, skærm og motorhjelm kan vurderes, også efter et mindre sammenstød. Karrosserireparation og udbedring af lakskader planlægges efter delens faktiske tilstand. Se {services} og vores side om {insurance}. Billeder hjælper med den første samtale om reparation af karrosseriskader, men det endelige omfang bekræftes efter besigtigelse på værkstedet.",
    ],
    labels: { body: "karrosserireparation", paint: "autolakering", insurance: "skadereparation efter uheld", services: "vores ydelser" },
    terms: ["bilreparation", "reparation af bil", "bilværksted", "karrosserireparation", "reparation af karrosseriskader", "autolakering", "lakskader", "skadereparation", "buler", "ridser"],
  },
  sv: {
    heading: "Bilreparation i Torrevieja för kaross- och lackskador",
    paragraphs: [
      "Behöver du reparation av bil efter bucklor, repor eller skadad lack? PaintLab i Torrevieja är en bilverkstad med inriktning på kaross och billackering. Arbetet gäller skadade karossdelar och deras yta, inte allmän mekanisk service. Vi undersöker området och förklarar vilka åtgärder som passar bilens faktiska skick innan arbetet bestäms.",
      "Stötfångare, dörr, skärm och motorhuv kan bedömas, även efter en mindre kollision. Karossreparation och åtgärder för lackskador planeras med rätt förarbete för varje panel. Läs om {insurance} eller jämför {services}. Bilder ger ett första underlag för reparation av karossskador; det slutliga arbetsomfånget bekräftas efter undersökning på verkstaden.",
    ],
    labels: { body: "karossreparation", paint: "billackering", insurance: "krockskadereparation", services: "våra tjänster" },
    terms: ["bilreparation", "reparation av bil", "bilverkstad", "karossreparation", "reparation av karossskador", "billackering", "lackskador", "krockskadereparation", "bucklor", "repor"],
  },
  sk: {
    heading: "Oprava auta v Torrevieja: karoséria a lak",
    paragraphs: [
      "Potrebujete opravu automobilu pre preliačiny, škrabance alebo poškodený lak? PaintLab v Torrevieja je autoservis zameraný na karosárske opravy a lakovanie auta, nie na všeobecnú mechanickú údržbu. Najprv skontrolujeme poškodenú oblasť a vysvetlíme vhodný rozsah prác. Oprava karosérie vychádza zo stavu konkrétneho dielu, nie iba z veľkosti viditeľnej stopy.",
      "Nárazník, dvere, blatník či kapota sa posudzujú aj po menšej kolízii. Pri oprave poškodeného auta nadväzuje potrebná príprava a lakovanie na obnovu dielu. Pozrite si {services} a informácie o tom, ako prebieha {insurance}. Fotografie umožnia prvú konzultáciu, ale konečný rozsah sa potvrdzuje až po obhliadke v dielni.",
    ],
    labels: { body: "oprava karosérie", paint: "lakovanie auta", insurance: "oprava po nehode", services: "naše služby" },
    terms: ["oprava auta", "opravu automobilu", "autoservis", "oprava karosérie", "karosárske opravy", "lakovanie auta", "oprave poškodeného auta", "oprava po nehode", "preliačiny", "škrabance"],
  },
  hu: {
    heading: "Autójavítás Torreviejában: karosszéria és fényezés",
    paragraphs: [
      "Horpadás, karcolás vagy sérült festék miatt keres autójavítást? A torreviejai PaintLab karosszériára és autófényezésre szakosodott autószerviz, nem általános mechanikai szerviz. A sérült autó javítása nálunk az érintett elemek és bevonat megvizsgálásával kezdődik. Elmagyarázzuk, milyen karosszériajavítás és előkészítés indokolt az adott állapotban, mielőtt a munkáról megállapodunk.",
      "Lökhárító, ajtó, sárvédő és motorháztető sérülése is felmérhető, kisebb ütközés után is. A fényezéshez megfelelő alapot kell készíteni, nem pusztán elfedni a hibát. Nézze meg a {services} oldalát, vagy olvasson arról, hogyan zajlik a {insurance}. A fényképek segítik az első egyeztetést, de a végleges munkatartalmat a műhelyben végzett vizsgálat után erősítjük meg.",
    ],
    labels: { body: "karosszériajavítás", paint: "autófényezés", insurance: "baleseti javítás", services: "szolgáltatások" },
    terms: ["autójavítás", "autójavítást", "autószerviz", "karosszériajavítás", "autófényezésre", "sérült autó javítása", "baleseti javítás", "horpadás", "karcolás", "fényezés"],
  },
  bg: {
    heading: "Ремонт на автомобил в Торевиеха: каросерия и боя",
    paragraphs: [
      "Търсите ремонт на кола с вдлъбнатини, драскотини или повредена боя? PaintLab в Торевиеха е автосервиз с каросерийна специализация и автобояджийски услуги, а не общо механично обслужване. Ремонтът на повреден автомобил започва с оглед на засегнатите части и покритието. Обясняваме подходящите работи според реалното състояние, преди да уговорим изпълнението.",
      "Ремонт на автомобили може да включва броня, врата, калник или капак, също след лек удар. Възстановяването на детайла и подготовката предхождат необходимото автобоядисване. Разгледайте {services} и страницата за {insurance}. Снимките помагат за първоначална оценка на ремонта на каросерията, но окончателният обем се потвърждава след преглед в сервиза.",
    ],
    labels: { body: "ремонт на каросерия", paint: "автобоядисване", insurance: "ремонт след ПТП", services: "нашите услуги" },
    terms: ["ремонт на автомобил", "ремонт на кола", "автосервиз", "ремонт на автомобили", "ремонта на каросерията", "автобояджийски услуги", "автобоядисване", "повреден автомобил", "ремонт след ПТП", "вдлъбнатини", "драскотини"],
  },
  pt: {
    heading: "Reparação automóvel em Torrevieja: carroçaria e pintura",
    paragraphs: [
      "Procura uma oficina automóvel para reparar um carro com amolgadelas, riscos ou pintura danificada? A PaintLab em Torrevieja dedica-se à reparação de carroçaria e à pintura automóvel. A nossa reparação de viaturas incide nos elementos exteriores e no revestimento, não na manutenção mecânica geral. Primeiro observamos o dano e explicamos o trabalho adequado ao estado da peça.",
      "Um para-choques, porta, guarda-lamas ou capô pode precisar de recuperação, também após uma pequena colisão. A reparação de danos e a preparação da superfície são planeadas antes da pintura. Consulte os {services} e a página de {insurance}. As fotografias permitem uma primeira conversa sobre chapa e pintura; o âmbito final confirma-se depois da inspeção na oficina.",
    ],
    labels: { body: "reparação de carroçaria", paint: "pintura automóvel", insurance: "reparação após acidente", services: "nossos serviços" },
    terms: ["reparação automóvel", "reparar um carro", "oficina automóvel", "reparação de viaturas", "reparação de carroçaria", "chapa e pintura", "pintura automóvel", "reparação de danos", "reparação após acidente", "amolgadelas", "riscos"],
  },
  el: {
    heading: "Επισκευή αυτοκινήτου στην Torrevieja: αμάξωμα και βαφή",
    paragraphs: [
      "Ψάχνετε επισκευή αυτοκινήτου για βαθουλώματα, γρατζουνιές ή φθαρμένο χρώμα; Το PaintLab στην Torrevieja είναι συνεργείο αυτοκινήτων με ειδίκευση στο αμάξωμα και τη βαφή, όχι στη γενική μηχανική συντήρηση. Η επισκευή ζημιάς αυτοκινήτου ξεκινά με έλεγχο της περιοχής και των επηρεασμένων τμημάτων. Εξηγούμε την κατάλληλη εργασία σύμφωνα με την πραγματική τους κατάσταση.",
      "Προφυλακτήρας, πόρτα, φτερό ή καπό μπορούν να εξεταστούν και μετά από μικρή σύγκρουση. Η επισκευή αμαξώματος και η προετοιμασία προηγούνται της αναγκαίας βαφής. Δείτε τις {services} και την {insurance}. Οι φωτογραφίες βοηθούν στην αρχική συζήτηση με το φανοποιείο, αλλά η τελική έκταση της εργασίας επιβεβαιώνεται μετά τον έλεγχο στο συνεργείο.",
    ],
    labels: { body: "επισκευή αμαξώματος", paint: "βαφή αυτοκινήτου", insurance: "επισκευή μετά από ατύχημα", services: "υπηρεσίες μας" },
    terms: ["επισκευή αυτοκινήτου", "συνεργείο αυτοκινήτων", "επισκευή αμαξώματος", "φανοποιείο", "βαφή", "επισκευή ζημιάς αυτοκινήτου", "επισκευή μετά από ατύχημα", "βαθουλώματα", "γρατζουνιές", "προφυλακτήρας"],
  },
  cs: {
    heading: "Oprava auta v Torrevieja: karoserie a lak",
    paragraphs: [
      "Potřebujete opravu automobilu kvůli promáčklinám, škrábancům nebo poškozenému laku? PaintLab v Torrevieja je autoservis zaměřený na karosářské opravy a lakování auta, nikoli na obecnou mechanickou údržbu. Nejprve prohlédneme zasaženou oblast a vysvětlíme vhodný rozsah práce. Oprava karoserie vychází ze skutečného stavu dílu, ne pouze z velikosti viditelné stopy.",
      "Nárazník, dveře, blatník nebo kapota se posuzují i po menší kolizi. Při opravě poškozeného auta navazuje potřebná příprava a lakování na obnovu dílu. Prohlédněte si {services} a informace o tom, jak probíhá {insurance}. Fotografie umožní první konzultaci, ale konečný rozsah potvrzujeme až po prohlídce v dílně.",
    ],
    labels: { body: "oprava karoserie", paint: "lakování auta", insurance: "oprava po nehodě", services: "naše služby" },
    terms: ["oprava auta", "opravu automobilu", "autoservis", "oprava karoserie", "karosářské opravy", "lakování auta", "opravě poškozeného auta", "oprava po nehodě", "promáčklinám", "škrábancům"],
  },
};
