import React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate();

    const setRoute = (route:string) => {
        navigate(`${route}`)  
    };


  return (
    <div className='self-center w-screen'>
        {/* <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>TEST</NavigationMenuTrigger>
                    <NavigationMenuContent><p>content</p></NavigationMenuContent>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuTrigger>TEST</NavigationMenuTrigger>
                    <NavigationMenuContent><p>content</p></NavigationMenuContent>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuTrigger>TEST</NavigationMenuTrigger>
                    <NavigationMenuContent><p>content</p></NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu> */}
        <div className='flex flex-row justify-around self-center w-full '>
            <Button onClick={()=>setRoute('/dashboard')} variant={'outline'} className='w-50'>Dashboard</Button>
            <Button variant={'outline'} onClick={()=>setRoute('/myEvents')} className='w-50'>Wydarzenia Organizacji</Button>
            <Button variant={'outline'}  onClick={()=>setRoute('/eventsMap')} className='w-50'>Mapa Wydarzeń</Button>
            <Button variant={'outline'} onClick={()=>setRoute('/chats')} className='w-25'>Czaty</Button>
        </div>




    </div>
  )
}

export default Navbar