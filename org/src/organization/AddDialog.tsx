import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Configuration, DefaultApi, type Event } from '../../generated'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Trash, Check } from 'lucide-react';
import { DatePicker } from './DatePicker'
import { data } from 'react-router-dom'

interface AddDialogProps{
    name: string
    eventData?: Event
}
export interface Location {
  latitude: number;
  longitude: number;
}

const config = new Configuration();
const api = new DefaultApi(config);


function AddDialog({name, eventData}:AddDialogProps) {

    
    const [description, setDescription] = useState<string>("");
    const [endDate, setEndDate] = useState<Date>();
    const [imageBytes, setImageBytes] = useState<Uint8Array[]>([]);
    const [latitude, setLatitude] = useState<number>(0);
    const [longitude, setLongitude] = useState<number>(0);
    const [startDate, setStartDate] = useState<Date>();
    const [title, setTitle] = useState<string>("");
    const [organisationId]=useState<string>("null")

    const addEvent = async ()=>{
        // const eventCreateData = {
        //                 description: description,
        //                 endDate: endDate, 
        //                 imageUrls:imageBytes ,
        //                 latitude:latitude,
        //                 longitude:longitude,
        //                 organisationId: "nie ma narazie", //eventData!.organisationId
        //                 startDate: startDate,
        //                 title: title
        //             }
        // console.log(eventCreateData);

        const formData = new FormData();

        // Append other event fields
        formData.append(
            "eventData",
            JSON.stringify({ title, description, startDate, endDate, latitude, longitude,organisationId })
        );

        // Append images as blobs
        imageBytes.forEach((bytes) => {
        const blob = new Blob([bytes]); // convert Uint8Array to Blob
        formData.append("image", blob); // filename optional
        });
        
        console.log(formData);

        fetch("google.com/please",({method:"POST",
            body:formData
        }))
        

        // console.log(await api.postEvents({event:eventCreateData})); 
    }

    function setDate(prop:string,date:Date){
        console.log("ADASDA");
        
        if(prop=="start"){
            setStartDate(date)
        }
        else if (prop=="end"){
            setEndDate(date)
        }
    }
   

   const handleInput = async (e: React.FormEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    const byteArrays: Uint8Array[] = await Promise.all(
      Array.from(files).map(async (file) => {
        const buffer = await file.arrayBuffer();
        return new Uint8Array(buffer); // raw bytes
      })
    );

    setImageBytes(byteArrays);
    console.log("File bytes:", byteArrays);
  };


  return (
    <div>
     <AlertDialog>
      <AlertDialogTrigger asChild>
        {eventData ?  
        (<Button className='bg-sky-500' variant="default">{name}</Button>)
        :
        (  <Button className='bg-lime-500' variant="outline">{name}</Button>)}
    
      </AlertDialogTrigger>     
        <AlertDialogContent> 
            <AlertDialogHeader>
          <AlertDialogTitle>Edycja wydarzenia</AlertDialogTitle>
        </AlertDialogHeader>
                 <div className="flex flex-col w-full items-center gap-3">
                    <Input
                        placeholder="Nazwa"
                        defaultValue={eventData?.title}
                        onInput={(e)=>{
                           setTitle(e.currentTarget.value)
                        }}
                        className="mt-5"
                    />
                    <div className="flex w-full gap-4">
                        <div className="flex flex-col text-center w-1/2">
                        <DatePicker setFormDate={setDate} alias="start" name="Start wydarzenia" />
                        </div>

                        <div className="flex flex-col text-center w-1/2">
                        <DatePicker setFormDate={setDate} alias="end" name="Koniec wydarzenia" />
                        </div>
                    </div>

                
               {!eventData ? (
                <>
                    <Textarea placeholder="opis"  onInput={(e)=>{
                           setDescription(e.currentTarget.value)
                        }}></Textarea>
                        <Label htmlFor="picture"  className='text-start'>Zdjęcia</Label>
                      <Input
                        id="picture"
                        type="file"
                        multiple
                        className="max-w-sm"
                        onInput={handleInput}
                        />
                </>
                ):(<Textarea placeholder="opis" className='my-5' defaultValue={`${eventData?.description}`}></Textarea>)}
        </div>
        <AlertDialogFooter>
            <div className='flex flex-row justify-between w-full'>
                <AlertDialogCancel className="bg-rose-400 text-white hover:bg-rose-500 hover:text-white ">
                    Anuluj <Trash/>
                </AlertDialogCancel>
                <AlertDialogAction onClick={()=>{
                    addEvent()
                }} className='bg-lime-500 hover:bg-lime-600'>{name.split(' ')[0]}<Check></Check></AlertDialogAction>
            </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}

export default AddDialog