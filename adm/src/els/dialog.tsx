
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { renderDetails } from "@/lib/display";
import { Info } from "lucide-react";
import { useState } from "react";

function DialogF(
  props: {
    req: () => Promise<any> | any,
    className?: string
    classNameBtn?: string
  }
) {
  const [details, setDetails] = useState<Record<string, any> | null>(null);
  const handleDialogOpen = async () => {
    const res = props.req();
    if (res instanceof Promise) {
      res.then(data => setDetails(data));
    } else {
      setDetails(res);
    }
  }

  return (
    <Dialog
      onOpenChange={open => open && handleDialogOpen()}>
      <DialogTrigger asChild>
        <Button variant="outline"
          className={"flex items-center " + props.classNameBtn}>
          <Info />Szczegóły
        </Button>
      </DialogTrigger>
      <DialogContent className={props.className}>
        <DialogHeader>
          <DialogTitle>Sczegóły</DialogTitle>
          <DialogDescription>
            {details ? renderDetails(details) : "Ładowanie..."}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogF; 
