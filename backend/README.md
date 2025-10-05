# Backend – Cyfrowe Centrum Wolontariatu

Moduł `backend/` dostarcza REST API dla aplikacji (panele: administracyjny, organizacje oraz aplikacja mobilna). Odpowiada za:
- Zarządzanie użytkownikami, organizacjami i wydarzeniami
- Obsługę zadań i przypisań wolontariuszy (częściowo zaimplementowane)
- Komunikację
- Przechowywanie metadanych oraz plików (obrazy / uploady)
- Integrację z systemem tożsamości (Ory Kratos)
- Migracje bazy danych PostgreSQL
- Logowanie i obsługę błędów

---

## Stos technologiczny

| Obszar | Technologia / Biblioteka |
|--------|---------------------------|
| Runtime | Node.js (ESM) |
| Język | TypeScript |
| Framework HTTP | Express 5 |
| Baza danych | PostgreSQL (biblioteka `postgres`) |
| Migracje | `postgres-shift` (skrypt `scripts/migrate.js`) |
| Walidacja / typy danych | (zależność: `zod` – potencjał do wykorzystania) |
| Logowanie | `pino`, `pino-http`, `pino-pretty` |
| Pliki / upload | `multer`, katalog `uploads/` |
| Autoryzacja / sesja | Ory Kratos (`@ory/kratos-client`) |
| Obsługa środowisk | `dotenv`, `dotenv-expand` |
| Konteneryzacja | Docker (multi‑stage build) |

---

## Skrypty (package.json)

| Komenda | Opis |
|---------|------|
| `npm run dev` | Start w trybie deweloperskim (watch przez `tsx`) |
| `npm run build` | Kompilacja TypeScript do `dist/` |
| `npm start` | Uruchomienie zbudowanej aplikacji (`node dist/index.js`) |
| `npm run migrate` | Wykonanie migracji z katalogu `migrations/` |
| `npm run clean` | Czyszczenie katalogu `dist` i uploadów |

---

## Zmienne środowiskowe

Zdefiniowane w `src/environment.d.ts` (przykładowe):

```
NODE_ENV=development
PORT=3000
DB_URL=postgres://user:pass@host:5432/dbname
ORY_URL=https://auth.przyklad.pl
MOCK_COOKIE=...
```

Dodatkowo (z komentarzy w migracjach) można potencjalnie używać szczegółowego połączenia:
```
DB_USER=
DB_PASS=
DB_NAME=
```

Przykładowy plik `.env` (lokalnie):

```
NODE_ENV=development
PORT=3000
DB_URL=postgres://postgres:postgres@localhost:5432/wolontariat
ORY_URL=http://localhost:4433
MOCK_COOKIE=
```

Dla produkcji należy usunąć zmienną MOCK_COOKIE

---

## Uruchomienie lokalne

1. Klon repozytorium (na poziomie głównym projektu).
2. Wejdź do katalogu backend:
   ```bash
   cd backend
   ```
3. Zainstaluj zależności:
   ```bash
   npm ci
   ```
4. Utwórz plik `.env` (zgodnie z sekcją wyżej).
5. (Opcjonalnie) Upewnij się, że PostgreSQL działa i baza istnieje.
6. Uruchom migracje:
   ```bash
   npm run migrate
   ```
7. Start dev:
   ```bash
   npm run dev
   ```
8. API będzie dostępne pod `http://localhost:<PORT>/`.

---

## Migracje bazy danych

Migracje znajdują się w katalogu `migrations/` w numerowanych folderach:  
`00001_user_table`, `00003_event_table`, `00004_event_volounteres_table`, `00005_organisation_managers`, `...` itd.

Mechanizm:
- Narzędzie: `postgres-shift`
- Skrypt: `scripts/migrate.js`
- Przy starcie kontenera (Docker) wykonywane: `npm run migrate && npm start`

Przykłady (fragmenty):
- Tworzenie tabeli użytkowników (`users`)
- Tabela wydarzeń (`events`) – uwaga: literówki w kolumnach (`longitdue`, `oragnisationId`)
- Tabela przypisań wolontariuszy do wydarzeń (`eventVolunteer`)
- Domyślne generowanie UUID (`gen_random_uuid()`)
- Obrazy wydarzeń (`eventImages`)
- Flaga `isAdmin` dla użytkowników

Warto w kolejnych migracjach rozważyć:
- Korektę literówek (`longitdue` → `longitude`, `oragnisationId` → `organisationId`)
- Indeksy (np. po `eventId`, `organisationId`)
- Konwersję współrzędnych (migracja 00014 zaczyna to adresować)

---

## API – Przegląd tras

Zobacz OpenApi schema razem z dokumentacją pod tym adresem: `https://app.swaggerhub.com/apis-docs/kolejnepodejcie/reference/1.0.0`.

---

## Autoryzacja i sesje

W kodzie widać użycie:
- `requireAuth` – middleware (sprawdza sesję – integracja z Ory Kratos)
- `isAdmin(userId)` – logika sprawdzająca uprawnienia

Typowy flow:
1. Klient (frontend) posiada cookie sesyjne z Ory.
2. Backend przy przychodzącym żądaniu weryfikuje sesję.
3. Endpointy sprawdzają permisje.

---

## Przechowywanie plików

- Upload obsługiwany przez `multer`
- Fizycznie w katalogu `uploads/`
- Dostęp do plików przez `/blobs/:blobId`
- MIME wykrywane dynamicznie (`file-type`)

Zalecenia:
- Walidacja rozmiaru / typu
- Sprzątanie osieroconych plików
- Ewentualne przeniesienie do S3 / Object Storage

---

## Docker

`Dockerfile` (multi-stage):

1. Stage `builder`:
   - `npm ci`
   - `npm run build`
2. Stage `runner`:
   - Kopiuje `dist/`, `migrations/`, `scripts/`, `package*.json`
   - `npm ci --omit=dev`
   - `CMD npm run migrate && npm start`

Przykład budowy i uruchomienia:

```bash
docker build -t ccw-backend .
docker run --env-file .env -p 3000:3000 ccw-backend
```

---

## Baza danych – modele (fragment)

Użytkownicy (`users`):
- `id UUID PRIMARY KEY`
- `displayname`
- `description`
- `email`
- `isAdult`
- `isAdmin` (domyślnie false)
- `profileImage`
- `createdAt`

Wydarzenia (`events`):
- `id`
- `title`
- `description`
- `latitude`, `longitdue` (literówka)
- `startDate`, `endDate`
- `oragnisationId` (literówka + FKey)

Relacje pomocnicze:
- `eventVolunteer (eventId, volunteerId, isAccepted)`
- `oragnisationManagers (organisationId, managerId)`
- `eventImages (eventId, imageName)`

Zadania (wspomniane w kodzie): `eventTasks`, `taskAssignment` (na podstawie migracji)
- Migracja dodaje np. `opinion` w `taskAssignment`

