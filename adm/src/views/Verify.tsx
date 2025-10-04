import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultApi, Configuration, type Organisation } from "../../generated";
import { NavigationMenuDemo } from "../els/navbar";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Check, Info, Trash, VenetianMask, X } from "lucide-react";

function Verify() {
  const [orgs, setOrgs] = useState<Organisation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const config = new Configuration();
  const api = new DefaultApi(config);

  useEffect(() => {
    api.getOrganisations().then(res => {
      setOrgs(res);
      setIsLoading(false);
    });
  }, []);

  // const unverifiedOrgs = orgs.filter(org => !org.verfied);
  const unverifiedOrgs = orgs.filter(org => org.verfied);
  const verifiedOrgs = orgs.filter(org => org.verfied);

  const popup = (id: string) => {
    console.log(id)
  }

  const handleAccept = (id: string) => {
    api.putOrganisationsOrgid({
      orgid: id, putOrganisationsOrgidRequest: { verified: true }
    }).then(() => {
      api.getOrganisations().then(res => {
        setOrgs(res);
      })
    })
  };

  const handleReject = (id: string) => {
    api.putOrganisationsOrgid({ orgid: id, putOrganisationsOrgidRequest: { verified: false } }).then(() => {
      // TODO: Implement reject logic
      setOrgs(orgs.filter(org => org.id !== id));
    })
  };

  return (
    <div className="flex min-h-svh flex-col">
      <NavigationMenuDemo />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <h2 className="text-xl font-bold mb-2">Organizacje do weryfikacji</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-1/2 mb-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))
            : unverifiedOrgs.map(org => (
              <Card key={org.id}>
                <CardHeader>
                  <CardTitle>{org.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    {org.description}
                  </div>
                  <div>
                    {org.contactInfo}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 justify-center">
                    <Button className="bg-green-700 flex-1" variant="default"
                      onClick={() => handleAccept(org.id!)}><Check />Zakceptuj</Button>
                    <Button className="bg-red-700 flex-1" variant="default"
                      onClick={() => handleReject(org.id!)}><X /> Odrzuć</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
        <h2 className="text-xl font-bold mb-2">Zaakceptowane organizacje</h2>
        <div className="grid gap-6">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="mt-4 w-full h-40" />
            ))
            : verifiedOrgs.map(org => (
              <Card key={org.id}>
                <CardHeader>
                  <CardTitle>{org.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  {org.description}
                </CardContent>
                <CardFooter className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => popup(org.id!)}
                    className="flex items-center gap-1">
                    <Info />Szczegóły
                  </Button>
                  <Button variant="default" onClick={() => handleReject(org.id!)}
                    className="bg-red-700 flex items-center gap-1"><VenetianMask />Ukryj</Button>
                  <Button variant="default" onClick={() => handleReject(org.id!)}
                    className="bg-red-700 flex items-center gap-1"><Trash />Usuń</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Verify
