import type { Locale } from "@/config/locales";

type BodyWorkshopCommercialCopy = {
  specialist: string;
  elcheGroup: string;
  elcheHeading: string;
  elcheParagraphs: readonly [string, string];
};

export const bodyWorkshopCommercialCopy = {
  es: {
    specialist: "Si buscas un chapista o un pintor de coches en Torrevieja, en PaintLab coordinamos la reparación de la chapa con la preparación y el repintado: primero se recupera la forma de la pieza y después se trabaja el acabado.",
    elcheGroup: "Elche y su entorno",
    elcheHeading: "Chapa y pintura para clientes de Elche / Elx",
    elcheParagraphs: ["También recibimos vehículos de Elche / Elx en nuestro taller de Torrevieja. Para reparar un golpe o una abolladura, o pintar una pieza o el coche completo, revisamos primero el estado del vehículo. Si hay deformación o corrosión, valoramos los trabajos de bancada, la reparación del metal y la soldadura que puedan ser necesarios antes de pintar o proteger los bajos.", "Antes de desplazarte, envía por WhatsApp fotos generales y de detalle de los daños. Sirven para una valoración preliminar, no para confirmar daños ocultos ni un precio definitivo. El alcance y el presupuesto se acuerdan tras la inspección en Torrevieja; no tenemos taller ni servicio de reparación a domicilio en Elche."],
  },
  en: {
    specialist: "If you need a panel beater or car painter in Torrevieja, PaintLab brings bodywork repair and refinishing together: the panel's shape is restored before preparation and painting, rather than covering a dent with fresh paint.",
    elcheGroup: "Elche and the surrounding area",
    elcheHeading: "Body repair and painting for customers from Elche / Elx",
    elcheParagraphs: ["Customers from Elche / Elx can bring their cars to our Torrevieja workshop. We assess collision damage and dents before arranging panel painting or a full respray. Where deformation or corrosion is involved, we assess any jig work, metal repairs and body welding needed before refinishing or underbody protection.", "Send overall photos and close-ups of the damage on WhatsApp before travelling. They help with an initial estimate but cannot confirm hidden damage or a final price. We agree the repair scope and quote after inspecting the car in Torrevieja; we have no workshop or mobile repair service in Elche."],
  },
  ru: {
    specialist: "Если вам нужен кузовщик или автомаляр в Торревьехе, в PaintLab можно согласовать весь путь от восстановления формы повреждённой детали до подготовки и покраски. Новое покрытие наносят после кузовного ремонта, а не вместо устранения вмятины.",
    elcheGroup: "Эльче и окрестности",
    elcheHeading: "Кузовной ремонт и покраска для клиентов из Эльче / Elx",
    elcheParagraphs: ["Принимаем автомобили из Эльче / Elx в мастерской PaintLab в Торревьехе. После ДТП, вмятин или повреждения покрытия оцениваем кузовной ремонт и частичную либо полную покраску. При деформации или коррозии определяем, нужны ли стапельные работы, ремонт металла и кузовная сварка перед окраской или защитой днища.", "Перед поездкой отправьте в WhatsApp общий вид повреждения и крупные фотографии. По ним можно предварительно оценить стоимость, но нельзя подтвердить скрытые повреждения или окончательную цену. Объём работ и смету согласуем после осмотра в Торревьехе; филиала и выездного ремонта в Эльче у нас нет."],
  },
  uk: {
    specialist: "Якщо вам потрібен майстер кузовного ремонту або автомаляр у Торрев’єсі, у PaintLab можна узгодити відновлення форми деталі, підготовку та фарбування. Нове покриття наносять після виправлення пошкодження, а не замість усунення вм’ятини.",
    elcheGroup: "Ельче та околиці",
    elcheHeading: "Кузовний ремонт і фарбування для клієнтів з Ельче / Elx",
    elcheParagraphs: ["Приймаємо автомобілі з Ельче / Elx у майстерні PaintLab у Торрев’єсі. Після ДТП, вм’ятин або пошкодження покриття оцінюємо кузовний ремонт і часткове чи повне фарбування. За наявності деформації або корозії визначаємо потребу в стапельних роботах, ремонті металу та зварюванні перед фарбуванням або захистом днища.", "Перед поїздкою надішліть у WhatsApp загальний вигляд пошкодження та детальні фото. Вони допоможуть попередньо оцінити вартість, але не підтвердять приховані пошкодження чи остаточну ціну. Обсяг і кошторис узгоджуємо після огляду в Торрев’єсі; філії та виїзного ремонту в Ельче немає."],
  },
  de: {
    specialist: "Wenn Sie einen Karosseriebauer oder Fahrzeuglackierer in Torrevieja suchen, können Sie bei PaintLab Blechreparatur und Lackierung aufeinander abstimmen lassen. Zuerst wird die Form des beschädigten Teils instand gesetzt, danach folgen Vorbereitung und Lackaufbau.",
    elcheGroup: "Elche und Umgebung",
    elcheHeading: "Karosserie und Lackierung für Kunden aus Elche / Elx",
    elcheParagraphs: ["Wir nehmen auch Fahrzeuge aus Elche / Elx in unserer Werkstatt in Torrevieja an. Nach Unfallschäden oder Dellen prüfen wir die Karosseriereparatur sowie Teil- oder Komplettlackierung. Bei Verformungen oder Korrosion beurteilen wir erforderliche Richtbank-, Blech- und Schweißarbeiten vor Lackierung oder Unterbodenschutz.", "Senden Sie vor der Anfahrt Übersichts- und Detailfotos per WhatsApp für eine erste Kostenschätzung. Verdeckte Schäden und ein verbindlicher Preis lassen sich so nicht bestätigen. Umfang und Kostenvoranschlag werden nach der Besichtigung in Torrevieja vereinbart; in Elche haben wir weder eine Niederlassung noch einen mobilen Reparaturdienst."],
  },
  fr: {
    specialist: "Vous cherchez un carrossier ou un peintre automobile à Torrevieja ? Chez PaintLab, la remise en forme de la tôle et la peinture sont prévues ensemble : la réparation du panneau précède la préparation et la finition.",
    elcheGroup: "Elche et ses environs",
    elcheHeading: "Carrosserie et peinture pour les clients d’Elche / Elx",
    elcheParagraphs: ["Nous accueillons les véhicules d’Elche / Elx dans notre atelier de Torrevieja. Après un choc ou une bosse, nous évaluons la réparation de carrosserie et la peinture d’un élément ou du véhicule complet. En cas de déformation ou de corrosion, nous examinons les besoins en redressage sur marbre, réparation de tôle et soudure avant peinture ou protection du soubassement.", "Avant de vous déplacer, envoyez des vues d’ensemble et des gros plans par WhatsApp pour une première estimation. Les photos ne permettent pas de confirmer des dégâts cachés ni un prix définitif. Les travaux et le devis sont convenus après examen à Torrevieja ; nous n’avons ni atelier ni service de réparation à domicile à Elche."],
  },
  pl: {
    specialist: "Jeśli szukasz blacharza lub lakiernika samochodowego w Torrevieja, w PaintLab uzgodnisz naprawę blacharską i późniejsze lakierowanie. Najpierw przywracamy kształt uszkodzonego elementu, a dopiero potem przygotowujemy podłoże i nakładamy lakier.",
    elcheGroup: "Elche i okolice",
    elcheHeading: "Naprawy blacharsko-lakiernicze dla klientów z Elche / Elx",
    elcheParagraphs: ["Przyjmujemy samochody z Elche / Elx w naszym warsztacie w Torrevieja. Po kolizji lub wgnieceniu oceniamy naprawę nadwozia oraz lakierowanie elementów albo całego auta. Przy deformacjach i korozji sprawdzamy potrzebę prostowania na ramie, naprawy blach i spawania przed lakierowaniem lub zabezpieczeniem podwozia.", "Przed przyjazdem wyślij przez WhatsApp zdjęcia ogólne i zbliżenia uszkodzeń do wstępnej wyceny. Fotografie nie potwierdzają ukrytych szkód ani ostatecznej ceny. Zakres i koszt ustalamy po oględzinach w Torrevieja; w Elche nie mamy oddziału ani napraw z dojazdem."],
  },
  nl: {
    specialist: "Zoekt u een plaatwerker of autospuiter in Torrevieja? Bij PaintLab worden plaatwerkherstel en spuitwerk op elkaar afgestemd: eerst herstellen we de vorm van het beschadigde paneel, daarna volgen de voorbereiding en de lakafwerking.",
    elcheGroup: "Elche en omgeving",
    elcheHeading: "Schadeherstel en spuitwerk voor klanten uit Elche / Elx",
    elcheParagraphs: ["Ook auto's uit Elche / Elx zijn welkom in onze werkplaats in Torrevieja. Na een aanrijding of deuk beoordelen we het carrosserieherstel en het spuiten van een onderdeel of de hele auto. Bij vervorming of roest bekijken we welk richtbankwerk, plaatwerkherstel en laswerk nodig is vóór de lakafwerking of bodembescherming.", "Stuur vóór uw bezoek overzichtsfoto's en detailfoto's via WhatsApp voor een eerste kosteninschatting. Foto's bevestigen geen verborgen schade of definitieve prijs. We spreken de werkzaamheden en offerte af na inspectie in Torrevieja; in Elche hebben we geen vestiging of mobiele reparatiedienst."],
  },
  it: {
    specialist: "Cerchi un carrozziere o un verniciatore auto a Torrevieja? In PaintLab concordiamo insieme la riparazione della lamiera e la verniciatura: prima si recupera la forma del pezzo, poi si prepara la superficie e si realizza la finitura.",
    elcheGroup: "Elche e dintorni",
    elcheHeading: "Carrozzeria e verniciatura per clienti di Elche / Elx",
    elcheParagraphs: ["Accogliamo anche le auto di Elche / Elx nella nostra carrozzeria a Torrevieja. Dopo un urto o un’ammaccatura valutiamo la riparazione e la verniciatura di singoli elementi o dell’intera auto. In presenza di deformazioni o corrosione esaminiamo gli interventi sul banco di riscontro, sulla lamiera e le saldature necessari prima della verniciatura o della protezione del sottoscocca.", "Prima di partire, invia foto d’insieme e dettagli dei danni su WhatsApp per una prima stima. Le foto non confermano danni nascosti né un prezzo definitivo. Concordiamo lavori e preventivo dopo l’esame a Torrevieja; a Elche non abbiamo una sede né un servizio di riparazione a domicilio."],
  },
  nb: {
    specialist: "Trenger du en biloppretter eller billakkerer i Torrevieja? Hos PaintLab planlegges oppretting og lakkering sammen: først gjenopprettes formen på den skadde delen, deretter klargjøres og lakkeres overflaten.",
    elcheGroup: "Elche og nærområdet",
    elcheHeading: "Karosserireparasjon og lakkering for kunder fra Elche / Elx",
    elcheParagraphs: ["Vi tar også imot biler fra Elche / Elx på verkstedet vårt i Torrevieja. Etter kollisjonsskader eller bulker vurderer vi karosserireparasjon og lakkering av enkeltdeler eller hele bilen. Ved deformasjon eller rust undersøker vi behovet for oppretting på jigg, platereparasjon og sveising før lakkering eller understellsbeskyttelse.", "Send oversiktsbilder og nærbilder på WhatsApp før du kjører hit, for et foreløpig prisanslag. Bilder kan ikke bekrefte skjulte skader eller endelig pris. Arbeidsomfang og pris avtales etter undersøkelse i Torrevieja; vi har verken avdeling eller mobil reparasjonstjeneste i Elche."],
  },
  fi: {
    specialist: "Etsitkö autopeltiseppää tai automaalaria Torreviejasta? PaintLabissa peltikorjaus ja maalaus suunnitellaan yhdessä: vaurioituneen osan muoto palautetaan ensin, ja vasta sen jälkeen tehdään pohjatyöt ja maalaus.",
    elcheGroup: "Elche ja lähialueet",
    elcheHeading: "Korikorjaus ja maalaus Elchen / Elxin asiakkaille",
    elcheParagraphs: ["Otamme myös Elchen / Elxin alueelta tulevia autoja vastaan Torreviejan korjaamossamme. Kolarivaurion tai lommon jälkeen arvioimme korikorjauksen sekä osan tai koko auton maalauksen. Muodonmuutosten tai ruosteen yhteydessä selvitämme oikaisupenkin, peltikorjausten ja hitsauksen tarpeen ennen maalausta tai alustan suojausta.", "Lähetä ennen matkaa WhatsAppissa yleiskuvia ja lähikuvia vaurioista alustavaa kustannusarviota varten. Kuvat eivät vahvista piilovaurioita tai lopullista hintaa. Työn laajuus ja hinta sovitaan Torreviejassa tehtävän tarkastuksen jälkeen; Elchessä meillä ei ole toimipistettä eikä liikkuvaa korjauspalvelua."],
  },
  da: {
    specialist: "Leder du efter en pladesmed eller autolakerer i Torrevieja? Hos PaintLab planlægges pladearbejde og lakering samlet: først genskabes formen på den beskadigede del, derefter forberedes og lakeres overfladen.",
    elcheGroup: "Elche og omegn",
    elcheHeading: "Karrosserireparation og lakering for kunder fra Elche / Elx",
    elcheParagraphs: ["Vi tager også imod biler fra Elche / Elx på vores værksted i Torrevieja. Efter en påkørsel eller bule vurderer vi karrosserireparation samt lakering af enkelte dele eller hele bilen. Ved deformation eller rust undersøger vi behovet for rettebænk, pladereparation og svejsning før lakering eller undervognsbeskyttelse.", "Send oversigtsbilleder og nærbilleder af skaderne via WhatsApp før turen for et foreløbigt prisoverslag. Billeder kan ikke bekræfte skjulte skader eller en endelig pris. Arbejdets omfang og pris aftales efter besigtigelse i Torrevieja; vi har hverken afdeling eller udkørende reparation i Elche."],
  },
  sv: {
    specialist: "Söker du en bilplåtslagare eller billackerare i Torrevieja? Hos PaintLab planeras plåtreparation och lackering tillsammans: först återställs den skadade delens form, sedan förbereds och lackeras ytan.",
    elcheGroup: "Elche med omnejd",
    elcheHeading: "Karossreparation och lackering för kunder från Elche / Elx",
    elcheParagraphs: ["Vi tar även emot bilar från Elche / Elx på vår verkstad i Torrevieja. Efter krockskador eller bucklor bedömer vi karossreparation samt lackering av enstaka delar eller hela bilen. Vid deformation eller rost undersöker vi behovet av riktbänk, plåtreparation och svetsning före lackering eller underredsbehandling.", "Skicka översiktsbilder och närbilder via WhatsApp före resan för en preliminär kostnadsbedömning. Bilder kan inte bekräfta dolda skador eller ett slutligt pris. Arbetets omfattning och pris avtalas efter undersökning i Torrevieja; vi har ingen filial eller mobil reparationsservice i Elche."],
  },
  sk: {
    specialist: "Hľadáte autoklampiara alebo autolakýrnika v Torrevieji? V PaintLab plánujeme klampiarsku opravu a lakovanie spoločne: najprv obnovíme tvar poškodeného dielu, potom pripravíme povrch a nanesieme lak.",
    elcheGroup: "Elche a okolie",
    elcheHeading: "Opravy karosérie a lakovanie pre zákazníkov z Elche / Elx",
    elcheParagraphs: ["V našej dielni v Torrevieji prijímame aj autá z Elche / Elx. Po nehode alebo preliačení posúdime opravu karosérie a lakovanie jednotlivých dielov alebo celého auta. Pri deformácii či korózii preveríme potrebu rovnacieho rámu, opravy plechu a zvárania pred lakovaním alebo ochranou podvozka.", "Pred cestou pošlite cez WhatsApp celkové zábery a detaily poškodenia na predbežný odhad ceny. Fotografie nepotvrdia skryté poškodenie ani konečnú cenu. Rozsah a cenu dohodneme po obhliadke v Torrevieji; v Elche nemáme pobočku ani výjazdovú opravu."],
  },
  hu: {
    specialist: "Karosszérialakatost vagy autófényezőt keres Torreviejában? A PaintLabnál a lemezjavítást és a fényezést együtt tervezzük meg: először a sérült elem alakját állítjuk helyre, majd az előkészítés és a fényezés következik.",
    elcheGroup: "Elche és környéke",
    elcheHeading: "Karosszériajavítás és fényezés Elche / Elx ügyfeleinek",
    elcheParagraphs: ["Elche / Elx környékéről is fogadunk autókat torreviejai műhelyünkben. Ütközés vagy horpadás után felmérjük a karosszériajavítást és az egyes elemek vagy a teljes autó fényezését. Deformáció vagy korrózió esetén megvizsgáljuk a húzatópados munka, a lemezjavítás és a hegesztés szükségességét a fényezés vagy alvázvédelem előtt.", "Indulás előtt küldjön áttekintő és közeli képeket WhatsAppon az előzetes költségbecsléshez. A képek nem igazolják a rejtett sérüléseket vagy a végleges árat. A munkáról és az árról a torreviejai vizsgálat után állapodunk meg; Elchében nincs telephelyünk és helyszíni javítást sem végzünk."],
  },
  bg: {
    specialist: "Търсите автотенекеджия или автобояджия в Торевиеха? В PaintLab планираме тенекеджийския ремонт и боядисването заедно: първо възстановяваме формата на повредения детайл, а след това подготвяме и боядисваме повърхността.",
    elcheGroup: "Елче и околностите",
    elcheHeading: "Тенекеджийски ремонт и боядисване за клиенти от Елче / Elx",
    elcheParagraphs: ["Приемаме автомобили от Елче / Elx в нашия сервиз в Торевиеха. След удар или вдлъбнатина оценяваме ремонта на купето и боядисването на отделни детайли или целия автомобил. При деформация или корозия проверяваме необходимостта от изправяне на стенд, ремонт на ламарината и заваряване преди боядисване или защита на пода.", "Преди пътуването изпратете общи и детайлни снимки по WhatsApp за предварителна оценка на цената. Снимките не потвърждават скрити повреди или окончателна цена. Обемът и цената се договарят след оглед в Торевиеха; нямаме филиал или мобилен ремонт в Елче."],
  },
  pt: {
    specialist: "Procura um bate-chapas ou pintor de automóveis em Torrevieja? Na PaintLab, a reparação da chapa e a pintura são planeadas em conjunto: primeiro recupera-se a forma da peça danificada, depois prepara-se a superfície e aplica-se o acabamento.",
    elcheGroup: "Elche e arredores",
    elcheHeading: "Chapa e pintura para clientes de Elche / Elx",
    elcheParagraphs: ["Também recebemos carros de Elche / Elx na nossa oficina em Torrevieja. Após uma colisão ou amolgadela, avaliamos a reparação da carroçaria e a pintura de peças ou do carro completo. Se houver deformação ou corrosão, verificamos a necessidade de bancada, reparação da chapa e soldadura antes da pintura ou proteção da parte inferior do veículo.", "Antes da viagem, envie fotografias gerais e de pormenor por WhatsApp para uma estimativa inicial. As imagens não confirmam danos ocultos nem um preço definitivo. Os trabalhos e o orçamento são acordados após inspeção em Torrevieja; não temos filial nem reparação ao domicílio em Elche."],
  },
  el: {
    specialist: "Αναζητάτε φανοποιό ή βαφέα αυτοκινήτων στην Torrevieja; Στην PaintLab σχεδιάζουμε μαζί την επισκευή της λαμαρίνας και τη βαφή: πρώτα αποκαθίσταται το σχήμα του τμήματος και μετά ακολουθούν η προετοιμασία και το βάψιμο.",
    elcheGroup: "Elche και γύρω περιοχές",
    elcheHeading: "Φανοποιία και βαφή για πελάτες από το Elche / Elx",
    elcheParagraphs: ["Δεχόμαστε και αυτοκίνητα από το Elche / Elx στο συνεργείο μας στην Torrevieja. Μετά από σύγκρουση ή βαθούλωμα αξιολογούμε την επισκευή του αμαξώματος και τη βαφή μεμονωμένων τμημάτων ή ολόκληρου του αυτοκινήτου. Σε παραμόρφωση ή διάβρωση εξετάζουμε την ανάγκη για καλίμπρα, επισκευή λαμαρίνας και συγκόλληση πριν από τη βαφή ή την προστασία του κάτω μέρους.", "Πριν από τη διαδρομή, στείλτε γενικές και κοντινές φωτογραφίες μέσω WhatsApp για αρχική εκτίμηση κόστους. Οι εικόνες δεν επιβεβαιώνουν κρυφές ζημιές ή τελική τιμή. Συμφωνούμε τις εργασίες και την προσφορά μετά τον έλεγχο στην Torrevieja· δεν έχουμε υποκατάστημα ή κινητό συνεργείο στο Elche."],
  },
  cs: {
    specialist: "Hledáte autoklempíře nebo autolakýrníka v Torrevieje? V PaintLab plánujeme klempířskou opravu a lakování společně: nejprve obnovíme tvar poškozeného dílu, poté připravíme povrch a naneseme lak.",
    elcheGroup: "Elche a okolí",
    elcheHeading: "Opravy karoserie a lakování pro zákazníky z Elche / Elx",
    elcheParagraphs: ["V naší dílně v Torrevieje přijímáme i vozy z Elche / Elx. Po nehodě nebo promáčknutí posoudíme opravu karoserie a lakování jednotlivých dílů či celého auta. Při deformaci nebo korozi prověříme potřebu rovnacího rámu, opravy plechu a svařování před lakováním nebo ochranou podvozku.", "Před cestou pošlete přes WhatsApp celkové záběry a detaily poškození pro předběžný odhad ceny. Fotografie nepotvrdí skryté poškození ani konečnou cenu. Rozsah a cenu dohodneme po prohlídce v Torrevieje; v Elche nemáme pobočku ani výjezdový servis."],
  },
} satisfies Record<Locale, BodyWorkshopCommercialCopy>;
