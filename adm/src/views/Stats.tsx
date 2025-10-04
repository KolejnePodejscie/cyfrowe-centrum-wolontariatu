import { useEffect, useState } from "react";
import { DefaultApi, Configuration, type GetUsers200ResponseInner } from "../../generated";
import { NavigationMenuDemo } from "../els/navbar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

function Stats() {
  const [users, setUsers] = useState<GetUsers200ResponseInner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config = new Configuration();
    const api = new DefaultApi(config);
    api.getUsers().then(res => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="flex min-h-svh flex-col">
      <NavigationMenuDemo />
      <main className="container mx-auto px-4 py-8 space-y-8 flex-1">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nazwa użytkownika</TableHead>
              <TableHead>Godziny wolontariatu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-8 w-full" />
                  </ TableCell>
                  <TableCell>
                    <Skeleton className="h-8 w-full" />
                  </TableCell>
                </TableRow>
              ))) : (
              users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>{user.displayName}</TableCell>
                  <TableCell>{user.hours}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </main >
    </div>
  );
}

export default Stats


