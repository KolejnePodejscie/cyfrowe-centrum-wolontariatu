import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultApi, Configuration, type Event } from "../../generated";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/ui/skeleton";



function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const config = new Configuration();
  const api = new DefaultApi(config);

  
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
        <div className="flex flex-row w-full items-center justify-center">
            <h2 className="text-xl font-bold mb-2 ">Moje wydarzenia</h2>
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
                  {event.description}
                </CardContent>
                <CardFooter className="flex justify-end">
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
