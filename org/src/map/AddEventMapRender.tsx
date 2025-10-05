import React, { Suspense, lazy, useEffect, useState } from "react";
import {Configuration,DefaultApi, type Event} from '../../generated'

const config = new Configuration();
const api = new DefaultApi(config);



const LeafMap = lazy(() => import("./AddEventMap"));

 
  function LeafRender() {
    const [markerArr, setMarkerArr] = useState<Event[]>([]);

    // fetch markers when component mounts OR when markerData changes
    useEffect(() => {
      const apiCalls = async () => {
        try {
          const response = await api.getEvents();
          console.log(response);
          
          setMarkerArr(response);
          console.log("Fetched events:", response);
        } catch (err) {
          console.error("Error fetching events", err);
        }
      };

      apiCalls();
    }, []); // dependency means it will refetch if markerData changes
  
  return (
    <div>
      <Suspense fallback={<p className="justify-self-center">Ładowanie mapy</p>}>
        <LeafMap
          markerData={markerArr}
          position={{ lat: 50.06160531528376,lng: 19.938225888998353}}
          zoom={3}
        />
      </Suspense>
    </div>
  );
}

export default LeafRender;