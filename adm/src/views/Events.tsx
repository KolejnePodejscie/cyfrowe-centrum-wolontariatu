import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultApi, Configuration, type Event } from "../../generated";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button"
import { LucideDatabase } from "lucide-react";
import DialogF from "@/els/dialog";
import { baseDomain } from "@/config";

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const config = new Configuration({
    basePath: `https://api.${baseDomain}`,
  });
  const api = new DefaultApi(config);


  useEffect(() => {
    api.getEvents().then(res => {
      setEvents(res);
      setIsLoading(false);
    });
  }, [])

  return (
    <main className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-2">Wydarzenia</h2>
        <a href="https://api.${baseDomain}/e/events.csv"
          className="flex items-center gap-1">
          <Button variant="outline">
            <LucideDatabase />Eksport danych
          </Button>
        </a>
      </div >
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
                Organizator: {event.organisationName}<br />
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
    </main >
  )
}

export default Events
