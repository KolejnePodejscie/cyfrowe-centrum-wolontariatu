import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultApi, Configuration, type Event } from "../../generated";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DialogF from "@/els/dialog";


function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const config = new Configuration();
  const api = new DefaultApi(config);


  //dodac id organizacji organisationevents
  useEffect(() => {
    api.getEvents().then(res => {
      setEvents(res);
      setIsLoading(false);

      console.log(res);
      
    });
  }, [])

  return (
    <div className="flex min-h-svh flex-col w-full">
      <main className=" container mx-auto px-4 py-8 space-y-8 w-full ">
        <div className="flex flex-row w-full justify-between">
            <h2 className="text-xl font-bold mb-2">Wydarzenia</h2>
            <Button asChild>
            <Link to="/dodajWydarzenie">Dodaj wydarzenie</Link>
          </Button>
        </div>

      <div className="grid gap-6">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="mt-4 w-full h-40" />
          ))
          : events.map(event => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                Organizator: {event.id}<br />
                {event.description}
              </CardContent>
              <CardFooter className="flex justify-end">
                <DialogF
                  req={() => event}
                />
              </CardFooter>
            </Card>
          ))}
      </div>
        
      </main>
       <div className='ml-20'>
            
        </div>
       
    </div>
  )
}

export default Events
