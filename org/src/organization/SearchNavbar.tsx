"use client"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function SearchNavbar() {
  return (
    <header className="flex flex-row justify-center align-center  m-2">
      <div className="l-0">
         <Input type="search"></Input>
      </div>
    </header>
  )
}

export default SearchNavbar
