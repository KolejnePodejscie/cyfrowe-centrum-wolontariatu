Cyfrowe Centrum Wolontariatu to wielomodułowy ekosystem łączący wolontariuszy, organizacje i administratorów. Składa się z backendowego API oraz trzech interfejsów (panel użytkownika, panel organizacji/koła wolonatariatu i panel administracyjny). Umożliwia zarządzanie wydarzeniami, organizacjami, wolontariuszami, weryfikacjami oraz analizą aktywności - z naciskiem na czytelność, skalowalność i integrację z bezpiecznym systemem tożsamości.


---


Na początku był… chaos. Mieliśmy rosnącą listę pomysłów: wydarzenia, organizacje, weryfikacja, mapa, role, zadania, przyszłe zaświadczenia. Równolegle startowały trzy interfejsy (admin / organizacja / użytkownik), backend dopiero się krystalizował, a każdy członek zespołu widział to trochę inaczej. Pierwszy przełom nastąpił w momencie, gdy zdecydowaliśmy się potraktować OpenAPI jako centralny kontrakt - nie tylko "dokumentację", ale rdzeń projektu.

**Trzy odrębne światy, jeden ekosystem**

Wykorzystanie OpenApi pozwoliło nam na jednoczesną pracę nad wieloma elementami naszego systemu, w który wchodzą:

  1. Panel administratora: potrzeba kontroli i weryfikacji - stąd nacisk na listy organizacji, filtrowanie i eksport.
  2. Panel organizacji: najważniejsze było "dodam wydarzenie i widzę swoje" - reszta mogła poczekać.
  3. Mobilna aplikacja wolontariusza: lekkość, mapa i szybki dostęp do listy inicjatyw i forum na którym szybko można znaleźć odpowiedzi na nękające nas pytania.

**Zapewnienie bezpieczeństwa nie jest łatwe**

Chcąc jak najlepiej zabezpieczyć naszą aplikację od samego początku, pojawiły się problemy z ustawieniem środowiska deweloperskiego w taki sposób, żeby jednocześnie działały: sesje z Ory Kratos, ciasteczka z poprawnymi flagami, kilka frontów (admin, organizacja, użytkownik) oraz backend - a wszystko to na lokalnych domenach. Zderzyliśmy się z klasycznymi pułapkami: ciasteczko sesyjne niewidoczne przez przeglądarkę (bo brak HTTPS, zła domena, zła konfiguracja), puste odpowiedzi z endpointu whoami, chaotyczne CORS. Każdy z tych drobnych problemów osobno wydawał się błahostką - razem spowalniały zespół i testowanie funkcji. Dopiero uporządkowanie domen, certyfikatów lokalnych i jasnego modelu przepływu sesji pozwoliło przejść z "walczymy z infrastrukturą" do "rozwijamy funkcjonalność".

**Gdzie ja jestem i gdzie mam iść**

Integracja z mapą była momentem przełomowym - na urządzeniach mobilnych zaczęło to działać niemal od ręki: gesty, płynne przybliżenia, naturalne zachowania interfejsu. W przeglądarce jednak zderzyliśmy się z trudnościami. To doświadczenie szybko pokazało różnicę między natywnym wsparciem gestów i komponentów w aplikacjach mobilnych, a warstwą abstrakcji w webie.

**Czat? A może jednak forum?**

Gdy zaczęliśmy analizować, jak komunikują się różne grupy, zauważyliśmy powtarzalny wzorzec: te same pytania pojawiały się w prywatnych rozmowach. Stąd decyzja, że obok czatu pojawia się forum grupowe. Jedna odpowiedź, wiele rozwiązanych wątpliwości.

**Dostępność i dlaczego natywne aplikacje**

Natywne aplikacje mobilne często wygrywają w dostępności dzięki głębokiej integracji z systemowymi usługami asystującymi, automatycznemu dziedziczeniu semantyki i preferencji użytkownika (skalowanie, kontrast, redukcja ruchu), niższym opóźnieniom gestów oraz możliwości wykorzystania czujników i haptyki. Znacznie trudniej osiągnąć takie stopnie dostępności korzystając z technologi webowych.
