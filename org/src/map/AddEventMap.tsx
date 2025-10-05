import React, { useState } from 'react'
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {type Event} from '../../generated'
import ShowEventInfoDrawer from './ShowEventInfoDrawer';
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'


type Position = {
  lat: number ;
  lng: number;
  alt?: number;
  address?:string //temporary field going to be replaced by onclick layout
};


interface LeafMapProps{
    position: Position
    zoom: number
    markerData: Event[] 
}


function LeafMap({position,zoom}:LeafMapProps) {

    const [isDrawerOpen,setisDrawerOpen]= useState(false)
    const [searchString, setSearchString]= useState<string>("")
    const [eventData, setEventData] = useState<Event>({})
    
    

    async function Geocode(address:string) {

        const response = await fetch(`api.wolontariusz.app/search?q=${address}`,{
            headers:{
                "User-Agent": "YourAppName/1.0", // Nominatim requires identifying User-Agent
            } 
        })
        if (!response.ok) throw new Error("Failed to reverse geocode");

        const data = await response.json();
        console.log(data);
        
        // return data.display_name; // full address string
        
    }

    async function reverseGeocode(lat: number, lon: number) {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;

        const response = await fetch(url, {
            headers: {
            "User-Agent": "YourAppName/1.0", // Nominatim requires identifying User-Agent
            },
        });

        if (!response.ok) throw new Error("Failed to reverse geocode");

        const data = await response.json();
        return data.display_name; // full address string
    }
    function MapClicks(){
        useMapEvents({
            click(e) {
                console.log("Clicked at:",e.latlng);     
                
            reverseGeocode(e.latlng.lat,e.latlng.lng).then(
            (address) => console.log("Address:", address)
                ); 
            },
        });
        return null
    }

    function setIsOpen(){
        setisDrawerOpen(false)
    }

    function searchAddress(){
       const data= Geocode(searchString)
        if(data){
            // openDrawer({})
        }

    }

      function openDrawer(data:Event){
            // console.log("click");
            setEventData(data)
            setisDrawerOpen(!isDrawerOpen)
        }

  return (
    <>
        <MapContainer center={position} zoom={zoom} worldCopyJump={true} zoomControl={false} attributionControl={false}  scrollWheelZoom={'center'} className={"z-1 absolute h-screen w-screen"} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* zoom controls <ZoomControl position='bottomright'></ZoomControl> */}
            Mapping functionality
            
            <MapClicks/>

            <ShowEventInfoDrawer isOpen={isDrawerOpen} setIsOpen={setIsOpen} eventData={eventData}></ShowEventInfoDrawer>
        </MapContainer>  
            <div className="absolute top-5 left-0 right-0 z-3 flex flex-row gap-4 px-5">
            {/* Search input with icon */}
            <div className="relative flex items-center flex-10 w-full max-w-xl">
                <Search className="absolute left-3 h-6 w-6" />
                <Input
                type="text"
                placeholder="Wyszukaj adres wydarzenia..."
                className="pl-12 h-16 !text-2xl bg-neutral-100 w-full"
                onInput={(e) => setSearchString(e.currentTarget.value)}
                />

                <Button variant={'outline'} className='!text-2xl h-16'  onClick={()=>searchAddress()}>Wyszukaj</Button>
            </div>
            </div>
              {/* Buttons */}
            <div className="flex flex-row absolute z-3 right-0 flex-1 w-22 h-13 bg-white rounded-bl-lg">
                <header>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className='text-2xl' href="/wydarzenia">Powrót</NavigationMenuLink>
                        </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
                </header>
              
            </div>
    </> 
  )
}

export default LeafMap
