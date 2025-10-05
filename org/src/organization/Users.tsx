import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown, ArrowUpDown, ArrowDownUp, ArrowUpAZ, ArrowDownAZ, ArrowUp01, ArrowDown01 } from "lucide-react";
// import { NavigationMenuDemo } from "../els/navbar";
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

function Stats() {
  const [users, setUsers] = useState<GetUsers200ResponseInner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<"name" | "hours">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const config = new Configuration();
    const api = new DefaultApi(config);
    api.getUsers().then(res => {
      setUsers(res);
    setUsers([{
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "displayName": "string",
      "hours": 0
    }, {
      "id": "2fa85f64-5717-4562-b3fc-2c963f66afa6",
      "displayName": "astring",
      "hours": 22
    }, {
      "id": "4fa85f64-5717-4562-b3fc-2c963f66afa6",
      "displayName": "xstring",
      "hours": 5
    }
    ])
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
    <div className="flex min-h-svh flex-col w-full">
      <main className="container mx-auto px-4 py-8 space-y-8 flex-1 w-full">
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
                </TableRow>
              ))
            ) : (
              sortedUsers.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="p-5 pl-">{user.displayName}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

export default Stats
