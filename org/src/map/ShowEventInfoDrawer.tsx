import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Separator } from '@radix-ui/react-separator';
import React, { useEffect, useState } from 'react'
import {type Event} from '../../generated'


interface EventInfoProps{
    isOpen: boolean;
    setIsOpen: ()=>void
    eventData: Event
}

function ShowEventInfoDrawer({isOpen, setIsOpen,eventData}:EventInfoProps) {
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(isOpen)

    useEffect(()=>{
        console.log(eventData);
                setIsDrawerOpen(isOpen)
    },[isOpen])

  return (
   
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger>Open</DrawerTrigger>
        
        <DrawerContent className='h-1/2'>

            <DrawerHeader>
                <DrawerTitle className='self-start'>Wydarzenie {eventData.title}</DrawerTitle>
                <DrawerDescription className=''>
                     {eventData.description}
                </DrawerDescription>
            </DrawerHeader>

            <div className='self-center'>
                    Toilet Id :{eventData.id} <Separator/>
                    Toilet Latitude: {eventData.latitude}<Separator/>
                    Toilet Longitude: {eventData.longitude}<Separator/>
            </div>

            <DrawerFooter>
                <Button className='w-40 self-center' variant='default'>Submit</Button>
                <DrawerClose asChild onClick={()=>setIsOpen()}>
                           <Button className='w-40 self-center' variant='secondary'> close</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}

export default ShowEventInfoDrawer