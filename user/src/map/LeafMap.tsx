import React, {  useEffect, useState } from 'react'
// src/components/Map.tsx
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {type Event} from '../../generated'
import ShowEventInfoDrawer from './ShowEventInfoDrawer';

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


function LeafMap({position,zoom,markerData}:LeafMapProps) {

    const [pos, setPos] = useState<[number, number] | null>(null);
    const [marks, setMarks]= useState<Event[] >([])
    const [isDrawerOpen,setisDrawerOpen]= useState(false)
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
                organisationId: markerData[index].organisationId,
                startDate: markerData[index].startDate,
                title: markerData[index].title,
                latitude: markerData[index].latitude,
                longitude: markerData[index].longitude
                })
            }
            setMarks(markerArr)
        }
    },[markerData])

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
                e.originalEvent.preventDefault(); // prevent map click
                console.log("Clicked at:",e.latlng);   
                // setPos([e.latlng.lat, e.latlng.lng]);
                //  const newMarker: Event = {
                //     id: '',
                //     title: '',
                //     description: '',
                //     organisationId: '',
                //     imageUrls: '',
                //     startDate: undefined,
                //     endDate: undefined,
                //     latitude: undefined,
                //     longitude: undefined,
                //     };
                //     setMarks((prev) => [...prev, newMarker]);

                //  openDrawer(newMarker)
                
            reverseGeocode(e.latlng.lat,e.latlng.lng).then(
            (address) => console.log("Address:", address)
                ); 
            },
        });

        return pos === null ? null : <Marker position={pos} />;    }

    function setIsOpen(){
        setisDrawerOpen(false)
    }


  return (
        <MapContainer center={position}  zoom={zoom} worldCopyJump={true} zoomControl={false} minZoom={7} attributionControl={false}  scrollWheelZoom={'center'} className={"z-1 h-screen w-screen"} >
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
                        organisationId: marker.organisationId,
                        startDate: marker.startDate,
                        title: marker.title,
                        latitude: marker.latitude,
                        longitude: marker.longitude
                    }
                    openDrawer(data)
                }
            }}
            position={{lat: marker.latitude!, lng: marker.longitude!}}>

              
            </Marker>))}
            <MapClicks/>

            <ShowEventInfoDrawer isOpen={isDrawerOpen} setIsOpen={setIsOpen} eventData={eventData}></ShowEventInfoDrawer>
            
        </MapContainer>
  )
}

export default LeafMap