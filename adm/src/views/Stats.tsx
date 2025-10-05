import { useEffect, useState } from "react";
import { ArrowUpDown, ArrowDownUp, ArrowUpAZ, ArrowDownAZ, ArrowUp01, ArrowDown01, Info, LucideDatabase, Ban } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Configuration, DefaultApi, type GetUsers200ResponseInner } from "../../generated";
import { Button } from "@/components/ui/button";
import DialogF from "@/els/dialog";

function Stats() {
  const [users, setUsers] = useState<GetUsers200ResponseInner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"name" | "hours">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const config = new Configuration();
  const api = new DefaultApi(config);

  useEffect(() => {
    api.getUsers().then(res => {
      setUsers(res);
      setIsLoading(false);
    });
  }, []);


  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === "name") {
      const cmp = (a.displayName || "").localeCompare(b.displayName || "");
      return sortDir === "asc" ? cmp : -cmp;
    } else {
      const cmp = (a.hours ?? 0) - (b.hours ?? 0);
      return sortDir === "asc" ? cmp : -cmp;
    }
  });

  const handleSort = (column: "name" | "hours") => {
    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 space-y-8 flex-1">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-2">Wydarzenia</h2>
        <a href="https://api.${baseDomain}/e/volunteers.csv"
          className="flex items-center gap-1">
          <Button variant="outline">
            <LucideDatabase />Eksport danych
          </Button>
        </a>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer select-none"
              onClick={() => handleSort("name")}
            >
              Nazwa użytkownika
              {sortBy === "name" &&
                (sortDir === "asc" ? (
                  <ArrowUpAZ className="ml-1 w-4 h-4 inline" />
                ) : (
                  <ArrowDownAZ className="ml-1 w-4 h-4 inline" />
                )) || <ArrowDownUp className="ml-1 w-4 h-4 inline" />}
            </TableHead>
            <TableHead
              className="cursor-pointer select-none"
              onClick={() => handleSort("hours")}
            >
              Godziny wolontariatu
              {sortBy === "hours" &&
                (sortDir === "asc" ? (
                  <ArrowUp01 className="ml-1 w-4 h-4 inline" />
                ) : (
                  <ArrowDown01 className="ml-1 w-4 h-4 inline" />
                )) || <ArrowUpDown className="ml-1 w-4 h-4 inline" />}
            </TableHead>
            <TableHead>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            [...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-8 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-full" />
                </TableCell>
                <TableCell className="justify-end flex gap-2">
                  <Button variant="outline" disabled>
                    <Info />Szczegóły
                  </Button>
                  <Button disabled className="bg-red-700"><Ban />Zbanuj</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            sortedUsers.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.displayName}</TableCell>
                <TableCell>{user.hours}</TableCell>
                <TableCell className="justify-end flex gap-2">
                  <DialogF
                    req={() => api.getUserUserid({ userid: user.id! })}
                  />
                  <Button className="bg-red-700"><Ban />Zbanuj</Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </main >
  );
}

export default Stats
