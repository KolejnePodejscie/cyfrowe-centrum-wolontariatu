"use client"

import { User } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { baseDomain } from '../config.tsx'
import { useEffect } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";

export function NavigationMenuDemo() {
  async function isKratosSessionValid(): Promise<boolean> {
    try {
      const response = await fetch(`https://auth.${baseDomain}/sessions/whoami`, {
        method: 'GET',
        credentials: 'include',
      });
      console.log(response);
      return response.status === 200;
    } catch {
      return false;
    }
  }

  function handleLogin() {
    window.location.href = `https://auth.${baseDomain}/self-service/login/browser?return_to=https://adm.${baseDomain}/`;
  }
  function handleLogout() {
    window.location.href = `https://auth.${baseDomain}/self-service/logout/browser?return_to=https://adm.${baseDomain}/`;
  }

  useEffect(() => {
    isKratosSessionValid().then(isValid => {
      if (!isValid) {
        handleLogin();
      }
    });
  }, []);

  return (
    <header className="flex h-14 m-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">
              <img src="/logo.webp" className="h-14" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/organizacje">Organizacje</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/wolontariusze">Wolontariusze</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/wydarzenia">Wydarzenia</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost"
                  className="flex items-center gap-2">
                  <User className="h-8 w-8 text-gray-600" />
                  <div>Administrator</div>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Administrator</DialogTitle>
                </DialogHeader>
                Czy chcesz się wylogować?
                <DialogFooter>
                  <Button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleLogout}
                  >
                    Tak
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

