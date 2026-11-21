import type { Locale } from "@/config/locales";

type DoorCopy = {
  title: string;
  paragraphs: readonly [string, string, string];
  category: string;
  services: readonly string[];
  beforeAlt: string;
  afterAlt: string;
  detailTitle: string;
};

export const nissanDoorCopy = {
  es: {
    title: "Reparación y pintura de puerta Nissan en Torrevieja",
    paragraphs: ["La puerta presentaba una deformación importante y daños en la pintura.", "Reparamos y nivelamos la zona dañada, preparamos la superficie y realizamos el proceso de pintura para recuperar la forma, el color y un acabado uniforme.", "El resultado puede verse en la comparación antes y después."],
    category: "Reparación y pintura de puerta",
    services: ["Reparación de la superficie deformada", "Nivelado de la zona dañada", "Preparación de la superficie", "Pintura de la puerta", "Recuperación del aspecto exterior"],
    beforeAlt: "Puerta Nissan con abolladura y daños en la pintura antes de la reparación en Torrevieja", afterAlt: "Puerta Nissan después de reparar la abolladura y pintar la superficie", detailTitle: "Otra vista de la puerta antes y después",
  },
  en: {
    title: "Nissan door repair and painting in Torrevieja",
    paragraphs: ["The door had a significant dent and damage to the paintwork.", "The damaged area was repaired and levelled, the surface was prepared and the door was repainted to restore its shape, colour and an even finish.", "The result can be seen in the before-and-after comparison."],
    category: "Door repair and painting",
    services: ["Repair of the deformed surface", "Levelling of the damaged area", "Surface preparation", "Door painting", "Restoration of the appearance"],
    beforeAlt: "Nissan door with a deep dent and damaged paintwork before repair in Torrevieja", afterAlt: "Nissan door after dent repair and repainting", detailTitle: "Another view of the door before and after",
  },
  ru: {
    title: "Ремонт и покраска двери Nissan в Торревьехе",
    paragraphs: ["На двери была сильная вмятина и повреждение лакокрасочного покрытия.", "Повреждённый участок восстановили и выровняли, подготовили поверхность и выполнили покраску, чтобы вернуть правильную форму, цвет и ровный внешний вид.", "Результат хорошо виден на фотографиях до и после ремонта."],
    category: "Ремонт и покраска двери",
    services: ["Ремонт деформированной поверхности", "Выравнивание повреждённого участка", "Подготовка поверхности", "Покраска двери", "Восстановление внешнего вида"],
    beforeAlt: "Дверь Nissan с сильной вмятиной и повреждением покрытия до ремонта в Торревьехе", afterAlt: "Дверь Nissan после устранения вмятины и покраски", detailTitle: "Другой ракурс двери до и после ремонта",
  },
  uk: {
    title: "Ремонт і фарбування дверей Nissan у Торрев’єсі",
    paragraphs: ["На дверях була значна вм’ятина та пошкодження лакофарбового покриття.", "Пошкоджену ділянку відновили й вирівняли, підготували поверхню та пофарбували двері, щоб повернути форму, колір і рівний зовнішній вигляд.", "Результат видно на фотографіях до та після ремонту."],
    category: "Ремонт і фарбування дверей",
    services: ["Ремонт деформованої поверхні", "Вирівнювання пошкодженої ділянки", "Підготовка поверхні", "Фарбування дверей", "Відновлення зовнішнього вигляду"],
    beforeAlt: "Двері Nissan зі значною вм’ятиною та пошкодженим покриттям до ремонту в Торрев’єсі", afterAlt: "Двері Nissan після усунення вм’ятини та фарбування", detailTitle: "Інший ракурс дверей до та після ремонту",
  },
  de: {
    title: "Reparatur und Lackierung einer Nissan-Tür in Torrevieja",
    paragraphs: ["Die Tür hatte eine starke Delle und Schäden am Lack.", "Der beschädigte Bereich wurde instand gesetzt und geglättet. Anschließend wurde die Oberfläche vorbereitet und die Tür lackiert, um Form, Farbton und ein gleichmäßiges Erscheinungsbild wiederherzustellen.", "Das Ergebnis zeigt der Vorher-Nachher-Vergleich."],
    category: "Türreparatur und Lackierung",
    services: ["Instandsetzung der verformten Oberfläche", "Glättung des beschädigten Bereichs", "Vorbereitung der Oberfläche", "Lackierung der Tür", "Wiederherstellung des Erscheinungsbilds"],
    beforeAlt: "Nissan-Tür mit starker Delle und Lackschaden vor der Reparatur in Torrevieja", afterAlt: "Nissan-Tür nach Beseitigung der Delle und Lackierung", detailTitle: "Weitere Ansicht der Tür vor und nach der Reparatur",
  },
  fr: {
    title: "Réparation et peinture d’une porte Nissan à Torrevieja",
    paragraphs: ["La porte présentait un enfoncement important et des dommages à la peinture.", "La zone endommagée a été réparée et égalisée, puis la surface préparée et la porte repeinte pour retrouver sa forme, sa couleur et une finition uniforme.", "Le résultat est visible sur la comparaison avant et après réparation."],
    category: "Réparation et peinture de porte",
    services: ["Réparation de la surface déformée", "Égalisation de la zone endommagée", "Préparation de la surface", "Peinture de la porte", "Restauration de l’aspect extérieur"],
    beforeAlt: "Porte Nissan fortement enfoncée avec peinture abîmée avant réparation à Torrevieja", afterAlt: "Porte Nissan après réparation de l’enfoncement et peinture", detailTitle: "Autre vue de la porte avant et après réparation",
  },
  pl: {
    title: "Naprawa i lakierowanie drzwi Nissan w Torrevieja",
    paragraphs: ["Na drzwiach było duże wgniecenie i uszkodzenie powłoki lakierniczej.", "Uszkodzony obszar naprawiono i wyrównano, przygotowano powierzchnię, a następnie polakierowano drzwi, przywracając ich kształt, kolor i równy wygląd.", "Efekt widać na zdjęciach przed naprawą i po naprawie."],
    category: "Naprawa i lakierowanie drzwi",
    services: ["Naprawa odkształconej powierzchni", "Wyrównanie uszkodzonego obszaru", "Przygotowanie powierzchni", "Lakierowanie drzwi", "Przywrócenie wyglądu zewnętrznego"],
    beforeAlt: "Drzwi Nissan z dużym wgnieceniem i uszkodzonym lakierem przed naprawą w Torrevieja", afterAlt: "Drzwi Nissan po naprawie wgniecenia i lakierowaniu", detailTitle: "Inne ujęcie drzwi przed naprawą i po naprawie",
  },
  nl: {
    title: "Reparatie en spuitwerk van een Nissan-deur in Torrevieja",
    paragraphs: ["De deur had een flinke deuk en beschadigde lak.", "Het beschadigde gedeelte is hersteld en vlak gemaakt. Daarna is het oppervlak voorbereid en de deur gespoten om de vorm, kleur en een egale afwerking terug te brengen.", "Het resultaat is te zien in de vergelijking voor en na de reparatie."],
    category: "Deurreparatie en spuitwerk",
    services: ["Herstel van het vervormde oppervlak", "Egaliseren van het beschadigde gedeelte", "Voorbereiden van het oppervlak", "Spuiten van de deur", "Herstel van het uiterlijk"],
    beforeAlt: "Nissan-deur met een diepe deuk en lakschade voor reparatie in Torrevieja", afterAlt: "Nissan-deur na deukherstel en spuitwerk", detailTitle: "Andere kijk op de deur voor en na de reparatie",
  },
  it: {
    title: "Riparazione e verniciatura di una porta Nissan a Torrevieja",
    paragraphs: ["La porta presentava un’ammaccatura importante e danni alla vernice.", "La zona danneggiata è stata riparata e livellata, la superficie preparata e la porta riverniciata per recuperarne la forma, il colore e una finitura uniforme.", "Il risultato è visibile nel confronto prima e dopo la riparazione."],
    category: "Riparazione e verniciatura porta",
    services: ["Riparazione della superficie deformata", "Livellamento della zona danneggiata", "Preparazione della superficie", "Verniciatura della porta", "Ripristino dell’aspetto esterno"],
    beforeAlt: "Porta Nissan con forte ammaccatura e vernice danneggiata prima della riparazione a Torrevieja", afterAlt: "Porta Nissan dopo la riparazione dell’ammaccatura e la verniciatura", detailTitle: "Altra vista della porta prima e dopo la riparazione",
  },
  nb: {
    title: "Reparasjon og lakkering av en Nissan-dør i Torrevieja",
    paragraphs: ["Døren hadde en kraftig bulk og skader i lakken.", "Det skadde området ble reparert og jevnet ut. Deretter ble overflaten klargjort og døren lakkert for å gjenopprette formen, fargen og en jevn overflate.", "Resultatet vises i sammenligningen før og etter reparasjonen."],
    category: "Dørreparasjon og lakkering",
    services: ["Reparasjon av den deformerte overflaten", "Utjevning av det skadde området", "Klargjøring av overflaten", "Lakkering av døren", "Gjenoppretting av utseendet"],
    beforeAlt: "Nissan-dør med en kraftig bulk og lakkskader før reparasjon i Torrevieja", afterAlt: "Nissan-dør etter reparasjon av bulken og lakkering", detailTitle: "En annen vinkel på døren før og etter reparasjonen",
  },
  fi: {
    title: "Nissanin oven korjaus ja maalaus Torreviejassa",
    paragraphs: ["Ovessa oli suuri painauma ja maalipinnan vaurioita.", "Vaurioitunut alue korjattiin ja tasoitettiin. Sen jälkeen pinta valmisteltiin ja ovi maalattiin muodon, värin ja tasaisen ulkonäön palauttamiseksi.", "Tulos näkyy ennen korjausta ja sen jälkeen otettujen kuvien vertailussa."],
    category: "Oven korjaus ja maalaus",
    services: ["Vääntyneen pinnan korjaus", "Vaurioituneen alueen tasoitus", "Pinnan valmistelu", "Oven maalaus", "Ulkonäön palauttaminen"],
    beforeAlt: "Nissanin ovi, jossa on suuri painauma ja maalivaurioita ennen korjausta Torreviejassa", afterAlt: "Nissanin ovi painauman korjauksen ja maalauksen jälkeen", detailTitle: "Ovi toisesta kuvakulmasta ennen korjausta ja sen jälkeen",
  },
  da: {
    title: "Reparation og lakering af en Nissan-dør i Torrevieja",
    paragraphs: ["Døren havde en kraftig bule og skader i lakken.", "Det beskadigede område blev repareret og udjævnet. Derefter blev overfladen klargjort og døren lakeret for at genskabe formen, farven og en ensartet finish.", "Resultatet kan ses i sammenligningen før og efter reparationen."],
    category: "Dørreparation og lakering",
    services: ["Reparation af den deformerede overflade", "Udjævning af det beskadigede område", "Klargøring af overfladen", "Lakering af døren", "Genskabelse af udseendet"],
    beforeAlt: "Nissan-dør med en kraftig bule og lakskader før reparation i Torrevieja", afterAlt: "Nissan-dør efter reparation af bulen og lakering", detailTitle: "En anden vinkel på døren før og efter reparationen",
  },
  sv: {
    title: "Reparation och lackering av en Nissan-dörr i Torrevieja",
    paragraphs: ["Dörren hade en kraftig buckla och skador i lacken.", "Det skadade området reparerades och jämnades till. Därefter förbereddes ytan och dörren lackerades för att återställa formen, kulören och ett jämnt utseende.", "Resultatet syns i jämförelsen före och efter reparationen."],
    category: "Dörrreparation och lackering",
    services: ["Reparation av den deformerade ytan", "Utjämning av det skadade området", "Förberedelse av ytan", "Lackering av dörren", "Återställning av utseendet"],
    beforeAlt: "Nissan-dörr med en kraftig buckla och lackskador före reparation i Torrevieja", afterAlt: "Nissan-dörr efter reparation av bucklan och lackering", detailTitle: "En annan vy av dörren före och efter reparationen",
  },
  sk: {
    title: "Oprava a lakovanie dverí Nissan v Torrevieji",
    paragraphs: ["Na dverách bola výrazná preliačina a poškodený lak.", "Poškodené miesto sme opravili a vyrovnali, pripravili povrch a dvere nalakovali, aby sme obnovili tvar, farbu a rovnomerný vzhľad.", "Výsledok vidno na porovnaní pred opravou a po oprave."],
    category: "Oprava a lakovanie dverí",
    services: ["Oprava deformovaného povrchu", "Vyrovnanie poškodeného miesta", "Príprava povrchu", "Lakovanie dverí", "Obnova vonkajšieho vzhľadu"],
    beforeAlt: "Dvere Nissan s výraznou preliačinou a poškodeným lakom pred opravou v Torrevieji", afterAlt: "Dvere Nissan po oprave preliačiny a lakovaní", detailTitle: "Iný pohľad na dvere pred opravou a po oprave",
  },
  hu: {
    title: "Nissan-ajtó javítása és fényezése Torreviejában",
    paragraphs: ["Az ajtón jelentős horpadás és fényezési sérülés volt.", "A sérült részt megjavítottuk és kiegyenlítettük, előkészítettük a felületet, majd újrafényeztük az ajtót a forma, a szín és az egyenletes megjelenés helyreállításához.", "Az eredmény a javítás előtti és utáni összehasonlításon látható."],
    category: "Ajtójavítás és fényezés",
    services: ["A deformálódott felület javítása", "A sérült rész kiegyenlítése", "Felület-előkészítés", "Az ajtó fényezése", "A külső megjelenés helyreállítása"],
    beforeAlt: "Nissan-ajtó jelentős horpadással és fényezési sérüléssel a javítás előtt Torreviejában", afterAlt: "Nissan-ajtó a horpadás javítása és fényezés után", detailTitle: "Az ajtó másik nézetből a javítás előtt és után",
  },
  bg: {
    title: "Ремонт и боядисване на врата Nissan в Торевиеха",
    paragraphs: ["По вратата имаше силна вдлъбнатина и повредено лаково покритие.", "Повреденият участък беше възстановен и изравнен, повърхността подготвена и вратата боядисана, за да се възстановят формата, цветът и равномерният външен вид.", "Резултатът се вижда в сравнението преди и след ремонта."],
    category: "Ремонт и боядисване на врата",
    services: ["Ремонт на деформираната повърхност", "Изравняване на повредения участък", "Подготовка на повърхността", "Боядисване на вратата", "Възстановяване на външния вид"],
    beforeAlt: "Врата Nissan със силна вдлъбнатина и повредено покритие преди ремонта в Торевиеха", afterAlt: "Врата Nissan след ремонт на вдлъбнатината и боядисване", detailTitle: "Друг изглед на вратата преди и след ремонта",
  },
  pt: {
    title: "Reparação e pintura de uma porta Nissan em Torrevieja",
    paragraphs: ["A porta apresentava uma amolgadela acentuada e danos na pintura.", "Reparámos e nivelámos a zona danificada, preparámos a superfície e pintámos a porta para recuperar a forma, a cor e um acabamento uniforme.", "O resultado pode ser visto na comparação antes e depois da reparação."],
    category: "Reparação e pintura de porta",
    services: ["Reparação da superfície deformada", "Nivelamento da zona danificada", "Preparação da superfície", "Pintura da porta", "Recuperação do aspeto exterior"],
    beforeAlt: "Porta Nissan com amolgadela acentuada e pintura danificada antes da reparação em Torrevieja", afterAlt: "Porta Nissan após reparação da amolgadela e pintura", detailTitle: "Outra vista da porta antes e depois da reparação",
  },
  el: {
    title: "Επισκευή και βαφή πόρτας Nissan στην Torrevieja",
    paragraphs: ["Η πόρτα είχε έντονο βαθούλωμα και φθορά στη βαφή.", "Το κατεστραμμένο σημείο επισκευάστηκε και εξομαλύνθηκε, η επιφάνεια προετοιμάστηκε και η πόρτα βάφτηκε για να αποκατασταθούν το σχήμα, το χρώμα και η ομοιόμορφη εμφάνιση.", "Το αποτέλεσμα φαίνεται στη σύγκριση πριν και μετά την επισκευή."],
    category: "Επισκευή και βαφή πόρτας",
    services: ["Επισκευή της παραμορφωμένης επιφάνειας", "Εξομάλυνση του κατεστραμμένου σημείου", "Προετοιμασία της επιφάνειας", "Βαφή της πόρτας", "Αποκατάσταση της εξωτερικής εμφάνισης"],
    beforeAlt: "Πόρτα Nissan με έντονο βαθούλωμα και φθαρμένη βαφή πριν την επισκευή στην Torrevieja", afterAlt: "Πόρτα Nissan μετά την επισκευή του βαθουλώματος και τη βαφή", detailTitle: "Άλλη όψη της πόρτας πριν και μετά την επισκευή",
  },
  cs: {
    title: "Oprava a lakování dveří Nissan v Torrevieje",
    paragraphs: ["Na dveřích byla výrazná promáčklina a poškozený lak.", "Poškozené místo jsme opravili a vyrovnali, připravili povrch a dveře nalakovali, abychom obnovili tvar, barvu a rovnoměrný vzhled.", "Výsledek je vidět na porovnání před opravou a po opravě."],
    category: "Oprava a lakování dveří",
    services: ["Oprava deformovaného povrchu", "Vyrovnání poškozeného místa", "Příprava povrchu", "Lakování dveří", "Obnova vnějšího vzhledu"],
    beforeAlt: "Dveře Nissan s výraznou promáčklinou a poškozeným lakem před opravou v Torrevieje", afterAlt: "Dveře Nissan po opravě promáčkliny a lakování", detailTitle: "Jiný pohled na dveře před opravou a po opravě",
  },
} satisfies Record<Locale, DoorCopy>;
