import type { LocalizedServicePage } from "@/config/localized-service-pages";

const commonLinks = [
  { href: "/pl", label: "Warsztat PaintLab", text: "Informacje o warsztacie w Torrevieja i dostępnych usługach." },
  { href: "/pl/servicios", label: "Wszystkie usługi", text: "Wybierz odpowiedni rodzaj naprawy lub odnowienia samochodu." },
  { href: "/pl/trabajos-realizados", label: "Nasze realizacje", text: "Rzeczywiste samochody i udokumentowane efekty prac." },
] as const;

export const polishServicePages = [
  {
    key: "paint", locale: "pl", slug: "lakierowanie-samochodu-torrevieja",
    title: "Lakierowanie samochodu w Torrevieja | PaintLab",
    description: "Profesjonalne lakierowanie samochodów w Torrevieja. Lakierowanie całego auta i pojedynczych elementów, przygotowanie powierzchni i dobór koloru w PaintLab.",
    h1: "Lakierowanie samochodów w Torrevieja", eyebrow: "Usługi lakiernicze PaintLab",
    lead: "PaintLab wykonuje lakierowanie samochodów w Torrevieja: od pojedynczych elementów po całe nadwozie. Przed rozpoczęciem sprawdzamy stan powłoki, ustalamy potrzebne przygotowanie i wyjaśniamy, jaki zakres prac odpowiada rzeczywistemu stanowi auta.",
    hideDetailsTitle: true,
    benefits: [
      { title: "Całe auto lub jeden element", text: "Zakres lakierowania wynika z oględzin i uzgodnionego efektu." },
      { title: "Przygotowanie podłoża", text: "Usuwamy niestabilne warstwy i przygotowujemy równą powierzchnię." },
      { title: "Dobór koloru", text: "Porównujemy odcień z istniejącym lakierem samochodu." },
    ],
    sections: [
      { heading: "Kiedy warto odnowić lakier samochodu", paragraphs: [
        "Powodem wizyty mogą być głębokie rysy, odpryski, zniszczona stara powłoka albo różnice między wcześniej naprawianymi elementami. Nie każdy ślad wymaga jednak ponownego lakierowania. Po oczyszczeniu powierzchni można ocenić, czy uszkodzony jest jedynie wierzch lakieru, czy także głębsze warstwy. Od tego zależy sposób przygotowania oraz obszar, który trzeba objąć pracami.",
        "Lakiernik samochodowy sprawdza również ślady wcześniejszych napraw i stan sąsiednich paneli. Sam rozmiar rysy nie mówi wszystkiego: niewielki odprysk może odsłaniać podłoże, a większa smuga bywa tylko obcą farbą. W PaintLab najpierw ustalamy charakter defektu, a dopiero później proponujemy konkretne rozwiązanie. Zdjęcia pomagają we wstępnej rozmowie, lecz nie zastępują oględzin.",
      ] },
      { heading: "Lakierowanie pojedynczych elementów", paragraphs: [
        "Można zgłosić drzwi, błotnik, maskę, zderzak, próg lub kilka sąsiadujących części. Każdy element oceniamy osobno, uwzględniając materiał, kształt i stan powłoki. Jeśli blacha jest wgnieciona, przed lakierowaniem potrzebne jest przywrócenie jej formy. Taka naprawa należy do prac blacharskich i jest uzgadniana przed rozpoczęciem przygotowania lakierniczego.",
        "Lakierowanie elementów samochodu pozwala ograniczyć prace do potrzebnych miejsc, ale nie zawsze oznacza malowanie tylko wąskiego fragmentu. Granice naprawy zależą od uszkodzenia i możliwości uzyskania spójnego wyglądu. Wyjaśniamy, czy odpowiedniejsze będzie odnowienie całej części, czy inny zakres zgodny z technologią. Nie obiecujemy takiego samego rozwiązania dla każdego koloru i podłoża.",
      ] },
      { heading: "Pełne lakierowanie samochodu", paragraphs: [
        "Lakierowanie całego auta rozważa się, gdy powłoka jest zużyta na wielu panelach albo pojazd wymaga całościowego odnowienia wyglądu. Przed decyzją oglądamy całe nadwozie, a nie tylko najbardziej widoczną stronę. Sprawdzamy powierzchnie, wcześniejsze naprawy oraz części wymagające przygotowania. Ustalamy także niezbędny demontaż i zabezpieczenie elementów, których nie obejmuje lakierowanie.",
        "Pełne lakierowanie nie jest automatycznie najlepszym wyborem. Niekiedy wystarczy odnowić kilka paneli i zachować pozostałą powłokę. W innym przypadku szerszy zakres zapewnia bardziej uporządkowany efekt. Decyzja wynika z oględzin oraz oczekiwań właściciela. Nie podajemy sztywnej ceny ani czasu bez oceny samochodu, ponieważ stan podłoża może znacząco zmienić ilość przygotowania.",
      ] },
      { heading: "Przygotowanie powierzchni, baza i lakier bezbarwny", paragraphs: [
        "Przygotowanie obejmuje oczyszczenie, odpowiednie szlifowanie, usunięcie niestabilnych warstw i wyrównanie naprawianej strefy. W razie potrzeby stosuje się właściwy podkład. Przed nanoszeniem koloru kontrolujemy powierzchnię: nowy lakier nie ukryje trwale niewłaściwie przygotowanego podłoża. Kolejność czynności zależy od materiału elementu i stanu wcześniejszego pokrycia.",
        "Następnie nakładana jest baza odpowiadająca za kolor oraz lakier bezbarwny przewidziany w używanym systemie. Poszczególne etapy wymagają odpowiednich warunków i przerw technologicznych. Po wyschnięciu oceniamy powierzchnię, połysk i wygląd obok sąsiednich części. Jeżeli potrzebna jest końcowa obróbka, dobieramy ją do stanu gotowej powłoki, zamiast wykonywać dodatkowe czynności bez uzasadnienia.",
      ] },
      { heading: "Dobór koloru do istniejącego lakieru", paragraphs: [
        "Kod koloru jest punktem wyjścia, ale rzeczywisty odcień może zmieniać się pod wpływem słońca, wieku i poprzednich napraw. Dlatego porównujemy kolor z konkretnym samochodem. W powłokach metalicznych znaczenie ma również sposób odbijania światła. Ostateczną ocenę przeprowadza się przy aucie, a nie wyłącznie na podstawie zdjęcia przesłanego telefonem.",
        "Podczas rozmowy warto powiedzieć, które części były wcześniej lakierowane. Nawet podobnie wyglądające panele mogą mieć inny układ warstw. Ta informacja pomaga dobrać zakres przygotowania i ocenić oczekiwany rezultat. Warsztat lakierniczy powinien wyjaśnić takie zależności przed pracą, aby właściciel wiedział, czego dotyczy uzgodniona usługa i jakie ograniczenia wynikają ze stanu auta.",
      ] },
      { heading: "Rzeczywiste realizacje i pierwsza ocena", paragraphs: [
        "W naszych realizacjach można zobaczyć pełne lakierowanie BMW E46 Cabriolet oraz naprawiane i lakierowane części innych samochodów. To dokumentacja konkretnych prac, nie obietnica identycznego przebiegu każdej naprawy. PaintLab znajduje się w Torrevieja; klienci z okolic Costa Blanca przyjeżdżają do warsztatu po wcześniejszym ustaleniu wizyty.",
        "Prześlij przez WhatsApp widok całego auta, zdjęcie danego elementu i zbliżenia defektów. Napisz, czy chodzi o jedną część, kilka paneli czy całe nadwozie. Na tej podstawie przygotujemy wstępną odpowiedź i wyjaśnimy kolejny krok. Ostateczny zakres oraz koszt potwierdzamy po bezpośrednim sprawdzeniu samochodu.",
      ] },
    ],
    process: [
      { title: "Oględziny", text: "Sprawdzamy powłokę i uzgadniamy obszar pracy." },
      { title: "Przygotowanie", text: "Oczyszczamy, szlifujemy i przygotowujemy podłoże." },
      { title: "Kolor", text: "Dobieramy odcień do samochodu." },
      { title: "Lakierowanie", text: "Nakładamy warstwy zgodnie z używanym systemem." },
      { title: "Kontrola", text: "Oceniamy powierzchnię i gotowy efekt." },
    ],
    faq: [
      { question: "Czy można polakierować tylko jeden element?", answer: "Tak, jeśli stan części i sąsiedniej powłoki pozwala uzyskać odpowiedni rezultat. Zakres ustalamy po oględzinach." },
      { question: "Czy wykonujecie pełne lakierowanie samochodu?", answer: "Tak. Pełne lakierowanie planujemy po ocenie całego nadwozia i uzgodnieniu niezbędnego przygotowania." },
      { question: "Jak wygląda dobór koloru?", answer: "Korzystamy z informacji o kolorze i porównujemy odcień z rzeczywistym lakierem pojazdu, uwzględniając jego stan." },
      { question: "Czy każdą rysę trzeba lakierować?", answer: "Nie. Niektóre powierzchowne ślady można ograniczyć odpowiednią obróbką; głębsze uszkodzenia wymagają przygotowania i odnowienia powłoki." },
      { question: "Jak otrzymać wstępną wycenę?", answer: "Wyślij zdjęcia przez WhatsApp. Ostateczny koszt potwierdzamy po oględzinach." },
    ],
    relatedLinks: [{ href: "/pl/naprawa-blacharska-torrevieja", label: "Naprawa blacharska", text: "Przywracanie kształtu uszkodzonych części przed lakierowaniem." }, ...commonLinks],
    whatsapp: "Dzień dobry, PaintLab. Interesuje mnie lakierowanie samochodu w Torrevieja. Mogę przesłać zdjęcia.",
  },
  {
    key: "body", locale: "pl", slug: "naprawa-blacharska-torrevieja",
    title: "Naprawa blacharska i karoserii w Torrevieja | PaintLab",
    description: "Naprawa blacharska samochodów w Torrevieja: wgniecenia, zarysowania i uszkodzone elementy karoserii. Przygotowanie i lakierowanie w PaintLab.",
    h1: "Naprawa blacharska samochodów w Torrevieja", eyebrow: "Naprawa karoserii PaintLab",
    lead: "W PaintLab w Torrevieja naprawiamy nadające się do odtworzenia elementy karoserii. Oceniamy wgniecenia, zarysowania i odkształcenia, przywracamy formę części oraz przygotowujemy je do dalszego lakierowania.",
    hideDetailsTitle: true,
    benefits: [
      { title: "Ocena uszkodzenia", text: "Sprawdzamy kształt części, dostęp do naprawy i stan powłoki." },
      { title: "Najpierw forma", text: "Prace lakiernicze następują po potrzebnym odtworzeniu podłoża." },
      { title: "Uzgodniony zakres", text: "Wyjaśniamy konieczne czynności przed rozpoczęciem prac." },
    ],
    sections: [
      { heading: "Naprawa wgnieceń i odkształceń", paragraphs: [
        "Wgniecenie może obejmować płaską powierzchnię, krawędź albo przetłoczenie. Każde z tych miejsc zachowuje się inaczej podczas przywracania formy. Dlatego blacharz samochodowy ocenia nie tylko rozmiar śladu, lecz także głębokość, rozciągnięcie materiału i możliwość dostępu od wewnątrz. Dopiero po takim sprawdzeniu można zaproponować technicznie uzasadniony sposób naprawy.",
        "Nie każde uszkodzenie da się odtworzyć bez wymiany części. Znaczenie mają stan metalu, wcześniejsze naprawy oraz deformacje w sąsiedztwie. PaintLab nie obiecuje usunięcia każdej wgniecionej strefy na podstawie jednego zdjęcia. Zdjęcia służą do pierwszej orientacji, natomiast ostateczna ocena odbywa się przy samochodzie w warsztacie.",
      ] },
      { heading: "Zarysowania i uszkodzone warstwy lakieru", paragraphs: [
        "Po kontakcie z przeszkodą często widać jednocześnie obcą farbę, rysę i deformację blachy. Najpierw trzeba oczyścić powierzchnię, aby rozpoznać rzeczywiste granice uszkodzenia. Ślad w warstwie wierzchniej wymaga innego postępowania niż głęboki rowek odsłaniający podkład lub metal. Sama szerokość zarysowania nie wystarcza do ustalenia zakresu naprawy.",
        "Jeżeli forma elementu jest zmieniona, przed lakierowaniem przywraca się właściwe podłoże. Następnie przygotowuje się powierzchnię i odbudowuje powłokę. Pozostawienie odkształcenia pod świeżą farbą nie rozwiązuje problemu. W czasie oględzin wskazujemy, które operacje dotyczą blacharstwa, a które należą do dalszego przygotowania i lakierowania.",
      ] },
      { heading: "Drzwi, błotniki, maska i progi", paragraphs: [
        "Naprawa drzwi samochodu zależy od położenia uszkodzenia, stanu krawędzi i zachowania szczelin. Błotnik, maska, próg czy tylna część boczna mają inną budowę i dostęp do naprawianej strefy. Sprawdzamy również pobliskie mocowania oraz to, czy widoczny defekt nie jest związany z przesunięciem sąsiedniego elementu.",
        "W niektórych przypadkach potrzebny jest demontaż pozwalający dokładniej obejrzeć uszkodzenie. Jeżeli ujawni on dodatkowy problem, omawiamy go z właścicielem przed kontynuowaniem. Nie zakładamy z góry, że każda część wymaga wymiany lub że każdą można zachować. Decyzja opiera się na jej rzeczywistym stanie i możliwościach poprawnego odtworzenia.",
      ] },
      { heading: "Przygotowanie karoserii przed lakierowaniem", paragraphs: [
        "Po wykonaniu uzgodnionych prac blacharskich sprawdza się powierzchnię, wyrównuje potrzebne strefy i przygotowuje przejścia między materiałami. Następują odpowiednie etapy szlifowania i gruntowania. Każdy z nich wpływa na wygląd gotowej powłoki, dlatego kontrola podłoża jest równie ważna jak samo nanoszenie koloru.",
        "Następnie dobierany jest odcień i wykonywane lakierowanie zgodnie z zastosowanym systemem. Po wyschnięciu oceniamy formę, połysk i wygląd części obok sąsiadujących paneli. Zakres ewentualnego wykończenia wynika ze stanu powierzchni. Strona opisuje naprawę karoserii, a szczegóły samego lakierowania całego auta lub elementów przedstawia oddzielna usługa.",
      ] },
      { heading: "Szkody parkingowe i uszkodzenia po kolizji", paragraphs: [
        "Mały kontakt parkingowy może uszkodzić jedną część, lecz po kolizji warto ocenić cały sąsiadujący obszar. Zmiana szczeliny, odstawanie elementu albo problem z jego domykaniem to informacje, które należy zgłosić podczas pierwszej rozmowy. Zdjęcie wykonane wyłącznie z bliska może nie pokazywać zależności między poszczególnymi panelami.",
        "Jeśli sprawa jest zgłoszona ubezpieczycielowi, trzeba również ustalić stan dokumentacji i ewentualnych oględzin rzeczoznawcy. Ten proces opisujemy na osobnej stronie dotyczącej naprawy powypadkowej. Nie jest to obietnica zapłaty przez ubezpieczenie: zakres świadczeń i akceptacja zależą od konkretnej firmy oraz sprawy.",
      ] },
      { heading: "Realizacje warsztatu i zdjęcia do oceny", paragraphs: [
        "Nasze realizacje pokazują naprawy błotnika Nissan Qashqai, tylnej części bocznej Tesla Model 3, drzwi i progu Fiat 500 oraz drzwi Mercedes-Benz V-Class. Każdy przykład dotyczy konkretnego samochodu. Pomaga zobaczyć obszar prac, ale nie zastępuje oceny innego pojazdu ani nie wyznacza jego kosztu.",
        "Przed wizytą w Torrevieja prześlij widok uszkodzonego boku, cały element i kilka zbliżeń. Pokaż także szczeliny oraz miejsca przy lampach lub nadkolu, jeśli uległy zmianie. Opisz przebieg zdarzenia i wcześniejsze naprawy. Na tej podstawie ustalimy kolejny krok; końcowy zakres oraz koszt potwierdzamy po oględzinach.",
      ] },
    ],
    process: [
      { title: "Sprawdzenie", text: "Oceniamy deformacje, szczeliny i powłokę." },
      { title: "Plan", text: "Ustalamy możliwość naprawy i jej zakres." },
      { title: "Blacharstwo", text: "Przywracamy formę odpowiednich stref." },
      { title: "Przygotowanie", text: "Wyrównujemy i gruntujemy powierzchnię." },
      { title: "Lakier i kontrola", text: "Odnawiamy powłokę i sprawdzamy efekt." },
    ],
    faq: [
      { question: "Czy można naprawić uszkodzone drzwi bez wymiany?", answer: "W części przypadków tak. Zależy to od deformacji, stanu metalu, krawędzi i możliwości przywrócenia właściwej formy." },
      { question: "Czy naprawiacie wgniecenia?", answer: "Tak, odpowiednie wgniecenia są oceniane i naprawiane przed przygotowaniem powierzchni do lakierowania." },
      { question: "Czy można wysłać zdjęcia do wstępnej wyceny?", answer: "Tak. Prześlij zdjęcia całego obszaru i zbliżenia przez WhatsApp; końcową ocenę potwierdzamy po oględzinach." },
      { question: "Czy lakierowanie zawsze jest potrzebne?", answer: "Zakres zależy od uszkodzenia powłoki i sposobu naprawy. Potrzebne czynności są uzgadniane po sprawdzeniu części." },
      { question: "Czy wykonujecie naprawy po kolizji?", answer: "Tak, konkretny przypadek jest oceniany pod kątem potrzebnych prac blacharskich i lakierniczych." },
    ],
    relatedLinks: [
      { href: "/pl/lakierowanie-samochodu-torrevieja", label: "Lakierowanie samochodu", text: "Odbudowa powłoki na przygotowanych elementach." },
      { href: "/pl/naprawa-po-wypadku-ubezpieczenie-torrevieja", label: "Naprawa powypadkowa", text: "Postępowanie przy kolizji i szkodzie ubezpieczeniowej." }, ...commonLinks,
    ],
    whatsapp: "Dzień dobry, PaintLab. Potrzebuję oceny naprawy blacharskiej w Torrevieja. Mogę przesłać zdjęcia.",
  },
  {
    key: "bumper", locale: "pl", slug: "naprawa-lakierowanie-zderzaka-torrevieja",
    title: "Naprawa i lakierowanie zderzaka w Torrevieja | PaintLab",
    description: "Naprawa i lakierowanie zderzaków w Torrevieja po zarysowaniach, otarciach, uszkodzeniach lakieru i odpowiednich odkształceniach. PaintLab.",
    h1: "Naprawa i lakierowanie zderzaka w Torrevieja", eyebrow: "Zderzaki i ich powłoka",
    lead: "Porysowany zderzak wymaga sprawdzenia lakieru, tworzywa i mocowań. W PaintLab w Torrevieja oceniamy, czy możliwa jest naprawa, przygotowujemy odpowiednie uszkodzenia i odnawiamy powłokę. Nie każdy zderzak nadaje się do odtworzenia.",
    hideDetailsTitle: true,
    benefits: [
      { title: "Cały element pod kontrolą", text: "Sprawdzamy także krawędzie, odkształcenia i mocowania." },
      { title: "Odpowiednia technologia", text: "Przygotowanie jest dobierane do materiału i starej powłoki." },
      { title: "Ocena przed decyzją", text: "Możliwość naprawy potwierdzamy po sprawdzeniu zderzaka." },
    ],
    sections: [
      { heading: "Porysowany zderzak po parkowaniu", paragraphs: [
        "Otarcie o mur, słupek lub drugi samochód może pozostawić obcy kolor, rysy i ubytki lakieru. Na zdjęciu różne ślady bywają podobne, dlatego najpierw trzeba ocenić oczyszczoną powierzchnię. Płytki ślad w warstwie wierzchniej wymaga innego działania niż głęboka rysa sięgająca tworzywa albo większe odkształcenie całej strefy.",
        "W PaintLab oglądamy zarówno sam defekt, jak i otaczającą go część. Zwracamy uwagę na krawędzie, miejsca mocowania oraz widoczne zmiany szczelin. Taka ocena pozwala ustalić, czy chodzi o odnowienie powłoki, czy również o naprawę materiału. Nie określamy całego zakresu tylko na podstawie szerokości widocznej rysy.",
      ] },
      { heading: "Kiedy naprawa zderzaka jest możliwa", paragraphs: [
        "O możliwości odtworzenia decydują materiał, położenie uszkodzenia i ogólny stan części. Odpowiednie otarcia, ubytki powłoki oraz wybrane deformacje mogą zostać przygotowane i naprawione. Pęknięcia, rozerwane zaczepy czy wcześniejsze naprawy wymagają indywidualnego sprawdzenia. Nie ma zasady, że każdy uszkodzony plastikowy zderzak da się bezpiecznie zachować.",
        "Jeżeli część nie stanowi odpowiedniej podstawy do naprawy, wyjaśniamy ograniczenia przed lakierowaniem. Nowa farba nie zastąpi prawidłowej formy ani sprawnych mocowań. Właściciel powinien wiedzieć, które problemy dotyczą wyglądu, a które wymagają innej decyzji. Nie obiecujemy odtworzenia poważnie zniszczonego elementu bez oględzin jego rzeczywistego stanu.",
      ] },
      { heading: "Naprawa tworzywa i przygotowanie powierzchni", paragraphs: [
        "Przed lakierowaniem trzeba oczyścić część, usunąć niestabilne warstwy i odpowiednio przygotować naprawianą strefę. Sposób działania zależy od tworzywa i zakresu defektu. Deformację oceniamy pod kątem możliwości technicznych, a powierzchnię wyrównujemy tak, aby przygotowany obszar nadawał się do dalszego nakładania materiałów.",
        "Znaczenie ma także stan wcześniejszego lakierowania. Jeśli zderzak był już naprawiany, warto powiedzieć o tym podczas pierwszej rozmowy. Niestabilne stare warstwy mogą zmienić potrzebne przygotowanie. Kontrola przed kolorem pozwala zauważyć nierówności i przejścia, które po zakończeniu byłyby widoczne mimo świeżego lakieru.",
      ] },
      { heading: "Lakierowanie przedniego i tylnego zderzaka", paragraphs: [
        "Przednie i tylne zderzaki oceniamy według ich stanu, a nie jednego z góry przyjętego schematu. Zarysowanie jednej strony może wymagać przygotowania szerszego obszaru. W zależności od uszkodzenia i koloru ustala się, czy odnowić całą część, czy zastosować inny odpowiedni zakres. Tę decyzję omawiamy przed rozpoczęciem pracy.",
        "Kolor porównujemy z istniejącą powłoką auta. Kod jest pomocny, lecz wiek lakieru i poprzednie naprawy wpływają na odcień. Po przygotowaniu nakłada się przewidziane warstwy, a po wyschnięciu kontroluje powierzchnię, połysk i dopasowanie wizualne. Celem jest uporządkowana naprawa całego uszkodzenia, nie tylko zakrycie śladu kolorem.",
      ] },
      { heading: "Uszkodzenia sąsiadujących części", paragraphs: [
        "Przy uderzeniu w narożnik auta może ucierpieć nie tylko zderzak. Błotnik, okolica lampy lub mocowania mogą wymagać osobnej oceny. Dlatego zdjęcia powinny pokazywać cały obszar. Jeśli widać odstającą część albo zmienioną szczelinę, warto uchwycić ją z kilku kątów zamiast przesyłać wyłącznie zbliżenie lakieru.",
        "Prace przy metalowych elementach karoserii opisuje nasza usługa blacharska. Gdy uszkodzenie należy do zgłoszonej szkody ubezpieczeniowej, potrzebne są również informacje o sprawie i oględzinach rzeczoznawcy. Sama możliwość naprawy zderzaka nie oznacza decyzji o pokryciu kosztów przez ubezpieczyciela. Te kwestie trzeba rozpatrywać oddzielnie.",
      ] },
      { heading: "Zdjęcia i ustalenie wizyty w Torrevieja", paragraphs: [
        "Prześlij widok całego przodu lub tyłu auta, zdjęcie zderzaka w całości oraz zbliżenia uszkodzeń. Światło dzienne pomaga zobaczyć rysy i ubytki. Dodaj model samochodu i informację, jak powstał ślad. Jeśli element był demontowany lub wcześniej lakierowany, napisz o tym w wiadomości.",
        "Na podstawie zdjęć możemy udzielić wstępnej odpowiedzi i ustalić oględziny w warsztacie PaintLab. Końcowy zakres, możliwość zachowania części i koszt potwierdzamy po sprawdzeniu materiału oraz mocowań. Nie podajemy fikcyjnych terminów ani cen, ponieważ dwa podobnie wyglądające zderzaki mogą wymagać różnych prac.",
      ] },
    ],
    process: [
      { title: "Oględziny", text: "Sprawdzamy lakier, tworzywo i mocowania." },
      { title: "Naprawa", text: "Odtwarzamy odpowiednie uszkodzenia w uzgodnionym zakresie." },
      { title: "Przygotowanie", text: "Wyrównujemy powierzchnię i dobieramy materiały." },
      { title: "Lakierowanie", text: "Odnawiamy kolor i warstwę wykończeniową." },
      { title: "Kontrola", text: "Sprawdzamy gotowy element i jego wygląd." },
    ],
    faq: [
      { question: "Czy można naprawić porysowany zderzak?", answer: "Często tak, jeśli tworzywo i zakres uszkodzenia pozwalają przygotować stabilne podłoże do odnowienia powłoki." },
      { question: "Kiedy zderzak należy wymienić?", answer: "Decyzja zależy od uszkodzenia materiału i mocowań. Nie każda deformacja lub pęknięcie nadaje się do poprawnej naprawy." },
      { question: "Czy lakierujecie przednie i tylne zderzaki?", answer: "Tak, oba typy są oceniane indywidualnie przed ustaleniem zakresu przygotowania i lakierowania." },
      { question: "Czy wystarczy pomalować mały fragment?", answer: "Nie zawsze. Granice odnowienia zależą od koloru, powierzchni uszkodzenia i stanu pozostałego lakieru." },
      { question: "Czy mogę przesłać zdjęcia?", answer: "Tak. Wyślij cały zderzak i zbliżenia przez WhatsApp; końcową ocenę potwierdzamy po oględzinach." },
    ],
    relatedLinks: [
      { href: "/pl/naprawa-blacharska-torrevieja", label: "Naprawa karoserii", text: "Uszkodzenia metalowych części i odtworzenie ich formy." },
      { href: "/pl/lakierowanie-samochodu-torrevieja", label: "Lakierowanie innych elementów", text: "Drzwi, błotniki, maska i całe nadwozie." }, ...commonLinks,
    ],
    whatsapp: "Dzień dobry, PaintLab. Potrzebuję oceny naprawy i lakierowania zderzaka. Mogę przesłać zdjęcia.",
  },
  {
    key: "insurance", locale: "pl", slug: "naprawa-po-wypadku-ubezpieczenie-torrevieja",
    title: "Naprawa auta po wypadku i szkodzie ubezpieczeniowej w Torrevieja | PaintLab",
    description: "Naprawa karoserii i lakierowanie samochodu po wypadku lub szkodzie ubezpieczeniowej w Torrevieja. Ocena uszkodzeń i naprawa zależna od konkretnej sprawy.",
    h1: "Naprawa samochodu po wypadku i szkodzie ubezpieczeniowej w Torrevieja", eyebrow: "Ocena naprawy powypadkowej",
    lead: "Jeśli samochód został uszkodzony w wypadku lub kolizji i sprawą zajmuje się ubezpieczyciel, skontaktuj się z PaintLab w Torrevieja. Sprawdzimy konkretny przypadek naprawy oraz wyjaśnimy, jakie informacje są potrzebne do ustalenia dalszych działań.",
    hideDetailsTitle: true,
    benefits: [
      { title: "Konkretna sprawa", text: "Bierzemy pod uwagę uszkodzenia, dokumentację i etap oględzin." },
      { title: "Przejrzyste działania", text: "Wyjaśniamy potrzebne prace blacharskie i lakiernicze." },
      { title: "Bez obietnic wypłaty", text: "Decyzję o świadczeniu podejmuje ubezpieczyciel, nie PaintLab." },
    ],
    sections: [
      { heading: "Pierwszy kontakt po kolizji", paragraphs: [
        "Napisz, co się wydarzyło, i prześlij zdjęcia uszkodzonego pojazdu. Najbardziej przydatne są widok całej strony auta, fotografie poszczególnych elementów oraz zbliżenia rys i deformacji. Podaj markę, model oraz informację, czy samochód może bezpiecznie się poruszać. Nie trzeba rozpoczynać od długiego opisu: ważny jest jasny obraz aktualnego stanu.",
        "Jeśli szkoda została już zgłoszona, podaj nazwę ubezpieczyciela i numer sprawy, o ile go masz. Powiedz, czy były wcześniejsze ustalenia dotyczące naprawy. PaintLab analizuje konkretną sytuację, zamiast zakładać jeden schemat dla wszystkich polis. Wstępna rozmowa nie jest potwierdzeniem wypłaty ani zgodą firmy ubezpieczeniowej na wykonanie prac.",
      ] },
      { heading: "Rzeczoznawca, perito i dokumentacja szkody", paragraphs: [
        "W Hiszpanii ekspert oceniający szkodę na potrzeby ubezpieczyciela jest często określany jako perito. Poinformuj, czy oglądał już samochód i jakie dokumenty otrzymałeś. Istotne mogą być opis uszkodzeń, korespondencja lub informacja o dalszym etapie postępowania. Oceny warsztatu nie należy mylić z rozstrzygnięciem sprawy przez ubezpieczyciela.",
        "Nie każda sprawa wymaga identycznego zestawu dokumentów. Podczas pierwszego kontaktu ustalimy, jakie informacje są dostępne i co trzeba jeszcze wyjaśnić. Nie wysyłaj niepotrzebnych danych osobowych bez uzgodnienia sposobu przekazania. Jeśli oględzin rzeczoznawcy jeszcze nie było, powiedz o tym: kolejność działań trzeba dopasować do sytuacji i wymagań prowadzącej sprawę firmy.",
      ] },
      { heading: "Ocena uszkodzeń samochodu", paragraphs: [
        "Widoczna rysa lub wgniecenie nie zawsze pokazuje cały zakres szkody. Mogą ucierpieć krawędzie paneli, mocowania i sąsiednie części. Dlatego po zdjęciach potrzebne są oględziny w warsztacie. Sprawdzamy formę elementów, szczeliny, stan powłoki oraz dostęp do naprawianej strefy. W razie potrzeby zakres jest doprecyzowywany po demontażu.",
        "Jeżeli ujawnią się dodatkowe uszkodzenia, wymagają ponownej oceny i omówienia przed kontynuowaniem. Nie zakładamy automatycznie, że cała strona auta musi zostać wymieniona albo lakierowana. Potrzebne operacje wynikają ze stanu pojazdu. Dokumentacja szkody pomaga uporządkować informacje, ale nie zastępuje technicznej oceny możliwości naprawy konkretnej części.",
      ] },
      { heading: "Naprawa karoserii i lakierowanie po wypadku", paragraphs: [
        "Odpowiednie uszkodzone drzwi, błotniki, części boczne, maska, progi lub zderzaki są naprawiane zgodnie z uzgodnionym planem. Najpierw przywracana jest forma i przygotowywane podłoże. Następnie wykonuje się potrzebne szlifowanie, gruntowanie, dobór koloru i lakierowanie. Każdy etap ma znaczenie dla wyglądu gotowej powierzchni.",
        "Po zakończeniu kontrolujemy powłokę i rezultat wykonanych operacji. Nie obiecujemy stałego terminu czy ceny bez oględzin: znaczenie mają liczba elementów, zakres demontażu, stan wcześniejszych napraw i przebieg uzgodnień. Właściciel powinien wiedzieć, jakie prace są planowane oraz które kwestie wymagają jeszcze wyjaśnienia przed rozpoczęciem realizacji.",
      ] },
      { heading: "Kto decyduje o pokryciu kosztów", paragraphs: [
        "PaintLab może ocenić potrzebne prace i wyjaśnić sposób naprawy, lecz nie podejmuje decyzji za firmę ubezpieczeniową. Zakres ochrony, zatwierdzenie i wypłata zależą od konkretnej polisy oraz sprawy. Nie deklarujemy współpracy ze wszystkimi ubezpieczycielami i nie gwarantujemy, że zgłoszony koszt zostanie zaakceptowany lub zwrócony.",
        "Przed naprawą warto ustalić, co już zostało potwierdzone, a co pozostaje otwarte. Samo przesłanie zdjęć do warsztatu nie oznacza zgody ubezpieczyciela. Jeśli otrzymasz nową wiadomość od prowadzącego sprawę lub rzeczoznawcy, poinformuj PaintLab. Taka zmiana może mieć znaczenie dla planowania kolejnych kroków i uzgodnienia zakresu prac.",
      ] },
      { heading: "Realne naprawy i przygotowanie wizyty", paragraphs: [
        "Nasze realizacje przedstawiają rzeczywiste uszkodzone i odnowione części samochodów. Można zobaczyć naprawy drzwi, błotników i elementów bocznych. Nie są one dowodem na to, że ubezpieczyciel pokryje inny przypadek. Każda szkoda jest rozpatrywana osobno, a przykłady służą pokazaniu prac blacharskich i lakierniczych warsztatu.",
        "PaintLab znajduje się w Torrevieja i przyjmuje klientów po ustaleniu wizyty. Przed przyjazdem wyślij zdjęcia, nazwę ubezpieczyciela i informację o oględzinach perito. W ten sposób możemy przygotować rozmowę i wskazać, jakie dostępne materiały warto zabrać. Nie tworzymy fikcyjnej listy wymogów wspólnej dla każdej sprawy.",
      ] },
    ],
    process: [
      { title: "Kontakt", text: "Prześlij zdjęcia i opis kolizji." },
      { title: "Informacje", text: "Podaj ubezpieczyciela i stan dokumentacji." },
      { title: "Oględziny", text: "Sprawdzamy rzeczywisty zakres uszkodzeń." },
      { title: "Ustalenia", text: "Wyjaśniamy kolejne kroki w konkretnej sprawie." },
      { title: "Naprawa", text: "Wykonujemy uzgodnione prace i kontrolujemy wynik." },
    ],
    faq: [
      { question: "Co należy przesłać po kolizji?", answer: "Zdjęcia samochodu i uszkodzeń, krótki opis zdarzenia, nazwę ubezpieczyciela oraz informację o aktualnym etapie sprawy." },
      { question: "Czy potrzebna jest wycena rzeczoznawcy?", answer: "Zależy to od konkretnego postępowania. Poinformuj, czy perito już oglądał auto, i sprawdź wymagania swojego ubezpieczyciela." },
      { question: "Czy PaintLab gwarantuje wypłatę z ubezpieczenia?", answer: "Nie. Decyzje o pokryciu, zatwierdzeniu oraz wypłacie zależą od konkretnego ubezpieczyciela i okoliczności sprawy." },
      { question: "Czy jesteście partnerem wszystkich ubezpieczycieli?", answer: "Nie składamy takiej deklaracji. Każdy przypadek naprawy jest oceniany na podstawie dostępnych informacji." },
      { question: "Czy zdjęcia wystarczą do określenia całej naprawy?", answer: "Nie. Pozwalają na wstępną orientację; ostateczny zakres wymaga oględzin samochodu." },
    ],
    relatedLinks: [
      { href: "/pl/naprawa-blacharska-torrevieja", label: "Naprawa blacharska", text: "Przywracanie kształtu uszkodzonych części." },
      { href: "/pl/lakierowanie-samochodu-torrevieja", label: "Lakierowanie po naprawie", text: "Przygotowanie podłoża i odnowienie powłoki." }, ...commonLinks,
    ],
    whatsapp: "Dzień dobry, PaintLab. Chcę omówić naprawę po kolizji i szkodę ubezpieczeniową. Mogę przesłać zdjęcia i informacje o sprawie.",
  },
  {
    key: "wheels", locale: "pl", slug: "renowacja-malowanie-proszkowe-felg-torrevieja",
    title: "Renowacja i malowanie proszkowe felg w Torrevieja | PaintLab",
    description: "Renowacja felg samochodowych w Torrevieja: piaskowanie, przygotowanie powierzchni, malowanie proszkowe i prostowanie odpowiednich felg.",
    h1: "Renowacja i malowanie proszkowe felg w Torrevieja", eyebrow: "Odnowienie felg PaintLab",
    lead: "PaintLab wykonuje renowację i malowanie proszkowe felg w Torrevieja. Przed odnowieniem powłoki sprawdzamy stan felgi i jej geometrię. Jeśli deformacja oraz stan materiału pozwalają na naprawę, można zaplanować potrzebne prostowanie przed dalszym przygotowaniem.",
    hideDetailsTitle: true, showProjects: false,
    benefits: [
      { title: "Stan i geometria", text: "Oględziny poprzedzają decyzję o renowacji i prostowaniu." },
      { title: "Oczyszczona powierzchnia", text: "Usuwamy stare pokrycie i przygotowujemy felgę przez piaskowanie." },
      { title: "Powłoka proszkowa", text: "Nakładamy materiał, utwardzamy go i kontrolujemy efekt." },
    ],
    sections: [
      { heading: "Renowacja felg aluminiowych i samochodowych", paragraphs: [
        "Rysy przy krawędzi, odpryski, korozja oraz zniszczony stary lakier mogą być powodem odnowienia felgi. Najpierw trzeba rozróżnić uszkodzenie powłoki od problemu z samym elementem. Nowy kolor nie usuwa deformacji ani nie zastępuje oceny technicznej. Dlatego przed rozpoczęciem sprawdzamy widoczne defekty, poprzednie naprawy i ogólny stan materiału.",
        "Jeżeli felga nadaje się do dalszych prac, ustalamy przygotowanie i sposób wykończenia. Nie każda pozornie niewielka wada oznacza prostą usługę kosmetyczną. Znaczenie ma również to, co może ujawnić się po usunięciu starej warstwy. Zdjęcia pomagają przygotować pierwszą odpowiedź, ale ostateczny zakres renowacji potwierdzamy po oględzinach w PaintLab.",
      ] },
      { heading: "Kontrola geometrii i prostowanie felg", paragraphs: [
        "Przed malowaniem sprawdzamy także geometrię felgi. Jeżeli jest odkształcona, a stan i rodzaj deformacji pozwalają na bezpieczne wykonanie takiej pracy, w razie potrzeby przeprowadza się prostowanie na odpowiednim stanowisku. Ten etap poprzedza dalsze oczyszczenie, przygotowanie powierzchni i nakładanie powłoki proszkowej.",
        "Nie obiecujemy naprawy każdej krzywej felgi. O przydatności decydują rzeczywiste uszkodzenia i techniczna możliwość odtworzenia formy. Właściciel otrzymuje informację o stwierdzonym stanie przed uzgodnieniem prac. Opisana usługa nie obejmuje niepotwierdzonego spawania pęknięć, toczenia diamentowego ani obróbki CNC. Nie dopisujemy tych czynności do oferty renowacji.",
      ] },
      { heading: "Usunięcie starej powłoki i piaskowanie", paragraphs: [
        "Niestabilny lakier, odspojone fragmenty i zanieczyszczenia trzeba usunąć przed nowym pokryciem. Piaskowanie felg stanowi etap przygotowania czystego podłoża. Nie służy do maskowania uszkodzeń materiału. Po oczyszczeniu można ponownie ocenić powierzchnię i zauważyć miejsca, które wcześniej przykrywała stara farba lub zabrudzenie.",
        "Jeżeli odsłonięty stan wymaga zmiany planu, omawiamy to przed malowaniem. Przygotowanie ma zapewnić odpowiednią podstawę dla używanego systemu, a nie tylko szybki wizualny efekt. Zakres zależy od wcześniejszej powłoki, jej przyczepności i defektów. Nie zakładamy z góry identycznej ilości pracy przy każdej feldze z tego samego kompletu.",
      ] },
      { heading: "Malowanie proszkowe i utwardzanie", paragraphs: [
        "Na przygotowaną powierzchnię nakładany jest materiał proszkowy. Następnie przeprowadza się utwardzanie według warunków przewidzianych dla zastosowanego systemu. Kolejność przygotowania, nanoszenia i wygrzewania wpływa na równomierność gotowej powłoki. Nie podajemy jednej fikcyjnej temperatury lub czasu, które miałyby obowiązywać dla wszystkich materiałów.",
        "Kolor uzgadnia się przed rozpoczęciem. Można omówić odnowienie zbliżonego wykończenia albo zmianę koloru w ramach dostępnych i odpowiednich powłok. Ostateczny wybór powinien uwzględniać konkretną felgę oraz oczekiwany wygląd. Nie obiecujemy niepotwierdzonych efektów, sztywnej trwałości ani gwarancji bez danych odnoszących się do rzeczywiście wykonywanej usługi.",
      ] },
      { heading: "Etapy odnowienia felgi", paragraphs: [
        "Pełny proces obejmuje oględziny, kontrolę geometrii, prostowanie w razie potrzeby i przydatności, usunięcie starej powłoki, piaskowanie, przygotowanie powierzchni, malowanie proszkowe, utwardzanie oraz kontrolę końcową. Nie każdy etap naprawczy jest potrzebny w każdym przypadku: jego wykonanie wynika ze stanu felgi, a nie z ogólnej nazwy usługi.",
        "Po zakończeniu sprawdzamy gotową powierzchnię i uzgodnione punkty pracy. Jeśli podczas przygotowania pojawiają się wcześniej niewidoczne wady, trzeba je ocenić przed kontynuowaniem. Taki porządek pozwala oddzielić zwykłe odnowienie pokrycia od sytuacji wymagającej innej decyzji. Nowa farba nie powinna ukrywać problemu, którego nie obejmuje ustalona renowacja.",
      ] },
      { heading: "Jak ustalić zakres i przygotować wizytę", paragraphs: [
        "Prześlij zdjęcie każdej felgi w całości i zbliżenia rys, odprysków oraz korozji. Jeśli podejrzewasz odkształcenie, opisz zdarzenie i pokaż dostępne ujęcia uszkodzonego obszaru. Dwie podobnie wyglądające felgi mogą wymagać innych czynności. Końcowy koszt zależy od stanu materiału, prostowania, usuwania starej warstwy i wybranego wykończenia.",
        "Przed przyjazdem do warsztatu w Torrevieja uzgodnij przez WhatsApp sposób przyjęcia oraz przygotowanie do oględzin. Nie zakładaj bez potwierdzenia, że trzeba przywieźć całe auto lub że każda forma przekazania samych felg jest dostępna. Na stronie nie publikujemy zastępczej galerii: brak udokumentowanych zdjęć tej usługi nie jest uzupełniany materiałem udającym nasze realizacje.",
      ] },
    ],
    process: [
      { title: "Oględziny", text: "Oceniamy stan felgi i starego pokrycia." },
      { title: "Geometria", text: "Kontrolujemy formę i prostujemy odpowiednie felgi w razie potrzeby." },
      { title: "Oczyszczenie", text: "Usuwamy starą powłokę i piaskujemy powierzchnię." },
      { title: "Przygotowanie", text: "Przygotowujemy podłoże do nakładania proszku." },
      { title: "Malowanie", text: "Nakładamy powłokę i przeprowadzamy utwardzanie." },
      { title: "Kontrola", text: "Sprawdzamy wykończenie i uzgodniony zakres." },
    ],
    faq: [
      { question: "Czy można zmienić kolor felg?", answer: "Można omówić zmianę koloru zgodnie z dostępną powłoką i techniczną przydatnością felg." },
      { question: "Czy można usunąć otarcia felgi od krawężnika?", answer: "Otarcia od krawężnika, zadrapania i łuszczący się lakier oceniamy przed renowacją. Jeżeli stan materiału pozwala na dalsze prace, felgę można przygotować i ponownie pomalować. Uszkodzeń samego metalu nie należy traktować jak zwykłych wad powłoki." },
      { question: "Czy można odnowić jedną felgę albo komplet czterech?", answer: "Można zgłosić jedną felgę lub komplet czterech felg. Każdą oceniamy oddzielnie, a kolor i potrzebne przygotowanie ustalamy przed rozpoczęciem prac." },
      { question: "Czy felgi są piaskowane przed malowaniem?", answer: "Tak, usunięcie starej warstwy, piaskowanie i przygotowanie powierzchni należą do opisanego procesu." },
      { question: "Czy można wyprostować krzywą felgę?", answer: "Tylko jeżeli stan felgi i charakter deformacji pozwalają bezpiecznie wykonać taką pracę. Decyzję poprzedza kontrola geometrii." },
      { question: "Czy można odnowić porysowane felgi aluminiowe?", answer: "W wielu przypadkach tak. Stan materiału i powierzchni wymaga jednak oględzin przed potwierdzeniem zakresu." },
      { question: "Jak sprawdzić cenę renowacji?", answer: "Prześlij zdjęcia przez WhatsApp. Ostateczny koszt potwierdzamy po oględzinach i ustaleniu potrzebnych operacji." },
      { question: "Czy mogę przywieźć felgi bez auta?", answer: "Uzgodnij sposób przyjęcia z PaintLab przed wizytą. Nie deklarujemy jednego trybu przekazania dla każdego przypadku." },
    ],
    relatedLinks: [{ href: "/pl/lakierowanie-samochodu-torrevieja", label: "Lakierowanie samochodu", text: "Odnowienie powłoki nadwozia i pojedynczych elementów." }, ...commonLinks],
    ctaTitle: "Prześlij zdjęcia felg do oceny",
    ctaText: "Chcesz odnowić felgi? Wyślij zdjęcia przez WhatsApp. Wstępnie ocenimy widoczny stan, a końcowy zakres potwierdzimy po oględzinach.",
    whatsapp: "Dzień dobry, PaintLab. Interesuje mnie renowacja i malowanie proszkowe felg w Torrevieja. Mogę przesłać zdjęcia.",
  },
] as const satisfies readonly LocalizedServicePage[];
