import { Button } from "@/components/ui/button"
import { DefaultApi, Configuration } from "../../generated";
import { NavigationMenuDemo } from "../els/navbar";

function Events() {
  const config = new Configuration();
  const api = new DefaultApi(config);
  (async () => {
    const res = await api.getUsers();
    console.log(res);
  })()
  return (
    <div className="flex min-h-svh flex-col">
      <NavigationMenuDemo />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <p>{config.basePath}</p>
        <Button variant="outline">Click me</Button>
      </main>
    </div>
  )
}

export default Events
