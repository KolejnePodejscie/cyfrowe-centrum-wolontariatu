# Panel Organizacji – Cyfrowe Centrum Wolontariatu

Ten moduł (`org/`) to frontend przeznaczony dla przedstawicieli organizacji / koordynatorów wolontariatu. Umożliwia:
- zarządzanie wydarzeniami (przegląd, dodawanie),
- podgląd listy wydarzeń w formie mapy (Leaflet + OpenStreetMap),
- przegląd użytkowników (wolontariuszy) związanych z organizacją,
- podstawową nawigację po sekcjach aplikacji.


## Stos technologiczny

| Obszar | Technologia |
|--------|-------------|
| Bundler / Dev Server | Vite |
| Język | TypeScript |
| UI / Widoki | React 19 (RC / aktualny kanał) |
| Routing | React Router DOM |
| Stylowanie | Tailwind CSS + zmienne motywów |
| Mapy | React Leaflet + OpenStreetMap |
| Ikony | (brak widocznych w dostarczonych fragmentach, możliwe użycie lucide / Radix w innych plikach) |
| Dynamiczny import | `React.lazy` + `Suspense` |
| Klient API | Kod generowany (katalog `generated/`) – `DefaultApi`, `Configuration` |
| Utility klas | `clsx`, `tailwind-merge` |

---

## Szybki start (lokalnie)

1. Wejdź do katalogu modułu:
   ```bash
   cd org
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Wygeneruj klienta API (jeśli nie istnieje):
   ```bash
   npm run generate:apis
   ```
4. Uruchom środowisko deweloperskie:
   ```bash
   npm run dev
   ```
5. Otwórz w przeglądarce adres (domyślnie):  
   `http://localhost:5173`

---

## Skrypty (package.json)

| Komenda | Opis |
|---------|------|
| `npm run dev` | Start dev (Vite + HMR) |
| `npm run build` | Budowa produkcyjna (TS + Vite) |
| `npm run preview` | Serwowanie zbudowanej wersji |
| `npm run lint` | Lintowanie kodu |
| `npm run generate:apis` | Regeneracja klienta z OpenAPI (SwaggerHub) |

---

## Mapa wydarzeń

`LeafRender.tsx`:
- Inicjuje `DefaultApi` (bez jawnego `basePath` – może wymagać konfiguracji `VITE_API_URL`)
- Pobiera wydarzenia przez `api.getEvents()`
- Przekazuje dane do `LeafMap` (dynamiczny import przez `React.lazy`)

`LeafMap.tsx`:
- Renderuje `MapContainer`, markery (rekonstrukcja obiektów `Event`)
- Zawiera stub obsługi kliknięć i reverse geocoding (Nominatim)
- Otwarcie „drawer” (komponent `ShowEventInfoDrawer` – brak w wynikach)

Rekomendacje:
- Klucz `key` przy mapowaniu markerów
- Caching / debounce zapytań
- Wyodrębnienie warstwy geolokalizacji do hooka (`useReverseGeocode`)

