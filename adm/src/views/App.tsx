import { NavigationMenuDemo } from "../els/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, BarChart2, CheckCircle2, User2 } from "lucide-react";
import { Link } from "react-router";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavigationMenuDemo />
      <main className="flex-1 flex justify-center items-center">
        <div className="w-xl h-fit gap-4 grid grid-cols-2 columns-2">
          <Link to="/wydarzenia">
            <Card className="h-72">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin size={24} />
                  <CardTitle>Wydarzenia</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Przeglądaj interaktywną mapę oraz szczegółową listę nadchodzących wydarzeń organizowanych przez różne instytucje. Sprawdź lokalizacje, daty i opisy, aby znaleźć coś dla siebie.
              </CardContent>
            </Card>
          </Link>
          <Link to="/wolontariusze">
            <Card className="h-72">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart2 size={24} />
                  <CardTitle>Wolontariusze</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Analizuj zestawienie wolontariuszy wraz z liczbą przepracowanych godzin. Poznaj swoje osiągnięcia i porównaj wyniki z innymi uczestnikami.
              </CardContent>
            </Card>
          </Link>
          <Link to="/weryfikacja">
            <Card className="h-72">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={24} />
                  <CardTitle>Organizacje</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Przeglądaj listę organizacji oraz Kół Wolontariatu oczekujących na akceptację. Weryfikuj zgłoszenia i wspieraj rozwój społeczności.
              </CardContent>
            </Card>
          </Link>
          <Link to="/#admin">
            <Card className="h-72">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <User2 size={24} />
                  <CardTitle>Zarządzanie kontem</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                Edytuj swoje dane, zmieniaj ustawienia konta oraz zarządzaj preferencjami powiadomień. Wszystko w jednym miejscu dla Twojej wygody.
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default App
