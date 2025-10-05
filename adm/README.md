# Panel Administracyjny – Cyfrowe Centrum Wolontariatu

Ten moduł (`adm/`) zawiera panel administracyjny systemu Cyfrowego Centrum Wolontariatu. Aplikacja służy do:
- przeglądania i weryfikacji organizacji oraz Kół Wolontariatu,
- przeglądania wydarzeń,
- podglądu statystyk wolontariuszy (np. liczba przepracowanych godzin),
- podstawowego zarządzania sesją i kontem administratora.

## Stos technologiczny

| Obszar | Technologia |
|--------|-------------|
| Bundling / Dev Server | Vite |
| Język | TypeScript |
| Widoki / UI | React |
| Routing | React Router |
| Stylowanie | Tailwind CSS + motywy / utility classes |
| Ikony | lucide-react |
| Komponenty UI | (wygląda na wykorzystanie komponentów inspirowanych shadcn/ui) |
| Autoryzacja / Sesja | Ory Kratos (pośrednio – wywołania do `auth.<domena>`) |
| Konfiguracja API | Klasa `Configuration` (wygenerowany klient) |

## Szybki start

1. Klonuj repozytorium (instrukcja na poziomie głównym projektu).
2. Wejdź do katalogu modułu:
   ```bash
   cd adm
   ```
3. Zainstaluj zależności (przykład z npm – jeśli używacie pnpm/yarn, dostosuj polecenie):
   ```bash
   npm install
   ```
4. Uruchom środowisko deweloperskie:
   ```bash
   npm run dev
   ```
5. Otwórz w przeglądarce adres wyświetlony w konsoli (standardowo `http://localhost:5173`).

## Skrypty (przykładowe)

| Komenda | Opis |
|---------|------|
| `npm run dev` | Uruchamia serwer deweloperski Vite z HMR |
| `npm run build` | Buduje aplikację produkcyjnie (output domyślnie w `dist/`) |
| `npm run preview` | Podgląd zbudowanej aplikacji |
| `npm run generate:apis` | Generuj klient aplikacji z OpenApi schemy serwera |


## Konfiguracja domen i API

W pliku `src/config.tsx`:
```ts
export const baseDomain = "dev.wolontariusz.app";
export const apiConfig = new Configuration({
  basePath: `https://api.${baseDomain}`,
  credentials: 'include',
});
```

Jeżeli środowisko się zmienia (np. staging / produkcja), należy zamienić wartość `baseDomain`.

## Autoryzacja i sesja

Logika w `els/navbar.tsx`:
- Sprawdza ważność sesji: `GET https://auth.${baseDomain}/sessions/whoami`
- W przypadku braku ważnej sesji następuje przekierowanie do ekranu logowania Ory Kratos:
  ```
  https://auth.${baseDomain}/self-service/login/browser?return_to=https://adm.${baseDomain}/
  ```
- Wylogowanie: przekierowanie do endpointu logout Ory

