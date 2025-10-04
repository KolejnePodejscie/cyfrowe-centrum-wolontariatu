import React, {  useEffect, useState } from 'react'
// src/components/Map.tsx
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {type Event} from '../../generated'
import ShowEventInfoDrawer from './showEventInfoDrawer';

type Position = {
  lat: number ;
  lng: number;
  alt?: number;
  address?:string //temporary field going to be replaced by onclick layout
};

// interface ToiletPointData{
//         id:number,
//         address: string,
//         latitude:number,
//         longitude:number,
//         price:number,
//         toilet_name:string,
//         description?:string
// }

interface LeafMapProps{
    position: Position
    zoom: number
    markerData: Event[] 
}


function LeafMap({position,zoom,markerData}:LeafMapProps) {

    // const [pos, setPos] = useState<[number?, number?] | null>(null);
    const[marks, setMarks]= useState<Event[] >([])
    const[isDrawerOpen,setisDrawerOpen]= useState(false)
    const [eventData, setEventData] = useState<Event>({})

    function openDrawer(data:Event){
        // console.log("click");
        setEventData(data)
        setisDrawerOpen(!isDrawerOpen)
    }

    useEffect(()=>{
        console.log("Changed");

       console.log(markerData.length);
       
       if(markerData.length>0){
        const markerArr:Event[]=[]
            for(const index in markerData){
                markerArr.push({
                description: markerData[index].description,
                endDate: markerData[index].endDate, 
                id: markerData[index].id,
                imageUrls: markerData[index].imageUrls,
                location: markerData[index].location,
                organisationId: markerData[index].organisationId,
                startDate: markerData[index].startDate,
                title: markerData[index].title
                })
            }
            setMarks(markerArr)
        }
    },[markerData])

    function MapClicks(){
  
        useMapEvents({
            
            click(e) {
                console.log("Clicked at:", e.latlng);
                       
            },
        });

        return (<></>)
    }

    function setIsOpen(){
        setisDrawerOpen(false)
    }

  return (
        <MapContainer center={position} zoom={zoom} worldCopyJump={true} zoomControl={false} attributionControl={false}  scrollWheelZoom={'center'} className={"z-1 h-screen w-screen"} >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* zoom controls <ZoomControl position='bottomright'></ZoomControl> */}
            
            Mapping functionality
            {marks.map((marker,i)=>(<Marker key={i} eventHandlers={{
                click: () =>{
                    console.log("click"); 
                    const data = {
                        description: marker.description,
                        endDate: marker.endDate, 
                        id: marker.id,
                        imageUrls: marker.imageUrls,
                        location: marker.location,
                        organisationId: marker.organisationId,
                        startDate: marker.startDate,
                        title: marker.title
                    }
                    openDrawer(data)
                }
            }}
            position={{lat: marker.location!.latitude!, lng: marker.location!.longitude!}}>

              
            </Marker>))}
            <MapClicks/>

            <ShowEventInfoDrawer isOpen={isDrawerOpen} setIsOpen={setIsOpen} eventData={eventData}></ShowEventInfoDrawer>

        
        </MapContainer>
    
  )
}

export default LeafMap