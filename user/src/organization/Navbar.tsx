"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu"
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Textarea } from "../components/ui/textarea";
import { Link } from "react-router-dom";

export function Navbar() {

  function handleLogin() {
      window.location.href = `https://auth.${baseDomain}/self-service/login/browser?return_to=https://adm.${baseDomain}/`;
  }
  function handleLogout() {
    window.location.href = `https://auth.${baseDomain}/self-service/logout/browser?return_to=https://adm.${baseDomain}/`;
  }
  return (
    <header className="flex justify-center h-14 m-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <img src="/logo.webp" className="h-14" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/mapa">Mapa Wydarzeń</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/mojeWydarzenia">Wydarzenia</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/czaty">Czaty</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
          <Sheet>
      <SheetTrigger asChild>
              <NavigationMenuLink>Mój Profil</NavigationMenuLink>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cześć Wolontariuszu!</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
          <Avatar className="self-center">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> 
          <Textarea className="w-80 self-center h-80" rows={15} placeholder="Jak się czujesz?"></Textarea>

          <Button className="w-50 self-center mt-10" variant={"default"}>Edytuj Profil</Button>
        <SheetFooter>
          <SheetClose asChild>
            <Link to={"/profil"}></Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
      </NavigationMenu>
    </header>
  )
}

export default Navbar
