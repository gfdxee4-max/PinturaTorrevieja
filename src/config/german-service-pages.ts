import type { LocalizedServicePage } from "@/config/localized-service-pages";

const commonLinks = [
  { href: "/de", label: "PaintLab Torrevieja", text: "Zur deutschen Startseite mit einem Überblick über die Werkstatt." },
  { href: "/de/servicios", label: "Alle Leistungen", text: "Alle deutschen Leistungsseiten von PaintLab ansehen." },
  { href: "/de/trabajos-realizados", label: "Echte Arbeiten", text: "Dokumentierte Reparatur- und Lackierergebnisse aus der Werkstatt." },
] as const;

export const germanServicePages = [
  {
    key: "paint",
    locale: "de",
    slug: "autolackierung-torrevieja",
    title: "Autolackierung & Fahrzeuglackierung in Torrevieja | PaintLab",
    description: "Autolackierung in Torrevieja für komplette Fahrzeuge und einzelne Karosserieteile. Vorbereitung, Farbanpassung und Lackierung bei PaintLab.",
    h1: "Autolackierung und Fahrzeuglackierung in Torrevieja",
    eyebrow: "Lackiererei PaintLab",
    lead: "PaintLab führt Autolackierungen in Torrevieja aus – von einzelnen Karosserieteilen bis zur vollständigen Fahrzeuglackierung. Vor Beginn prüfen wir den Zustand der Oberfläche und stimmen die technisch sinnvollen Arbeitsschritte mit Ihnen ab.",
    heroImage: "/images/paint-booth.webp",
    heroAlt: "Autolackierung in der Lackierkabine von PaintLab in Torrevieja",
    benefits: [
      { title: "Einzelteile oder komplettes Fahrzeug", text: "Der Umfang richtet sich nach dem Zustand des Fahrzeugs und dem gewünschten Ergebnis." },
      { title: "Sorgfältige Vorbereitung", text: "Eine tragfähige, gleichmäßige Oberfläche ist die Grundlage für eine saubere Lackierung." },
      { title: "Farbanpassung am Fahrzeug", text: "Der Farbton wird nicht nur nach dem Code, sondern auch anhand des vorhandenen Lacks beurteilt." },
    ],
    sections: [
      { heading: "Autolackierung in Torrevieja", paragraphs: [
        "Eine Fahrzeuglackierung besteht aus deutlich mehr als dem Auftragen einer neuen Farbe. Zuerst wird beurteilt, welche Teile lackiert werden sollen, ob alte Beschichtungen stabil sind und ob Kratzer, Dellen oder frühere Reparaturen eine zusätzliche Vorbereitung erfordern. Danach lässt sich entscheiden, ob ein einzelnes Karosserieteil, mehrere angrenzende Bereiche oder das komplette Fahrzeug bearbeitet werden sollte.",
        "PaintLab arbeitet in Torrevieja für Kunden aus der Stadt und der südlichen Costa Blanca. Sie können vorab Fotos per WhatsApp senden. Auf Bildern lässt sich der mögliche Umfang häufig eingrenzen; eine verbindliche Beurteilung erfolgt jedoch erst am Fahrzeug, weil Untergrund, Verformungen und alte Lackschichten auf Fotos nicht immer vollständig erkennbar sind.",
      ] },
      { heading: "Fahrzeuglackierung einzelner Karosserieteile", paragraphs: [
        "Türen, Kotflügel, Motorhauben, Stoßfänger und Schweller können einzeln lackiert werden, wenn dies zum Schaden und zum Zustand des übrigen Fahrzeugs passt. Vor der Lackierung werden beschädigte Stellen freigelegt und fachgerecht vorbereitet. Kleine Unebenheiten müssen ausgeglichen und instabile Lackschichten entfernt werden, damit der neue Aufbau auf einer geeigneten Oberfläche liegt.",
        "Bei lackierbaren Kunststoffteilen unterscheidet sich die Vorbereitung von der Bearbeitung eines Metallteils. Deshalb wird jedes Bauteil einzeln betrachtet. Ist zusätzlich eine Karosserieinstandsetzung nötig, wird diese vor dem Lackaufbau ausgeführt. Umfangreiche Dellen oder verformte Bleche gehören zum eigenständigen Bereich der Karosseriereparatur und werden nicht allein durch Lackieren behoben.",
      ] },
      { heading: "Komplettlackierung und Ganzlackierung", paragraphs: [
        "Eine Komplettlackierung kann sinnvoll sein, wenn viele Flächen stark gealtert oder unterschiedlich vorlackiert sind oder wenn ein einheitliches Gesamtbild hergestellt werden soll. Vor einer Ganzlackierung wird der Zustand aller sichtbaren Teile geprüft. Anbauteile werden soweit erforderlich demontiert, Oberflächen vorbereitet und Bereiche geschützt, die nicht lackiert werden sollen.",
        "Ob eine vollständige Neulackierung tatsächlich erforderlich ist, hängt vom Fahrzeug und vom gewünschten Ergebnis ab. PaintLab verspricht deshalb keinen pauschalen Ablauf ohne Besichtigung. Manchmal genügt die Lackierung mehrerer ausgewählter Teile; in anderen Fällen ist ein umfassender Aufbau nachvollziehbarer. Diese Entscheidung wird vor Arbeitsbeginn besprochen.",
      ] },
      { heading: "Vorbereitung, Basislack und Klarlack", paragraphs: [
        "Nach Reinigung und Schleifarbeiten werden reparierte Zonen ausgeglichen und, wo erforderlich, grundiert. Die kontrollierte Vorbereitung bestimmt, wie gleichmäßig die spätere Oberfläche wirkt. Anschließend folgen die für das verwendete Lacksystem vorgesehenen Schichten. Der Basislack liefert den Farbton, während der Klarlack Oberfläche, Glanz und Schutz vervollständigt.",
        "Zwischen den Schritten werden Oberfläche und Sauberkeit kontrolliert. Nach der Lackierung wird das Ergebnis unter geeigneter Beleuchtung geprüft. Falls eine behutsame Endbearbeitung erforderlich ist, erfolgt sie erst nach dem vorgesehenen Trocknungsprozess. Ziel ist ein stimmiges Ergebnis, das zum vorhandenen Fahrzeug passt.",
      ] },
      { heading: "Farbanpassung bei bestehendem Fahrzeuglack", paragraphs: [
        "Der Farbcode ist ein wichtiger Ausgangspunkt, aber nicht die einzige Information. Sonnenlicht, Alter, Pflege und frühere Reparaturen können den tatsächlich sichtbaren Farbton verändern. Deshalb wird die Farbanpassung am konkreten Fahrzeug vorgenommen. Besonders bei Metallic- und Perleffekten beeinflussen Auftrag und Betrachtungswinkel die Wirkung.",
        "Wer einen Autolackierer in Torrevieja sucht, sollte deshalb nicht nur nach der Farbe fragen, sondern auch den Zustand der angrenzenden Teile zeigen. So kann eingeschätzt werden, wie der Übergang gestaltet und welche Fläche vorbereitet werden muss. Fotos helfen bei der ersten Orientierung; die endgültige Abstimmung erfolgt in der Werkstatt.",
      ] },
      { heading: "Autolackierung anhand realer Arbeiten beurteilen", paragraphs: [
        "Im Bereich „Unsere Arbeiten“ zeigt PaintLab echte Fahrzeuge vor und nach der Reparatur. Dazu gehören die Lackierung eines BMW E46 Cabriolet sowie lackierte Karosserieteile an Nissan Qashqai, Tesla Model 3, Fiat 500 und Mercedes-Benz V-Class. Die Beispiele ersetzen keine Besichtigung, zeigen aber den tatsächlichen Arbeitsbereich der Werkstatt.",
        "Senden Sie für eine erste Einschätzung eine Gesamtaufnahme des Fahrzeugs, ein Foto des vollständigen Bauteils und Nahaufnahmen der beschädigten Oberfläche. Teilen Sie außerdem Modell, Baujahr und den gewünschten Umfang mit. So lässt sich das weitere Vorgehen vor einem Termin sinnvoll vorbereiten.",
      ] },
    ],
    processTitle: "Ablauf einer Fahrzeuglackierung",
    process: [
      { title: "Besichtigung", text: "Lackzustand, Schäden und gewünschter Umfang werden geprüft." },
      { title: "Vorbereitung", text: "Oberflächen werden gereinigt, geschliffen und fachgerecht aufgebaut." },
      { title: "Farbanpassung", text: "Der Farbton wird am bestehenden Fahrzeuglack abgestimmt." },
      { title: "Lackierung", text: "Basislack und Klarlack werden nach dem vorgesehenen System verarbeitet." },
      { title: "Endkontrolle", text: "Oberfläche, Farbwirkung und Finish werden kontrolliert." },
    ],
    faq: [
      { question: "Wo kann ich mein Auto in Torrevieja lackieren lassen?", answer: "Bei PaintLab in Torrevieja können einzelne Karosserieteile oder, nach Besichtigung, das komplette Fahrzeug lackiert werden." },
      { question: "Lackieren Sie auch nur eine Tür oder einen Kotflügel?", answer: "Ja. Einzelne Teile wie Türen, Kotflügel, Motorhauben, Stoßfänger oder Schweller können abhängig vom Zustand separat vorbereitet und lackiert werden." },
      { question: "Ist eine Komplettlackierung immer nötig?", answer: "Nein. Ob einzelne Teile oder das gesamte Fahrzeug lackiert werden, wird anhand des Lackzustands und des gewünschten Ergebnisses entschieden." },
      { question: "Kann ich Fotos für eine erste Einschätzung senden?", answer: "Ja. Senden Sie Gesamt- und Nahaufnahmen per WhatsApp. Der endgültige Umfang wird nach der Besichtigung bestätigt." },
      { question: "Wie wird der Farbton angepasst?", answer: "Ausgangspunkt sind Fahrzeugdaten und Farbcode; zusätzlich wird der tatsächlich vorhandene Lack am Fahrzeug beurteilt." },
      { question: "Reparieren Sie Dellen vor der Lackierung?", answer: "Wenn eine Karosserieinstandsetzung erforderlich ist, wird sie vor der Lackierung eingeplant und gesondert beurteilt." },
    ],
    relatedLinks: [
      { href: "/de/karosseriereparatur-torrevieja", label: "Karosseriereparatur", text: "Dellen und beschädigte Karosserieteile vor der Lackierung instand setzen." },
      { href: "/de/stossfaenger-reparatur-lackierung-torrevieja", label: "Stoßfänger-Reparatur", text: "Geeignete Schäden am Stoßfänger vorbereiten und lackieren." },
      ...commonLinks,
    ],
    whatsapp: "Hallo PaintLab. Ich interessiere mich für eine Autolackierung in Torrevieja und kann Fotos des Fahrzeugs senden.",
  },
  {
    key: "body",
    locale: "de",
    slug: "karosseriereparatur-torrevieja",
    title: "Karosseriereparatur in Torrevieja | PaintLab",
    description: "Karosseriereparatur in Torrevieja bei Dellen, Kratzern und beschädigten Karosserieteilen. Instandsetzung, Vorbereitung und Lackierung bei PaintLab.",
    h1: "Karosseriereparatur in Torrevieja",
    eyebrow: "Karosseriewerkstatt PaintLab",
    lead: "PaintLab repariert beschädigte Karosserieteile in Torrevieja. Wir beurteilen Dellen, Kratzer und Verformungen, stellen geeignete Bereiche instand und bereiten sie für die anschließende Lackierung vor.",
    heroImage: "/images/paint-booth.webp",
    heroAlt: "Karosseriereparatur und Vorbereitung bei PaintLab in Torrevieja",
    benefits: [
      { title: "Schaden zuerst beurteilen", text: "Form, Material und Zugänglichkeit bestimmen die technisch sinnvolle Reparatur." },
      { title: "Instandsetzung vor Lackierung", text: "Die Form des Bauteils wird wiederhergestellt, bevor der Lackaufbau beginnt." },
      { title: "Echte Ergebnisse", text: "Dokumentierte Projekte zeigen Reparaturen an Türen, Kotflügeln und Seitenteilen." },
    ],
    sections: [
      { heading: "Karosserieinstandsetzung bei Dellen und Verformungen", paragraphs: [
        "Eine Delle ist nicht nur eine optische Störung. Je nach Tiefe, Kante und Position kann das Blech gedehnt oder die ursprüngliche Kontur verändert sein. Vor der Reparatur wird geprüft, wie der Bereich zugänglich ist und ob das Bauteil fachgerecht instand gesetzt werden kann. Erst danach lässt sich der notwendige Arbeitsumfang bestimmen.",
        "Bei PaintLab in Torrevieja beginnt die Karosseriereparatur deshalb mit einer Sichtprüfung und einer Beurteilung der Bauteilgeometrie. Geeignete Schäden werden zurückgeformt und die Oberfläche für den weiteren Aufbau vorbereitet. Wenn ein Schaden auf Fotos nicht sicher einzuschätzen ist, wird keine pauschale Zusage gemacht; die Entscheidung fällt nach der Besichtigung.",
      ] },
      { heading: "Kratzer und beschädigter Fahrzeuglack", paragraphs: [
        "Nicht jeder Kratzer erfordert dieselbe Reparatur. Oberflächliche Spuren können manchmal durch eine passende Finish-Behandlung reduziert werden. Reicht der Schaden durch Klarlack und Basislack oder ist das Material darunter betroffen, muss die Zone vorbereitet und neu lackiert werden. Rostspuren oder instabile Altlackierungen benötigen eine gesonderte Beurteilung.",
        "Tiefe Kratzer treten häufig zusammen mit einer Verformung auf, etwa nach Kontakt mit einer Mauer, einem Pfosten oder einem anderen Fahrzeug. Dann wird zuerst die Form korrigiert. Anschließend folgen Schleifen, Ausgleichen, Grundierung und Lackierung nach dem festgelegten Reparaturaufbau.",
      ] },
      { heading: "Reparatur von Türen, Kotflügeln und Seitenteilen", paragraphs: [
        "Türen, vordere und hintere Kotflügel, Motorhauben, Schweller und Seitenteile unterscheiden sich in Aufbau und Zugänglichkeit. Eine beschädigte Tür kann beispielsweise an der Außenhaut verformt sein, während Kanten und Spaltmaße zusätzlich kontrolliert werden müssen. Bei einem Kotflügel ist zu prüfen, ob die Befestigung und angrenzende Bauteile betroffen sind.",
        "Die Karosseriewerkstatt entscheidet nicht allein nach der Größe des sichtbaren Schadens. Lage, Materialverformung und frühere Reparaturen spielen ebenfalls eine Rolle. Ziel ist eine nachvollziehbare Instandsetzung, bevor Grundierung, Farbanpassung und Lackierung beginnen.",
      ] },
      { heading: "Vorbereitung für die anschließende Lackierung", paragraphs: [
        "Nach der Formkorrektur wird die Reparaturzone stufenweise vorbereitet. Unebenheiten werden ausgeglichen, Übergänge kontrolliert und geeignete Grundmaterialien eingesetzt. Eine neue Lackschicht kann mangelhafte Vorarbeit nicht ausgleichen; deshalb ist die Vorbereitung ein eigener, entscheidender Teil des Prozesses.",
        "Ist die Oberfläche tragfähig und gleichmäßig, wird der Farbton am Fahrzeug abgestimmt. Danach werden Basislack und Klarlack entsprechend dem verwendeten System verarbeitet. Abschließend kontrolliert PaintLab Form, Oberfläche und optische Wirkung des reparierten Bauteils.",
      ] },
      { heading: "Karosserieschaden nach einem Unfall", paragraphs: [
        "Nach einem kleineren Unfall können mehrere Bauteile gleichzeitig betroffen sein. Sichtbare Kratzer zeigen nicht immer, ob Halterungen, Kanten oder benachbarte Bereiche ebenfalls beschädigt wurden. In solchen Fällen wird das Fahrzeug als Ganzes betrachtet und der Reparaturumfang anhand des tatsächlichen Zustands festgelegt.",
        "Wenn der Schaden zu einem Versicherungsfall gehört, stehen zusätzlich Informationen zur Versicherung, vorhandene Unterlagen und gegebenenfalls eine bereits erfolgte Begutachtung im Mittelpunkt. Dafür gibt es eine eigene Seite zur Unfallreparatur und zu Versicherungsschäden, ohne eine Kostenübernahme oder Freigabe durch die Versicherung zu versprechen.",
      ] },
      { heading: "Reale Karosseriereparaturen bei PaintLab", paragraphs: [
        "Die Projektseiten zeigen reale Arbeiten: einen beschädigten Kotflügel am Nissan Qashqai, das hintere Seitenteil eines Tesla Model 3, Tür, Kotflügel und Schweller eines Fiat 500 sowie die hintere Tür eines Mercedes-Benz V-Class. Die Vorher-Nachher-Fotos dokumentieren unterschiedliche Schadensbilder und den fertigen Zustand.",
        "Für eine erste Einschätzung senden Sie Fotos aus mehreren Winkeln. Eine Gesamtansicht zeigt die Position des Schadens; Nahaufnahmen machen Kratzer, Kanten und Lackabplatzungen besser sichtbar. Der endgültige Arbeitsumfang und die Kosten werden erst nach der direkten Prüfung des Fahrzeugs bestätigt.",
      ] },
    ],
    processTitle: "Ablauf der Karosseriereparatur",
    process: [
      { title: "Schadensprüfung", text: "Bauteil, Verformung und Lackschaden werden beurteilt." },
      { title: "Instandsetzung", text: "Die Form geeigneter beschädigter Bereiche wird wiederhergestellt." },
      { title: "Oberflächenaufbau", text: "Die Reparaturzone wird ausgeglichen und grundiert." },
      { title: "Lackierung", text: "Farbton, Basislack und Klarlack werden passend verarbeitet." },
      { title: "Kontrolle", text: "Form, Oberfläche und fertiges Erscheinungsbild werden geprüft." },
    ],
    faq: [
      { question: "Wo finde ich eine Karosseriewerkstatt in Torrevieja?", answer: "PaintLab befindet sich in Torrevieja und bearbeitet geeignete Dellen, Kratzer und beschädigte Karosserieteile." },
      { question: "Können Dellen repariert werden?", answer: "Viele Dellen können instand gesetzt werden. Ob dies technisch sinnvoll ist, hängt von Tiefe, Lage, Material und Gesamtzustand ab." },
      { question: "Reparieren Sie beschädigte Türen und Kotflügel?", answer: "Ja, geeignete Schäden an Türen, Kotflügeln, Seitenteilen, Motorhauben und Schwellern werden nach Besichtigung bearbeitet." },
      { question: "Wird nach der Karosseriereparatur lackiert?", answer: "Wenn der Lackaufbau beschädigt ist, folgen nach der Instandsetzung Vorbereitung, Farbanpassung und Lackierung." },
      { question: "Kann ich den Schaden per WhatsApp zeigen?", answer: "Ja. Fotos ermöglichen eine erste Orientierung; die endgültige Beurteilung erfolgt am Fahrzeug." },
      { question: "Bearbeiten Sie auch Unfallschäden?", answer: "Unfallschäden werden anhand des konkreten Fahrzeugs und, bei Versicherungsfällen, der vorhandenen Informationen geprüft." },
    ],
    relatedLinks: [
      { href: "/de/autolackierung-torrevieja", label: "Autolackierung", text: "Einzelne Karosserieteile oder komplette Fahrzeuge lackieren lassen." },
      { href: "/de/unfallreparatur-versicherung-torrevieja", label: "Unfall- und Versicherungsschäden", text: "Vorgehen bei einem Unfall oder gemeldeten Versicherungsfall." },
      ...commonLinks,
    ],
    whatsapp: "Hallo PaintLab. Ich benötige eine Einschätzung für eine Karosseriereparatur in Torrevieja und kann Fotos senden.",
  },
  {
    key: "bumper",
    locale: "de",
    slug: "stossfaenger-reparatur-lackierung-torrevieja",
    title: "Stoßfänger-Reparatur & Lackierung in Torrevieja | PaintLab",
    description: "Stoßfänger-Reparatur und Lackierung in Torrevieja bei Kratzern, Schrammen, Lackschäden und geeigneten Verformungen. PaintLab.",
    h1: "Stoßfänger-Reparatur und Lackierung in Torrevieja",
    eyebrow: "Stoßfänger-Service PaintLab",
    lead: "PaintLab prüft und bearbeitet geeignete Kratzer, Schrammen, Lackschäden und Verformungen an lackierten Stoßfängern in Torrevieja. Ob eine Reparatur möglich ist, wird am konkreten Bauteil entschieden.",
    heroImage: "/images/paint-booth.webp",
    heroAlt: "Vorbereitung und Lackierung eines Stoßfängers bei PaintLab",
    benefits: [
      { title: "Schaden passend beurteilen", text: "Oberflächliche Lackschäden und Verformungen benötigen unterschiedliche Arbeitsschritte." },
      { title: "Vorbereitung für Kunststoff", text: "Material und bestehender Lackaufbau werden vor der Lackierung berücksichtigt." },
      { title: "Keine pauschale Reparaturzusage", text: "Stark gerissene oder strukturell ungeeignete Teile werden individuell bewertet." },
    ],
    sections: [
      { heading: "Kratzer und Schrammen am Stoßfänger", paragraphs: [
        "Parkschäden hinterlassen häufig helle Abriebspuren, tiefe Kratzer oder abgeplatzten Lack. Zuerst wird geprüft, ob nur die Oberfläche betroffen ist oder ob das Kunststoffteil verformt beziehungsweise beschädigt wurde. Ein oberflächlicher Fremdabrieb kann anders behandelt werden als ein Kratzer, der den gesamten Lackaufbau durchtrennt.",
        "Für eine erste Einschätzung können Sie Fotos des ganzen Stoßfängers und Nahaufnahmen der Schadstelle senden. Die direkte Besichtigung bleibt wichtig, weil feine Risse, instabile Kanten und die Tiefe einer Verformung auf Bildern nicht immer klar zu erkennen sind.",
      ] },
      { heading: "Stoßfänger reparieren statt pauschal ersetzen", paragraphs: [
        "Ob ein Stoßfänger repariert werden kann, hängt von Material, Lage und Ausmaß des Schadens ab. Geeignete Schrammen, Lackschäden und bestimmte Verformungen lassen sich vorbereiten und neu lackieren. Nicht jede Beschädigung ist technisch sinnvoll instandsetzbar; besonders bei starken Rissen, ausgerissenen Befestigungen oder sicherheitsrelevanten Schäden ist eine genaue Prüfung notwendig.",
        "PaintLab verspricht daher nicht, jeden Stoßfänger wiederherzustellen. Nach der Besichtigung wird erklärt, welche Arbeiten möglich sind und ob der bestehende Teil als Grundlage geeignet bleibt. Erst danach werden Reparatur und Lackierung vereinbart.",
      ] },
      { heading: "Vorbereitung eines lackierten Kunststoffteils", paragraphs: [
        "Ein Stoßfänger reagiert anders als ein Karosserieteil aus Metall. Die Oberfläche muss gereinigt, beschädigter Lack entfernt und für den vorgesehenen Materialaufbau vorbereitet werden. Verformte Bereiche werden nur dann bearbeitet, wenn Material und Zustand dies zulassen. Übergänge müssen gleichmäßig sein, bevor Grund- und Lackmaterialien aufgetragen werden.",
        "Eine sorgfältige Vorbereitung verhindert, dass sichtbare Kanten oder instabile Altschichten unter dem neuen Lack verbleiben. Dazu gehört auch die Kontrolle benachbarter Bereiche und der Befestigungen, soweit sie vom sichtbaren Schaden betroffen sein könnten.",
      ] },
      { heading: "Stoßfänger lackieren und Farbton anpassen", paragraphs: [
        "Nach der Vorbereitung wird der Farbton mit dem vorhandenen Fahrzeuglack abgeglichen. Der Farbcode liefert die Basis, doch Alterung und Sonneneinstrahlung können den sichtbaren Ton verändern. Anschließend werden die vorgesehenen Lackschichten verarbeitet und der Stoßfänger unter geeigneten Bedingungen getrocknet.",
        "Nach der Lackierung wird kontrolliert, ob Oberfläche, Glanz und Farbwirkung zum Fahrzeug passen. Das Ziel ist kein verdeckter Schnellschritt, sondern ein nachvollziehbarer Aufbau von der beschädigten Oberfläche bis zum fertigen Finish.",
      ] },
      { heading: "Verformungen und weitere Karosserieschäden", paragraphs: [
        "Bei einem Anstoß kann nicht nur der Stoßfänger betroffen sein. Kotflügel, Heck- oder Frontbereiche, Halterungen und angrenzende Lackflächen können zusätzliche Spuren aufweisen. Deshalb wird der sichtbare Schaden im Zusammenhang mit dem Fahrzeug betrachtet. Sind Metallteile verformt, gehört deren Instandsetzung zum Bereich Karosseriereparatur.",
        "Bei einem Unfall- oder Versicherungsschaden werden außerdem vorhandene Unterlagen und der Stand des Schadensfalls berücksichtigt. PaintLab prüft die konkrete Reparatursituation, entscheidet jedoch nicht über Leistungen oder Freigaben der Versicherung.",
      ] },
      { heading: "Erste Einschätzung per WhatsApp", paragraphs: [
        "Senden Sie eine Aufnahme der gesamten Fahrzeugseite oder Front beziehungsweise des Hecks, ein vollständiges Bild des Stoßfängers und mehrere Nahaufnahmen. Gute Beleuchtung hilft, Kratzer, Lackabplatzungen und Verformungen zu erkennen. Teilen Sie außerdem Fahrzeugmodell und Entstehung des Schadens mit.",
        "Anhand der Fotos kann PaintLab eine erste Orientierung geben. Der endgültige Reparaturweg und die Kosten werden nach der Besichtigung bestätigt. So wird vermieden, eine unvollständige Aussage allein anhand eines engen Bildausschnitts zu treffen.",
      ] },
    ],
    processTitle: "Ablauf der Stoßfänger-Reparatur",
    process: [
      { title: "Prüfung", text: "Lack, Kunststoff, Verformung und Befestigungsbereich werden beurteilt." },
      { title: "Reparatur", text: "Geeignete Schäden werden materialgerecht bearbeitet." },
      { title: "Vorbereitung", text: "Die Oberfläche wird gereinigt, ausgeglichen und aufgebaut." },
      { title: "Lackierung", text: "Der angepasste Farbton und Klarlack werden verarbeitet." },
      { title: "Kontrolle", text: "Finish und Einpassung am Fahrzeug werden geprüft." },
    ],
    faq: [
      { question: "Kann ein zerkratzter Stoßfänger lackiert werden?", answer: "Ja, wenn der Zustand des Kunststoffteils und der Schaden eine fachgerechte Vorbereitung und Lackierung erlauben." },
      { question: "Kann jede Verformung repariert werden?", answer: "Nein. Material, Tiefe, Befestigungen und Gesamtzustand entscheiden, ob eine Reparatur technisch sinnvoll ist." },
      { question: "Muss der ganze Stoßfänger lackiert werden?", answer: "Das hängt von Lage und Umfang des Schadens sowie vom vorhandenen Lack ab und wird nach der Besichtigung festgelegt." },
      { question: "Bearbeitet PaintLab Schäden an Kunststoff?", answer: "Geeignete Schäden an lackierten Kunststoffteilen werden geprüft und materialgerecht vorbereitet. Eine Zusage erfolgt erst nach Sichtprüfung." },
      { question: "Kann ich Fotos senden?", answer: "Ja. Senden Sie Gesamt- und Nahaufnahmen per WhatsApp für eine erste Einschätzung." },
      { question: "Was passiert bei weiteren Karosserieschäden?", answer: "Zusätzliche Schäden an Metallteilen oder Befestigungen werden separat beurteilt und in den Arbeitsumfang aufgenommen." },
    ],
    relatedLinks: [
      { href: "/de/karosseriereparatur-torrevieja", label: "Karosseriereparatur", text: "Beschädigte Metallteile, Dellen und Verformungen instand setzen." },
      { href: "/de/autolackierung-torrevieja", label: "Fahrzeuglackierung", text: "Lackierung weiterer Karosserieteile oder des kompletten Fahrzeugs." },
      ...commonLinks,
    ],
    whatsapp: "Hallo PaintLab. Ich möchte einen beschädigten Stoßfänger in Torrevieja prüfen lassen und kann Fotos senden.",
  },
  {
    key: "insurance",
    locale: "de",
    slug: "unfallreparatur-versicherung-torrevieja",
    title: "Unfallreparatur & Versicherungsschaden in Torrevieja | PaintLab",
    description: "Karosseriereparatur nach Unfall oder Versicherungsschaden in Torrevieja. Schadensbewertung, Karosseriearbeiten und Lackierung je nach Versicherungsfall.",
    h1: "Unfallreparatur und Versicherungsschaden in Torrevieja",
    eyebrow: "Unfallschaden bei PaintLab",
    lead: "Wenn Ihr Fahrzeug bei einem Unfall beschädigt wurde und ein Versicherungsfall besteht, können Sie PaintLab in Torrevieja kontaktieren. Wir prüfen den konkreten Reparaturbedarf und erklären, welche Informationen für das weitere Vorgehen benötigt werden.",
    heroImage: "/images/paint-booth.webp",
    heroAlt: "Unfallreparatur und Fahrzeuglackierung bei PaintLab in Torrevieja",
    benefits: [
      { title: "Konkreten Fall prüfen", text: "Schaden, Unterlagen und Stand der Begutachtung werden gemeinsam betrachtet." },
      { title: "Reparaturumfang erklären", text: "Karosserie- und Lackierarbeiten richten sich nach dem tatsächlichen Fahrzeugschaden." },
      { title: "Keine falschen Zusagen", text: "Über Zahlung und Freigabe entscheidet die zuständige Versicherung, nicht PaintLab." },
    ],
    sections: [
      { heading: "Nach einem Unfall PaintLab kontaktieren", paragraphs: [
        "Senden Sie zuerst Fotos der beschädigten Fahrzeugbereiche und nennen Sie die Versicherung, bei der der Schadensfall geführt wird. Teilen Sie mit, wann und wie der Schaden entstanden ist und ob das Fahrzeug fahrbereit ist. Diese Informationen helfen, den nächsten sinnvollen Schritt vorzubereiten.",
        "Hat ein Gutachter beziehungsweise perito das Fahrzeug bereits gesehen, geben Sie dies ebenfalls an. Vorhandene Unterlagen, eine Schadennummer oder Informationen zur bisherigen Kommunikation können für die Einordnung wichtig sein. PaintLab prüft den Reparaturfall, ersetzt aber weder die Entscheidung der Versicherung noch die Begutachtung.",
      ] },
      { heading: "Schadensbewertung am Fahrzeug", paragraphs: [
        "Fotos zeigen die sichtbare Oberfläche, aber nicht immer alle betroffenen Teile. Bei einem Unfallschaden können Kanten, Halterungen oder angrenzende Karosseriebereiche ebenfalls beschädigt sein. Deshalb wird der genaue Umfang nach der Besichtigung festgelegt und bei Bedarf mit den vorhandenen Unterlagen abgeglichen.",
        "Die Bewertung umfasst die sichtbaren Dellen, Kratzer, Verformungen und Lackschäden. Je nach Fall können Karosserieinstandsetzung, Vorbereitung und Lackierung einzelner oder mehrerer Bauteile erforderlich sein. Nicht benötigte Arbeiten werden nicht allein aufgrund einer allgemeinen Unfallbeschreibung angenommen.",
      ] },
      { heading: "Karosseriearbeiten und Lackierung nach einem Unfall", paragraphs: [
        "Geeignete beschädigte Türen, Kotflügel, Seitenteile, Motorhauben, Schweller oder Stoßfänger werden entsprechend ihrem Zustand bearbeitet. Zuerst erfolgt die notwendige Instandsetzung. Danach wird die Oberfläche aufgebaut, der Farbton angepasst und das reparierte Teil lackiert.",
        "Bei mehreren beschädigten Bereichen wird die Reihenfolge abgestimmt, damit Karosserie- und Lackierarbeiten technisch zusammenpassen. Das Ergebnis wird nach Abschluss kontrolliert. Feste Zeiten oder Kosten werden nicht ohne Prüfung versprochen, weil Umfang und Ablauf von Schaden, Teilen und Versicherungsprozess abhängen.",
      ] },
      { heading: "Rolle von Versicherung und Gutachter", paragraphs: [
        "Die Versicherung bearbeitet den Schadensfall nach ihren Bedingungen und entscheidet über Freigaben oder Leistungen. PaintLab kann den konkreten Reparaturbedarf prüfen und Informationen zum geplanten Arbeitsumfang bereitstellen, ist aber nicht automatisch Partner jeder Versicherung und kann keine Kostenübernahme garantieren.",
        "Ein Gutachter oder perito dokumentiert den Schaden im Rahmen des jeweiligen Verfahrens. Wurde das Fahrzeug bereits begutachtet, sollten die vorhandenen Angaben mitgebracht oder vorab genannt werden. Fehlt eine Begutachtung, wird zunächst geklärt, welche Schritte im konkreten Fall erforderlich sind.",
      ] },
      { heading: "Welche Unterlagen hilfreich sein können", paragraphs: [
        "Hilfreich sind die Schadennummer, Kontaktdaten der Versicherung, vorhandene Schreiben und Angaben zu einer bereits erfolgten Besichtigung. Je nach Fall können weitere Dokumente verlangt werden. PaintLab nennt keine allgemeine, für jede Versicherung verbindliche Liste, sondern betrachtet die tatsächlich vorhandene Situation.",
        "Senden Sie vertrauliche Unterlagen nur über einen mit der Werkstatt abgestimmten Weg. Für die erste Kontaktaufnahme reichen in der Regel eine kurze Beschreibung und Fotos. Danach kann geklärt werden, welche zusätzlichen Informationen für die Reparaturplanung benötigt werden.",
      ] },
      { heading: "Echte Unfall- und Karosserieschäden", paragraphs: [
        "Im Bereich „Unsere Arbeiten“ sind reale Reparaturen dokumentiert, darunter beschädigte Türen, Kotflügel und Seitenteile. Diese Projekte zeigen mögliche Karosserie- und Lackierarbeiten, ersetzen aber keine Aussage darüber, wie eine Versicherung einen anderen Schadensfall behandelt.",
        "Wenn Ihr Fahrzeug beschädigt ist, senden Sie Fotos aus mehreren Winkeln und beschreiben Sie den aktuellen Stand des Versicherungsfalls. PaintLab prüft die konkrete Situation und erklärt, welche weiteren Schritte für eine Reparatur in der Werkstatt sinnvoll sind.",
      ] },
    ],
    processTitle: "Vorgehen bei einem Versicherungsschaden",
    process: [
      { title: "Kontakt", text: "Fotos, Versicherung und kurze Schadensbeschreibung übermitteln." },
      { title: "Unterlagen", text: "Vorhandene Dokumente und eine erfolgte Begutachtung angeben." },
      { title: "Besichtigung", text: "Den tatsächlichen Reparaturbedarf am Fahrzeug prüfen." },
      { title: "Abstimmung", text: "Notwendige Schritte im konkreten Schadensfall klären." },
      { title: "Reparatur", text: "Freigegebene Karosserie- und Lackierarbeiten fachgerecht ausführen." },
    ],
    faq: [
      { question: "Bearbeitet PaintLab Fahrzeuge nach einem Unfall?", answer: "Ja, konkrete Unfall- und Karosserieschäden werden in Torrevieja geprüft und bei technischer Eignung repariert und lackiert." },
      { question: "Garantiert PaintLab die Zahlung durch meine Versicherung?", answer: "Nein. Über Leistungen, Zahlung und Freigabe entscheidet ausschließlich die zuständige Versicherung." },
      { question: "Ist PaintLab Partner aller Versicherungen?", answer: "Nein, eine allgemeine Partnerschaft mit allen Versicherungen wird nicht behauptet. Jeder Fall wird anhand seiner konkreten Informationen geprüft." },
      { question: "Was soll ich zuerst senden?", answer: "Senden Sie Fotos, eine kurze Beschreibung, den Namen der Versicherung und den aktuellen Stand des Schadensfalls." },
      { question: "Was ist, wenn ein Gutachter das Auto bereits gesehen hat?", answer: "Teilen Sie dies mit und geben Sie an, welche Unterlagen oder Informationen aus der Begutachtung vorliegen." },
      { question: "Kann der Reparaturumfang nur anhand von Fotos festgelegt werden?", answer: "Fotos erlauben eine erste Orientierung. Der endgültige Umfang wird nach der Besichtigung und unter Berücksichtigung des Versicherungsfalls festgelegt." },
    ],
    relatedLinks: [
      { href: "/de/karosseriereparatur-torrevieja", label: "Karosseriereparatur", text: "Dellen, Verformungen und beschädigte Karosserieteile instand setzen." },
      { href: "/de/autolackierung-torrevieja", label: "Autolackierung", text: "Vorbereitete Karosserieteile farblich passend lackieren." },
      ...commonLinks,
    ],
    whatsapp: "Hallo PaintLab. Mein Fahrzeug wurde bei einem Unfall beschädigt und ich möchte den konkreten Versicherungsfall prüfen lassen. Ich kann Fotos senden.",
  },
  {
    key: "wheels",
    locale: "de",
    slug: "felgenaufbereitung-pulverbeschichtung-torrevieja",
    title: "Felgenaufbereitung & Pulverbeschichtung in Torrevieja | PaintLab",
    description: "Felgenaufbereitung in Torrevieja mit Sandstrahlen, Oberflächenvorbereitung, Pulverbeschichtung und Richten geeigneter Felgen bei PaintLab.",
    h1: "Felgenaufbereitung und Pulverbeschichtung in Torrevieja",
    eyebrow: "Felgenservice PaintLab",
    lead: "PaintLab bereitet geeignete Auto- und Alufelgen in Torrevieja auf. Der Ablauf kann Geometrieprüfung, Richten, Entfernen der alten Beschichtung, Sandstrahlen, Oberflächenvorbereitung und Pulverbeschichtung umfassen.",
    benefits: [
      { title: "Zustand und Geometrie prüfen", text: "Vor der Beschichtung werden Oberfläche und Rundlauf der Felge beurteilt." },
      { title: "Sandstrahlen und vorbereiten", text: "Alte Beschichtung und Verunreinigungen werden vor dem Neuaufbau entfernt." },
      { title: "Pulverbeschichtung und Aushärtung", text: "Das Beschichtungssystem wird aufgetragen, ausgehärtet und abschließend kontrolliert." },
    ],
    sections: [
      { heading: "Felgenaufbereitung in Torrevieja", paragraphs: [
        "Kratzer, Steinschläge, Korrosionsspuren und gealterte Beschichtungen beeinträchtigen die Oberfläche einer Felge. Nach einer Sichtprüfung kann entschieden werden, ob eine Aufbereitung technisch sinnvoll ist. Dabei wird nicht nur das sichtbare Finish betrachtet, sondern auch geprüft, ob Verformungen oder weitere Schäden vorliegen.",
        "PaintLab bietet Felgenaufbereitung für Kunden in Torrevieja und der südlichen Costa Blanca an. Fotos per WhatsApp helfen bei einer ersten Orientierung. Der endgültige Arbeitsumfang wird nach der direkten Prüfung bestätigt, weil Tiefe von Schäden und Zustand der alten Beschichtung auf Bildern nur begrenzt erkennbar sind.",
      ] },
      { heading: "Geometrie prüfen und geeignete Felgen richten", paragraphs: [
        "Vor der Oberflächenbearbeitung kann die Geometrie der Felge kontrolliert werden. Ist eine Felge verformt und lässt ihr Zustand eine fachgerechte Wiederherstellung zu, kann sie bei Bedarf auf dem dafür vorgesehenen Stand gerichtet werden. Diese Prüfung erfolgt vor Sandstrahlen und Pulverbeschichtung.",
        "Nicht jede beschädigte Felge ist für das Richten geeignet. Art, Lage und Ausmaß der Verformung müssen technisch beurteilt werden. PaintLab verspricht keine Wiederherstellung ohne Prüfung und bietet auf dieser Seite weder Rissschweißen noch Diamond Cut oder CNC-Bearbeitung an.",
      ] },
      { heading: "Felgen sandstrahlen und Oberfläche vorbereiten", paragraphs: [
        "Vor einer neuen Beschichtung müssen alte Lackschichten, lose Bereiche und anhaftende Verunreinigungen entfernt werden. Das Sandstrahlen schafft eine gleichmäßige Grundlage für die anschließende Oberflächenvorbereitung. Es ersetzt jedoch nicht die vorherige Prüfung des Felgenzustands.",
        "Nach dem Strahlen wird die Oberfläche kontrolliert und für das verwendete Pulverbeschichtungssystem vorbereitet. Sichtbar werdende Schäden können den geplanten Umfang verändern. In diesem Fall wird erklärt, welche weiteren Schritte erforderlich sind, bevor die Felge beschichtet werden kann.",
      ] },
      { heading: "Pulverbeschichtung von Auto- und Alufelgen", paragraphs: [
        "Bei der Pulverbeschichtung wird das Beschichtungsmaterial gleichmäßig auf die vorbereitete Oberfläche aufgebracht. Danach erfolgt die Aushärtung bei der Temperatur und nach dem Ablauf, die für das eingesetzte System vorgesehen sind. So entsteht eine geschlossene, gleichmäßige Oberfläche.",
        "Die neue Farbe wird vor Arbeitsbeginn abgestimmt. Eine Farbänderung kann grundsätzlich besprochen werden, sofern sie zum Material und zum verfügbaren Beschichtungssystem passt. PaintLab nennt keine pauschale Auswahl oder Garantie ohne Prüfung und konkrete Abstimmung.",
      ] },
      { heading: "Ablauf der Felgenrestaurierung", paragraphs: [
        "Der vollständige Ablauf besteht aus Sichtprüfung, Geometrieprüfung, gegebenenfalls geeignetem Richten, Entfernen der alten Beschichtung, Sandstrahlen, Oberflächenvorbereitung, Pulverbeschichtung, Aushärtung und Endkontrolle. Jeder Schritt baut auf dem Zustand auf, der im vorherigen Schritt festgestellt wurde.",
        "Wird nach dem Entfernen der alten Beschichtung ein zuvor verdeckter Schaden sichtbar, muss er neu bewertet werden. Es werden keine nicht bestätigten Leistungen wie Rissschweißen, CNC-Bearbeitung oder Diamantdrehen hinzugedichtet. Die Seite beschreibt ausschließlich die tatsächlich angebotenen Schritte.",
      ] },
      { heading: "Welche Felgenschäden können aufbereitet werden?", paragraphs: [
        "Typische Gründe für eine Aufbereitung sind Kratzer, kleine Abplatzungen, Korrosionsspuren und eine beschädigte oder ungleichmäßige alte Lackierung. Verformte Felgen können nach Geometrieprüfung gerichtet werden, wenn Material und Zustand dies technisch erlauben. Stark oder andersartig beschädigte Felgen benötigen eine gesonderte Entscheidung.",
        "Die Endkontrolle umfasst die Beschichtungsoberfläche und die zuvor vereinbarten Arbeitspunkte. Für eine erste Einschätzung senden Sie Fotos der vollständigen Felge, Nahaufnahmen der Schäden und – soweit möglich – Ansichten, auf denen eine Verformung erkennbar ist.",
      ] },
    ],
    processTitle: "Unser Ablauf der Felgenaufbereitung",
    process: [
      { title: "Sichtprüfung", text: "Beschichtung, Korrosion und sichtbare Schäden beurteilen." },
      { title: "Geometrie", text: "Rundlauf prüfen und bei Eignung notwendiges Richten planen." },
      { title: "Entschichten", text: "Alte Beschichtung entfernen und die Felge sandstrahlen." },
      { title: "Beschichten", text: "Oberfläche vorbereiten, Pulver auftragen und aushärten." },
      { title: "Endkontrolle", text: "Fertige Oberfläche und vereinbarte Arbeitspunkte prüfen." },
    ],
    faq: [
      { question: "Wo kann ich Felgen in Torrevieja aufbereiten lassen?", answer: "PaintLab in Torrevieja bietet die Prüfung, Vorbereitung und Pulverbeschichtung geeigneter Auto- und Alufelgen an." },
      { question: "Werden Felgen vor der Pulverbeschichtung sandgestrahlt?", answer: "Ja, das Entfernen der alten Beschichtung und Sandstrahlen gehören zur Vorbereitung, wenn die Felge für die Bearbeitung geeignet ist." },
      { question: "Können zerkratzte Alufelgen aufbereitet werden?", answer: "Viele Kratzer und beschädigte Beschichtungen können nach Prüfung vorbereitet und neu beschichtet werden." },
      { question: "Richtet PaintLab verbogene Felgen?", answer: "Die Geometrie wird geprüft. Wenn Zustand und Art der Verformung eine Reparatur zulassen, kann die Felge vor der Beschichtung gerichtet werden." },
      { question: "Kann die Farbe der Felgen geändert werden?", answer: "Eine Farbänderung kann anhand der verfügbaren und technisch geeigneten Beschichtung abgestimmt werden." },
      { question: "Wie erfahre ich die Kosten?", answer: "Senden Sie Fotos per WhatsApp. Der endgültige Preis wird nach der Prüfung und Festlegung des Arbeitsumfangs bestätigt." },
      { question: "Kann ich nur die Felgen ohne Fahrzeug bringen?", answer: "Bitte stimmen Sie den konkreten Annahmeablauf vorab per WhatsApp mit PaintLab ab; auf dieser Seite wird keine pauschale Übergabeform versprochen." },
    ],
    relatedLinks: [
      { href: "/de/autolackierung-torrevieja", label: "Autolackierung", text: "Fahrzeugteile oder das komplette Fahrzeug fachgerecht lackieren lassen." },
      { href: "/de/karosseriereparatur-torrevieja", label: "Karosseriereparatur", text: "Beschädigte Karosserieteile vor der Lackierung instand setzen." },
      ...commonLinks,
    ],
    ctaTitle: "Fotos Ihrer Felgen senden",
    ctaText: "Möchten Sie Ihre Felgen aufbereiten lassen? Senden Sie Fotos per WhatsApp. Den endgültigen Umfang bestätigen wir nach der Prüfung der Felgen.",
    whatsapp: "Hallo PaintLab. Ich interessiere mich für Felgenaufbereitung und Pulverbeschichtung in Torrevieja und kann Fotos senden.",
  },
] as const satisfies readonly LocalizedServicePage[];
