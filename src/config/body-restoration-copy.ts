import type { Locale } from "@/config/i18n";

type RestorationCopy = {
  bodyHeading: string;
  body: string;
  replacement?: string;
  paintHeading: string;
  paint: string;
};

export const bodyRestorationCopy: Record<Locale, RestorationCopy> = {
  es: {
    bodyHeading: "Óxido y recuperación de carrocería",
    body: "Para reparar óxido en la carrocería en Torrevieja, primero valoramos la profundidad de la corrosión y el estado del metal; eliminamos el óxido superficial cuando es técnicamente adecuado y preparamos la superficie para pintar. Si hay metal muy deteriorado o perforaciones, hace falta una inspección antes de confirmar qué trabajo es viable. En coches antiguos y clásicos, la restauración se limita a los trabajos de carrocería y pintura acordados tras revisar el vehículo.",
    replacement: "El estado de una puerta, aleta, capó o paragolpes determina si conviene repararlo o sustituirlo; la decisión se acuerda después de la inspección.",
    paintHeading: "Pintura de piezas nuevas de sustitución",
    paint: "Una pieza nueva también necesita comprobar su material, su imprimación y la preparación necesaria antes de pintarla. Para un paragolpes o un panel de sustitución ajustamos la preparación y el color al coche, sin dar por hecho que la pieza llega lista para aplicar la pintura.",
  },
  en: {
    bodyHeading: "Rust and older car bodywork",
    body: "For car rust repair in Torrevieja, we first assess the depth of corrosion and the condition of the metal; surface rust can be removed and the panel prepared for repainting where technically suitable. Heavily weakened or perforated metal needs inspection before a feasible scope can be agreed. Work on older and classic cars is limited to the bodywork and paint restoration agreed after assessing the vehicle.",
    replacement: "A damaged door, wing, bonnet or bumper is assessed to decide whether repair or replacement is appropriate before work is agreed.",
    paintHeading: "Painting new replacement panels",
    paint: "A new replacement panel needs its material, primer and surface condition checked before painting. Whether it is a new bumper or another panel, preparation and colour matching are planned for the actual car rather than assuming the part is ready to paint as supplied.",
  },
  ru: {
    bodyHeading: "Ржавчина и восстановление кузова старого автомобиля",
    body: "Ремонт ржавчины кузова в Торревьехе начинаем с оценки глубины коррозии и состояния металла: поверхностную ржавчину удаляем там, где это технически целесообразно, затем готовим участок к покраске. При сильном разрушении металла или сквозной коррозии возможный объём работ подтверждается только после осмотра. Для старых и классических автомобилей обсуждаем восстановление кузова и покраски в пределах согласованных кузовных и малярных работ.",
    paintHeading: "Покраска новой кузовной детали",
    paint: "Перед покраской новой детали проверяем её материал, грунт и состояние поверхности, чтобы определить необходимую подготовку. Новый бампер или другой заменённый элемент окрашиваем с подбором оттенка к автомобилю, не предполагая, что поставленная деталь уже полностью готова к нанесению краски.",
  },
  uk: {
    bodyHeading: "Іржа та відновлення кузова старого автомобіля",
    body: "Ремонт іржі на кузові в Торрев’єсі починаємо з оцінки глибини корозії та стану металу: поверхневу іржу видаляємо там, де це технічно доцільно, а потім готуємо ділянку до фарбування. Якщо метал сильно зруйнований або має наскрізну корозію, можливий обсяг робіт підтверджуємо лише після огляду. Для старих і класичних автомобілів обговорюємо відновлення кузова та фарбування в межах погоджених кузовних і малярних робіт.",
    paintHeading: "Фарбування нової кузовної деталі",
    paint: "Перед фарбуванням нової деталі перевіряємо її матеріал, ґрунт і стан поверхні, щоб визначити необхідну підготовку. Новий бампер або інший замінений елемент фарбуємо з підбором відтінку до автомобіля, не припускаючи, що поставлена деталь уже повністю готова до нанесення фарби.",
  },
  de: {
    bodyHeading: "Rost und die Aufarbeitung älterer Karosserien",
    body: "Bei einer Rostreparatur in Torrevieja prüfen wir zuerst die Korrosionstiefe und den Zustand des Blechs; oberflächlicher Rost wird entfernt und die Stelle für die Lackierung vorbereitet, soweit dies technisch sinnvoll ist. Stark geschwächtes oder durchgerostetes Blech muss besichtigt werden, bevor sich der mögliche Arbeitsumfang bestätigen lässt. Bei älteren Fahrzeugen und Oldtimern beschränkt sich die Restaurierung auf die nach der Besichtigung vereinbarten Karosserie- und Lackierarbeiten.",
    replacement: "Bei einer beschädigten Tür, einem Kotflügel, einer Motorhaube oder einem Stoßfänger wird vor Arbeitsbeginn geklärt, ob eine Reparatur oder ein Austausch sinnvoll ist.",
    paintHeading: "Lackierung neuer Ersatzteile",
    paint: "Vor dem Lackieren eines neuen Karosserieteils prüfen wir Material, Grundierung und Oberfläche, um die nötige Vorbereitung festzulegen. Bei einem neuen Stoßfänger oder einem anderen Ersatzteil stimmen wir Vorbereitung und Farbton auf das Fahrzeug ab, statt von einer sofort lackierfähigen Oberfläche auszugehen.",
  },
  pl: {
    bodyHeading: "Korozja i odnowienie starszej karoserii",
    body: "Naprawę korozji w Torrevieja zaczynamy od oceny jej głębokości i stanu blachy; rdzę powierzchniową usuwamy tam, gdzie jest to technicznie uzasadnione, a następnie przygotowujemy miejsce do lakierowania. Mocno osłabiona lub przerdzewiała na wylot blacha wymaga oględzin przed potwierdzeniem możliwego zakresu prac. W starszych i klasycznych samochodach renowacja obejmuje wyłącznie uzgodnione po oględzinach prace blacharskie i lakiernicze.",
    paintHeading: "Lakierowanie nowych elementów na wymianę",
    paint: "Przed lakierowaniem nowego elementu sprawdzamy materiał, podkład i stan powierzchni, aby dobrać przygotowanie. Nowy zderzak lub inną wymienioną część lakierujemy z doborem odcienia do samochodu, nie zakładając, że dostarczony element jest od razu gotowy do nałożenia lakieru.",
  },
  fr: {
    bodyHeading: "Rouille et remise en état des carrosseries anciennes",
    body: "Pour une réparation de corrosion à Torrevieja, nous évaluons d’abord sa profondeur et l’état du métal ; la rouille superficielle est retirée et la surface préparée pour la peinture lorsque cela est techniquement adapté. Un métal très affaibli ou perforé exige un examen avant de confirmer les travaux réalisables. Sur les voitures anciennes et de collection, la restauration se limite aux travaux de carrosserie et de peinture convenus après examen du véhicule.",
    replacement: "L’état d’une porte, d’une aile, d’un capot ou d’un pare-chocs endommagé détermine s’il convient de réparer la pièce ou de la remplacer, avant d’engager les travaux.",
    paintHeading: "Peinture des éléments neufs de remplacement",
    paint: "Avant de peindre un élément neuf, nous vérifions son matériau, son apprêt et l’état de sa surface pour définir la préparation nécessaire. Pour un pare-chocs neuf ou un autre élément remplacé, la préparation et la teinte sont adaptées au véhicule sans supposer que la pièce livrée est prête à peindre.",
  },
  nl: {
    bodyHeading: "Roest en herstel van oudere carrosserieën",
    body: "Voor roestherstel aan de carrosserie in Torrevieja beoordelen we eerst de diepte van de corrosie en de staat van het metaal; oppervlakkige roest wordt verwijderd en de plek voorbereid voor spuitwerk waar dat technisch verantwoord is. Sterk verzwakt of doorgeroest plaatwerk moet worden bekeken voordat de haalbare werkzaamheden worden afgesproken. Bij oudere auto's en klassiekers gaat het uitsluitend om de na inspectie afgesproken carrosserie- en lakrestauratie.",
    replacement: "Bij een beschadigd portier, spatbord, motorkap of bumper beoordelen we vóór de werkzaamheden of herstel of vervanging passend is.",
    paintHeading: "Nieuwe vervangingsdelen spuiten",
    paint: "Voordat een nieuw deel wordt gespoten, controleren we materiaal, primer en oppervlak om de voorbereiding te bepalen. Bij een nieuwe bumper of een ander vervangingsdeel stemmen we voorbereiding en kleur af op de auto, zonder aan te nemen dat het geleverde deel direct spuitklaar is.",
  },
  it: {
    bodyHeading: "Ruggine e ripristino delle carrozzerie meno recenti",
    body: "Per riparare la corrosione della carrozzeria a Torrevieja valutiamo prima la profondità della ruggine e lo stato del metallo; rimuoviamo la corrosione superficiale e prepariamo la zona alla verniciatura quando è tecnicamente opportuno. Il metallo molto indebolito o perforato richiede un esame prima di confermare i lavori possibili. Per auto meno recenti e d’epoca, il restauro riguarda solo gli interventi di carrozzeria e verniciatura concordati dopo l’ispezione.",
    replacement: "Per una porta, un parafango, un cofano o un paraurti danneggiato valutiamo prima dei lavori se sia opportuna la riparazione o la sostituzione.",
    paintHeading: "Verniciatura dei nuovi elementi di ricambio",
    paint: "Prima di verniciare un elemento nuovo controlliamo materiale, fondo e superficie per stabilire la preparazione necessaria. Per un paraurti nuovo o un altro elemento sostituito adeguiamo preparazione e tonalità all’auto, senza presumere che il ricambio fornito sia già pronto per la verniciatura.",
  },
  nb: {
    bodyHeading: "Rust og istandsetting av eldre karosserier",
    body: "Ved rustreparasjon på bil i Torrevieja vurderer vi først hvor dypt rusten går og metallets tilstand; overflaterust fjernes og området klargjøres for lakkering når det er teknisk forsvarlig. Sterkt svekket eller gjennomrustet metall må undersøkes før vi kan avtale hvilket arbeid som er mulig. På eldre biler og veteranbiler gjelder restaureringen bare karosseri- og lakkeringsarbeidet som avtales etter inspeksjon.",
    replacement: "Ved skader på dør, skjerm, panser eller støtfanger vurderer vi før arbeidet om reparasjon eller utskifting er riktig løsning.",
    paintHeading: "Lakkering av nye erstatningsdeler",
    paint: "Før en ny del lakkeres, kontrollerer vi materiale, grunning og overflate for å fastsette nødvendig forarbeid. For en ny støtfanger eller en annen erstatningsdel tilpasses forarbeid og fargetone til bilen, uten å anta at delen er klar til lakkering slik den leveres.",
  },
  fi: {
    bodyHeading: "Ruoste ja vanhemman auton korin kunnostus",
    body: "Auton ruostekorjaus Torreviejassa alkaa ruosteen syvyyden ja metallin kunnon arvioinnista; pintaruoste poistetaan ja alue valmistellaan maalaukseen, kun se on teknisesti tarkoituksenmukaista. Pahoin heikentynyt tai puhkiruostunut pelti on tarkastettava ennen mahdollisten töiden sopimista. Vanhojen ja klassikkoautojen kunnostus koskee vain tarkastuksen jälkeen sovittuja kori- ja maalaustöitä.",
    replacement: "Vaurioituneen oven, lokasuojan, konepellin tai puskurin kunnon perusteella arvioidaan ennen työn aloittamista, onko korjaus vai vaihto tarkoituksenmukainen.",
    paintHeading: "Uusien vaihto-osien maalaus",
    paint: "Ennen uuden osan maalausta tarkistamme materiaalin, pohjamaalin ja pinnan tarvittavan esikäsittelyn määrittämiseksi. Uuden puskurin tai muun vaihdetun osan esikäsittely ja värisävy sovitetaan autoon olettamatta, että toimitettu osa on suoraan maalausvalmis.",
  },
  da: {
    bodyHeading: "Rust og istandsættelse af ældre karrosserier",
    body: "Ved rustreparation på biler i Torrevieja vurderer vi først rustens dybde og metallets tilstand; overfladerust fjernes, og området klargøres til lakering, hvor det er teknisk forsvarligt. Stærkt svækket eller gennemtæret metal skal undersøges, før et muligt arbejdsomfang kan aftales. På ældre biler og veteranbiler omfatter restaureringen kun det karrosseri- og lakeringsarbejde, der aftales efter gennemgang af bilen.",
    replacement: "En beskadiget dør, skærm, motorhjelm eller kofanger vurderes inden arbejdet for at afgøre, om reparation eller udskiftning er den rette løsning.",
    paintHeading: "Lakering af nye erstatningsdele",
    paint: "Før en ny del lakeres, kontrollerer vi materiale, grunding og overflade for at fastlægge det nødvendige forarbejde. Ved en ny kofanger eller en anden udskiftet del tilpasses forarbejde og farvetone til bilen, uden at vi antager, at delen leveres klar til lakering.",
  },
  sv: {
    bodyHeading: "Rost och renovering av äldre karosser",
    body: "Vid rostlagning på bil i Torrevieja bedömer vi först rostens djup och metallens skick; ytrost tas bort och området förbereds för lackering där det är tekniskt lämpligt. Kraftigt försvagad eller genomrostad plåt måste undersökas innan möjliga arbeten kan avtalas. På äldre bilar och veteranbilar omfattar renoveringen endast de kaross- och lackeringsarbeten som avtalas efter inspektion.",
    replacement: "En skadad dörr, skärm, motorhuv eller stötfångare bedöms före arbetet för att avgöra om reparation eller byte är lämpligt.",
    paintHeading: "Lackering av nya ersättningsdelar",
    paint: "Innan en ny del lackeras kontrollerar vi material, grundfärg och yta för att bestämma nödvändigt förarbete. För en ny stötfångare eller en annan utbytt del anpassas förarbete och kulör till bilen, utan att vi förutsätter att delen levereras lackeringsklar.",
  },
  sk: {
    bodyHeading: "Korózia a obnova staršej karosérie",
    body: "Pri oprave korózie karosérie v Torrevieji najprv posúdime jej hĺbku a stav kovu; povrchovú hrdzu odstránime a miesto pripravíme na lakovanie tam, kde je to technicky vhodné. Silno oslabený alebo prehrdzavený plech si vyžaduje obhliadku pred potvrdením možného rozsahu prác. Pri starších autách a veteránoch sa renovácia týka iba karosárskych a lakovníckych prác dohodnutých po obhliadke.",
    replacement: "Pri poškodení dverí, blatníka, kapoty alebo nárazníka pred začatím prác posúdime, či je vhodná oprava alebo výmena.",
    paintHeading: "Lakovanie nových náhradných dielov",
    paint: "Pred lakovaním nového dielu skontrolujeme materiál, základný náter a povrch, aby sme určili potrebnú prípravu. Pri novom nárazníku alebo inom vymenenom diele prispôsobíme prípravu a odtieň autu bez predpokladu, že dodaný diel je už pripravený na lakovanie.",
  },
  hu: {
    bodyHeading: "Rozsda és régebbi karosszériák felújítása",
    body: "A karosszéria rozsdajavítása Torreviejában a korrózió mélységének és a fém állapotának felmérésével kezdődik; a felületi rozsdát eltávolítjuk és a részt előkészítjük fényezésre, ahol ez műszakilag indokolt. Az erősen meggyengült vagy átrozsdásodott lemezt meg kell vizsgálni, mielőtt a lehetséges munkákról megállapodunk. Régebbi és veterán autóknál a felújítás kizárólag a szemle után egyeztetett karosszéria- és fényezési munkákra terjed ki.",
    replacement: "A sérült ajtó, sárvédő, motorháztető vagy lökhárító állapota alapján a munka előtt mérlegeljük, hogy javítás vagy csere indokolt-e.",
    paintHeading: "Új csereelemek fényezése",
    paint: "Új elem fényezése előtt ellenőrizzük az anyagát, az alapozást és a felület állapotát, hogy meghatározzuk az előkészítést. Új lökhárítónál vagy más cserélt elemnél az előkészítést és a színárnyalatot az autóhoz igazítjuk, nem feltételezve, hogy a kapott alkatrész azonnal fényezhető.",
  },
  bg: {
    bodyHeading: "Ръжда и възстановяване на по-стари каросерии",
    body: "Ремонтът на ръжда по каросерията в Торевиеха започва с оценка на дълбочината на корозията и състоянието на метала; повърхностната ръжда се отстранява и мястото се подготвя за боядисване, когато това е технически целесъобразно. Силно отслабен или пробит от корозия метал изисква оглед, преди да се потвърди възможният обем работа. При по-стари и класически автомобили възстановяването обхваща само договорените след оглед тенекеджийски и бояджийски работи.",
    replacement: "При повредена врата, калник, преден капак или броня преди работа преценяваме дали е подходящ ремонт или подмяна.",
    paintHeading: "Боядисване на нови резервни детайли",
    paint: "Преди боядисване на нов детайл проверяваме материала, грунда и повърхността, за да определим необходимата подготовка. При нова броня или друг подменен детайл съобразяваме подготовката и оттенъка с автомобила, без да приемаме, че доставената част е готова направо за боядисване.",
  },
  pt: {
    bodyHeading: "Ferrugem e recuperação de carroçarias antigas",
    body: "Para reparar corrosão na carroçaria em Torrevieja, avaliamos primeiro a sua profundidade e o estado do metal; removemos a ferrugem superficial e preparamos a zona para pintura quando é tecnicamente adequado. Chapa muito enfraquecida ou perfurada exige uma inspeção antes de confirmar os trabalhos possíveis. Em automóveis antigos e clássicos, o restauro limita-se aos trabalhos de carroçaria e pintura acordados após examinar o veículo.",
    replacement: "O estado de uma porta, guarda-lamas, capô ou para-choques danificado é avaliado antes dos trabalhos para decidir entre reparar e substituir.",
    paintHeading: "Pintura de novas peças de substituição",
    paint: "Antes de pintar uma peça nova, verificamos o material, o primário e a superfície para definir a preparação necessária. Num para-choques novo ou noutro elemento substituído, ajustamos a preparação e a tonalidade ao automóvel, sem presumir que a peça fornecida está pronta a pintar.",
  },
  el: {
    bodyHeading: "Σκουριά και αποκατάσταση παλαιότερων αμαξωμάτων",
    body: "Για την επισκευή διάβρωσης αμαξώματος στην Torrevieja ελέγχουμε πρώτα το βάθος της σκουριάς και την κατάσταση του μετάλλου· αφαιρούμε την επιφανειακή σκουριά και προετοιμάζουμε το σημείο για βαφή όπου είναι τεχνικά κατάλληλο. Το πολύ εξασθενημένο ή τρυπημένο μέταλλο χρειάζεται έλεγχο πριν συμφωνηθούν οι εφικτές εργασίες. Στα παλαιότερα και κλασικά αυτοκίνητα η αποκατάσταση αφορά μόνο τις εργασίες αμαξώματος και βαφής που συμφωνούνται μετά τον έλεγχο.",
    replacement: "Σε μια κατεστραμμένη πόρτα, φτερό, καπό ή προφυλακτήρα αξιολογούμε πριν από τις εργασίες αν ενδείκνυται επισκευή ή αντικατάσταση.",
    paintHeading: "Βαφή καινούργιων ανταλλακτικών αμαξώματος",
    paint: "Πριν βαφτεί ένα καινούργιο τμήμα, ελέγχουμε το υλικό, το αστάρι και την επιφάνειά του για να καθορίσουμε την προετοιμασία. Για έναν νέο προφυλακτήρα ή άλλο ανταλλακτικό προσαρμόζουμε την προετοιμασία και την απόχρωση στο αυτοκίνητο, χωρίς να θεωρούμε ότι το παραδοθέν τμήμα είναι έτοιμο για άμεση βαφή.",
  },
  cs: {
    bodyHeading: "Koroze a obnova starší karoserie",
    body: "Při opravě koroze karoserie v Torrevieje nejprve posoudíme její hloubku a stav kovu; povrchovou rez odstraníme a místo připravíme k lakování tam, kde je to technicky vhodné. Silně oslabený nebo prorezavělý plech vyžaduje prohlídku před potvrzením možného rozsahu prací. U starších aut a veteránů se renovace týká pouze karosářských a lakýrnických prací dohodnutých po prohlídce.",
    replacement: "U poškozených dveří, blatníku, kapoty nebo nárazníku před zahájením prací posoudíme, zda je vhodná oprava nebo výměna.",
    paintHeading: "Lakování nových náhradních dílů",
    paint: "Před lakováním nového dílu zkontrolujeme materiál, základní nátěr a povrch, abychom určili potřebnou přípravu. U nového nárazníku nebo jiného vyměněného dílu přizpůsobíme přípravu a odstín autu, aniž bychom předpokládali, že je dodaný díl rovnou připraven k lakování.",
  },
};
