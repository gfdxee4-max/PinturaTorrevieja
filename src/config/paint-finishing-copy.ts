import type { Locale } from "@/config/i18n";

type FinishingCopy = {
  polishHeading: string;
  polish: string;
  headlightsHeading: string;
  headlights: string;
};

export const paintFinishingCopy: Record<Locale, FinishingCopy> = {
  es: {
    polishHeading: "Pulido de carrocería",
    polish: "El pulido a máquina permite ajustar la corrección de pintura al estado de cada zona. Solo se plantea cuando la laca conserva suficiente espesor y está estable, sin intentar eliminar mediante pulido defectos que necesitan reparación y pintura.",
    headlightsHeading: "Pulido de faros",
    headlights: "",
  },
  en: {
    polishHeading: "Car polishing and paint correction in Torrevieja",
    polish: "Machine polishing can restore paint shine and reduce light surface scratches and swirl marks when the clear coat is sound and has enough remaining thickness. We inspect dull or sun-faded paint before deciding how much paint correction is suitable. Polishing cannot replace peeling or missing paint; scratches through the clear coat or colour layer may need bodywork preparation and repainting.",
    headlightsHeading: "Headlight restoration",
    headlights: "Headlight polishing can improve the clarity of cloudy or yellowed outer plastic covers where the surface condition allows it. We assess the exterior first: cracks, internal moisture or damage inside the headlight are not corrected by external polishing.",
  },
  ru: {
    polishHeading: "Полировка кузова и коррекция ЛКП в Торревьехе",
    polish: "Машинная полировка автомобиля может восстановить блеск и уменьшить мелкие поверхностные царапины, паутинку на лаке и следы мойки, если лак стабилен и имеет достаточную остаточную толщину. Тусклую или выгоревшую краску осматриваем перед выбором допустимой коррекции ЛКП. Полировка не восстанавливает отсутствующие или отслоившиеся слои: если царапина прошла через лак или краску, могут потребоваться кузовная подготовка и окраска.",
    headlightsHeading: "Полировка и восстановление прозрачности фар",
    headlights: "Полировка пластиковых фар может уменьшить наружную мутность и пожелтение, если состояние поверхности позволяет восстановить её прозрачность. Сначала оцениваем внешний износ: трещины, внутреннюю влагу и повреждения внутри фары наружная полировка не устраняет.",
  },
  uk: {
    polishHeading: "Полірування кузова та корекція ЛФП у Торрев’єсі",
    polish: "Машинне полірування автомобіля може відновити блиск і зменшити дрібні поверхневі подряпини та сліди миття, якщо лак стабільний і має достатню залишкову товщину. Тьмяну або вигорілу фарбу оглядаємо перед вибором допустимої корекції ЛФП. Полірування не відновлює відсутні чи відшаровані шари: якщо подряпина пройшла крізь лак або фарбу, можуть знадобитися кузовна підготовка та фарбування.",
    headlightsHeading: "Полірування та відновлення прозорості фар",
    headlights: "Полірування пластикових фар може зменшити зовнішнє помутніння та пожовтіння, якщо стан поверхні дозволяє відновити її прозорість. Спочатку оцінюємо зовнішній знос: тріщини, внутрішню вологу та пошкодження всередині фари зовнішнє полірування не усуває.",
  },
  de: {
    polishHeading: "Autopolitur und Lackkorrektur in Torrevieja",
    polish: "Eine maschinelle Politur kann den Lackglanz wiederherstellen und leichte Oberflächen- oder Waschkratzer mindern, wenn der Klarlack stabil und noch ausreichend dick ist. Stumpfen oder ausgeblichenen Lack prüfen wir vor der Entscheidung über eine geeignete Lackaufbereitung. Polieren ersetzt keine fehlenden oder abblätternden Schichten; reichen Kratzer durch Klar- oder Farblack, können Vorbereitung und Neulackierung nötig sein.",
    headlightsHeading: "Aufbereitung der Scheinwerfer",
    headlights: "Das Polieren der äußeren Kunststoffabdeckungen kann bei matten oder vergilbten Scheinwerfern die Klarheit verbessern, sofern der Oberflächenzustand es zulässt. Zuerst wird der äußere Verschleiß beurteilt: Risse, Feuchtigkeit im Inneren und Schäden innerhalb des Scheinwerfers werden durch äußeres Polieren nicht behoben.",
  },
  fr: {
    polishHeading: "Polissage de carrosserie et correction du vernis à Torrevieja",
    polish: "Le polissage mécanique peut raviver la brillance et atténuer les micro-rayures ainsi que les traces de lavage si le vernis est stable et conserve une épaisseur suffisante. Une peinture terne ou décolorée par le soleil est examinée avant de définir la correction de peinture adaptée. Le polissage ne remplace pas les couches manquantes ou écaillées ; une rayure traversant le vernis ou la couleur peut nécessiter une préparation et une remise en peinture.",
    headlightsHeading: "Rénovation et polissage des phares",
    headlights: "Le polissage peut améliorer la transparence des surfaces extérieures en plastique devenues opaques ou jaunies, si leur état le permet. Nous examinons d’abord l’usure extérieure : fissures, humidité interne et dommages à l’intérieur du phare ne sont pas corrigés par ce polissage.",
  },
  pl: {
    polishHeading: "Polerowanie samochodu i korekta lakieru w Torrevieja",
    polish: "Polerowanie maszynowe może przywrócić połysk oraz ograniczyć drobne rysy powierzchniowe i ślady mycia, jeśli lakier bezbarwny jest stabilny i zachował odpowiednią grubość. Matowy lub wyblakły od słońca lakier oglądamy przed doborem zakresu korekty. Polerowanie nie odtwarza brakujących ani łuszczących się warstw; rysy przechodzące przez lakier bezbarwny lub kolor mogą wymagać przygotowania i ponownego lakierowania.",
    headlightsHeading: "Renowacja i polerowanie reflektorów",
    headlights: "Polerowanie zewnętrznych kloszy z tworzywa może poprawić przejrzystość zmatowiałych lub pożółkłych reflektorów, jeśli pozwala na to stan powierzchni. Najpierw oceniamy zużycie zewnętrzne: pęknięć, wilgoci wewnątrz i uszkodzeń wewnętrznych reflektora nie usuwa zewnętrzne polerowanie.",
  },
  nl: {
    polishHeading: "Auto polijsten en lakcorrectie in Torrevieja",
    polish: "Machinaal polijsten kan de glans herstellen en lichte oppervlaktekrassen en waskrassen verminderen als de blanke lak stabiel en nog voldoende dik is. Doffe of door de zon verkleurde lak beoordelen we voordat we de passende lakcorrectie bepalen. Polijsten vervangt geen ontbrekende of afbladderende lagen; krassen door de blanke lak of kleurlaag kunnen voorbereiding en opnieuw spuiten nodig maken.",
    headlightsHeading: "Koplampen herstellen en polijsten",
    headlights: "Het polijsten van de buitenste kunststof kappen kan doffe of vergeelde koplampen helderder maken als het oppervlak daarvoor geschikt is. Eerst beoordelen we de slijtage aan de buitenkant: barsten, vocht binnenin en interne schade worden niet verholpen door de buitenkant te polijsten.",
  },
  it: {
    polishHeading: "Lucidatura auto e correzione della vernice a Torrevieja",
    polish: "La lucidatura a macchina può ripristinare la brillantezza e attenuare micrograffi superficiali e segni di lavaggio se il trasparente è stabile e conserva uno spessore sufficiente. Valutiamo la vernice opaca o scolorita dal sole prima di definire la correzione adatta. La lucidatura non ricrea strati mancanti o sfogliati; graffi che attraversano il trasparente o il colore possono richiedere preparazione e riverniciatura.",
    headlightsHeading: "Ripristino e lucidatura dei fari",
    headlights: "La lucidatura delle coperture esterne in plastica può migliorare la trasparenza dei fari opachi o ingialliti, se le condizioni della superficie lo consentono. Esaminiamo prima l’usura esterna: crepe, umidità interna e danni all’interno del faro non si risolvono lucidando l’esterno.",
  },
  nb: {
    polishHeading: "Bilpolering og lakkorrigering i Torrevieja",
    polish: "Maskinpolering kan gi lakken glansen tilbake og redusere lette overflateriper og vaskeriper når klarlakken er stabil og fortsatt tykk nok. Matt eller solbleket lakk undersøkes før vi vurderer passende lakkorrigering. Polering erstatter ikke manglende eller avflassende lag; riper gjennom klarlakken eller fargelakken kan kreve forarbeid og omlakkering.",
    headlightsHeading: "Oppfrisking og polering av frontlykter",
    headlights: "Polering av de ytre plastdekslene kan gjøre matte eller gulnede frontlykter klarere dersom overflaten egner seg. Først vurderer vi slitasjen utvendig: sprekker, fukt på innsiden og skader inne i lykten blir ikke rettet ved utvendig polering.",
  },
  fi: {
    polishHeading: "Auton kiillotus ja maalipinnan korjaus Torreviejassa",
    polish: "Koneellinen kiillotus voi palauttaa kiillon ja vähentää kevyitä pintanaarmuja sekä pesunaarmuja, jos lakkapinta on ehjä ja riittävän paksu. Samea tai auringossa haalistunut maalipinta tarkastetaan ennen sopivan kiillotuskäsittelyn valintaa. Kiillotus ei korvaa puuttuvia tai hilseileviä kerroksia; lakan tai värikerroksen läpäisevät naarmut voivat vaatia pohjatöitä ja uudelleenmaalausta.",
    headlightsHeading: "Ajovalojen kunnostus ja kiillotus",
    headlights: "Ulompien muovikupujen kiillotus voi kirkastaa sameita tai kellastuneita ajovaloja, jos pinnan kunto sen sallii. Arvioimme ensin ulkopinnan kulumisen: halkeamia, sisäpuolista kosteutta tai ajovalon sisäisiä vaurioita ei korjata ulkopuolisella kiillotuksella.",
  },
  da: {
    polishHeading: "Bilpolering og lakkorrektion i Torrevieja",
    polish: "Maskinpolering kan genskabe glansen og mindske lette overfladeridser og vaskeridser, når klarlakken er stabil og stadig har tilstrækkelig tykkelse. Mat eller solbleget lak undersøges, før vi vurderer en passende lakkorrektion. Polering erstatter ikke manglende eller afskallende lag; ridser gennem klarlak eller farvelag kan kræve forarbejde og omlakering.",
    headlightsHeading: "Renovering og polering af forlygter",
    headlights: "Polering af de ydre plastglas kan gøre matte eller gulnede forlygter klarere, hvis overfladens tilstand tillader det. Først vurderes det udvendige slid: revner, fugt indvendigt og skader inde i lygten afhjælpes ikke ved udvendig polering.",
  },
  sv: {
    polishHeading: "Bilpolering och lackkorrigering i Torrevieja",
    polish: "Maskinpolering kan återställa glansen och minska lätta ytrepor och tvättrepor när klarlacken är stabil och fortfarande tillräckligt tjock. Matt eller solblekt lack undersöks innan vi bedömer lämplig lackkorrigering. Polering ersätter inte saknade eller flagnande skikt; repor genom klarlack eller färgskikt kan kräva förarbete och omlackering.",
    headlightsHeading: "Renovering och polering av strålkastare",
    headlights: "Polering av de yttre plastglasen kan göra matta eller gulnade strålkastare klarare om ytans skick tillåter det. Först bedömer vi slitaget utvändigt: sprickor, fukt på insidan och skador inne i strålkastaren åtgärdas inte genom utvändig polering.",
  },
  sk: {
    polishHeading: "Leštenie auta a korekcia laku v Torrevieji",
    polish: "Strojové leštenie môže obnoviť lesk a zmierniť jemné povrchové škrabance či stopy po umývaní, ak je číry lak stabilný a má dostatočnú zvyškovú hrúbku. Matný alebo slnkom vyblednutý lak skontrolujeme pred určením vhodnej korekcie. Leštenie nenahrádza chýbajúce ani odlupujúce sa vrstvy; škrabance prenikajúce cez číry alebo farebný lak môžu vyžadovať prípravu a nové lakovanie.",
    headlightsHeading: "Renovácia a leštenie svetlometov",
    headlights: "Leštenie vonkajších plastových krytov môže zlepšiť priehľadnosť zakalených alebo zožltnutých svetlometov, ak to stav povrchu umožňuje. Najprv posúdime vonkajšie opotrebenie: praskliny, vlhkosť vnútri ani vnútorné poškodenia svetlometu vonkajšie leštenie neodstráni.",
  },
  hu: {
    polishHeading: "Autópolírozás és fényezéskorrekció Torreviejában",
    polish: "A gépi polírozás visszaadhatja a fényt, és csökkentheti a finom felületi karcokat, valamint a mosási nyomokat, ha az átlátszó lakkréteg stabil és még elég vastag. A matt vagy napfakította fényezést a megfelelő korrekció megválasztása előtt megvizsgáljuk. A polírozás nem pótolja a hiányzó vagy leváló rétegeket; a lakkon vagy a színrétegen áthatoló karcok előkészítést és újrafényezést igényelhetnek.",
    headlightsHeading: "Fényszóró-felújítás és polírozás",
    headlights: "A külső műanyag burák polírozása javíthatja a matt vagy megsárgult fényszórók átlátszóságát, ha a felület állapota ezt lehetővé teszi. Először a külső kopást értékeljük: a repedéseket, a belső nedvességet és a lámpán belüli hibákat nem szünteti meg a külső polírozás.",
  },
  bg: {
    polishHeading: "Полиране на автомобил и корекция на лака в Торевиеха",
    polish: "Машинното полиране може да възстанови блясъка и да намали леките повърхностни драскотини и следите от миене, ако прозрачният лак е стабилен и има достатъчна остатъчна дебелина. Матовата или избледняла от слънцето боя се оглежда преди избора на подходяща корекция. Полирането не възстановява липсващи или лющещи се слоеве; драскотини през лака или цветния слой може да изискват подготовка и пребоядисване.",
    headlightsHeading: "Възстановяване и полиране на фарове",
    headlights: "Полирането на външните пластмасови капаци може да подобри прозрачността на помътнели или пожълтели фарове, ако състоянието на повърхността го позволява. Първо оценяваме външното износване: пукнатини, вътрешна влага и повреди вътре във фара не се отстраняват с външно полиране.",
  },
  pt: {
    polishHeading: "Polimento automóvel e correção de pintura em Torrevieja",
    polish: "O polimento à máquina pode recuperar o brilho e atenuar riscos superficiais e marcas de lavagem se o verniz estiver estável e conservar espessura suficiente. Avaliamos a pintura baça ou desbotada pelo sol antes de definir a correção adequada. O polimento não repõe camadas em falta ou a descascar; riscos que atravessem o verniz ou a cor podem exigir preparação e repintura.",
    headlightsHeading: "Restauro e polimento de faróis",
    headlights: "O polimento das coberturas exteriores de plástico pode melhorar a transparência de faróis baços ou amarelados, se o estado da superfície o permitir. Primeiro avaliamos o desgaste exterior: fissuras, humidade interna e danos no interior do farol não são corrigidos pelo polimento exterior.",
  },
  el: {
    polishHeading: "Γυάλισμα αυτοκινήτου και διόρθωση βαφής στην Torrevieja",
    polish: "Το γυάλισμα με αλοιφαδόρο μπορεί να επαναφέρει τη γυαλάδα και να μειώσει ελαφριές επιφανειακές γρατζουνιές και σημάδια πλυσίματος, όταν το βερνίκι είναι σταθερό και έχει αρκετό πάχος. Εξετάζουμε τη θαμπή ή ξεθωριασμένη από τον ήλιο βαφή πριν επιλέξουμε την κατάλληλη διόρθωση. Το γυάλισμα δεν αντικαθιστά στρώσεις που λείπουν ή ξεφλουδίζουν· γρατζουνιές που διαπερνούν το βερνίκι ή το χρώμα μπορεί να απαιτούν προετοιμασία και επαναβαφή.",
    headlightsHeading: "Αποκατάσταση και γυάλισμα φαναριών",
    headlights: "Το γυάλισμα των εξωτερικών πλαστικών καλυμμάτων μπορεί να βελτιώσει τη διαφάνεια θαμπών ή κιτρινισμένων φαναριών, εφόσον το επιτρέπει η επιφάνεια. Αρχικά αξιολογούμε την εξωτερική φθορά: ρωγμές, εσωτερική υγρασία και ζημιές μέσα στο φανάρι δεν διορθώνονται με εξωτερικό γυάλισμα.",
  },
  cs: {
    polishHeading: "Leštění auta a korekce laku v Torrevieje",
    polish: "Strojní leštění může obnovit lesk a zmírnit jemné povrchové škrábance i stopy po mytí, pokud je čirý lak stabilní a má dostatečnou zbývající tloušťku. Matný nebo sluncem vybledlý lak prohlédneme před volbou vhodné korekce. Leštění nenahrazuje chybějící ani odlupující se vrstvy; škrábance pronikající čirým nebo barevným lakem mohou vyžadovat přípravu a nové lakování.",
    headlightsHeading: "Renovace a leštění světlometů",
    headlights: "Leštění vnějších plastových krytů může zlepšit průhlednost zakalených nebo zažloutlých světlometů, pokud to stav povrchu umožňuje. Nejprve posoudíme vnější opotřebení: praskliny, vlhkost uvnitř ani vnitřní poškození světlometu vnější leštění neodstraní.",
  },
};
