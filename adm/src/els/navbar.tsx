"use client"

import { User } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
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
            <NavigationMenuLink href="#admin">
              <div className="flex items-center gap-2">
                <User className="h-8 w-8 text-gray-600" />
                <div>Administrator</div>
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

