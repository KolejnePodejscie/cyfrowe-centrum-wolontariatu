import { Button } from "@/components/ui/button"
import { DefaultApi, Configuration, type Organisation } from "../../generated";
import { NavigationMenuDemo } from "../els/navbar";

function Verify() {
  const [orgs, setOrgs] = useState<Organisation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const config = new Configuration();
    const api = new DefaultApi(config);
    const res = api.getOrganisations().then(res => {
      setOrgs(res);
      setIsLoading(false);
    });
  }, [])
  return (
    <div className="flex min-h-svh flex-col">
      <NavigationMenuDemo />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <Button variant="outline">Click me</Button>
      </main>
    </div>
  )
}

export default Verify
