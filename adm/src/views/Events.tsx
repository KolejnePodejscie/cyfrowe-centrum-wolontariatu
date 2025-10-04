import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultApi, Configuration, type Event } from "../../generated";
import { NavigationMenuDemo } from "../els/navbar";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button"
import { Link } from "react-router";
import { Info } from "lucide-react";

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const config = new Configuration();
  const api = new DefaultApi(config);


  useEffect(() => {
    api.getEvents().then(res => {
      setEvents(res);
      setIsLoading(false);
    });
  }, [])

  return (
    <div className="flex min-h-svh flex-col">
      <NavigationMenuDemo />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <h2 className="text-xl font-bold mb-2">Wydarzenia</h2>
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
                  <Button variant="outline" className="flex items-center gap-1">
                    <Info />Szczegóły
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>
    </div>
  )
}

export default Events
