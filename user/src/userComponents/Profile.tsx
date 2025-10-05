import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { DefaultApi } from '../../generated/apis';
import { Configuration, type User } from '../../generated';

function Profile() {

    const config = new Configuration();
    const api = new DefaultApi(config);
    const[data, getData]=useState<User>({})
    
// fetch markers when component mounts OR when markerData changes
    useEffect(() => {
      const apiCalls = async () => {
        try {
          const response = await api.getUserUserid({userid:""});
          console.log(response);
          console.log("Fetched events:", response);
        } catch (err) {
          console.error("Error fetching events", err);
        }
      };
      apiCalls();
    }, []); // dependency means it will refetch if markerData changes

  return (
    <div className='flex flex-col w-screen h-screen items-center mt-20 align-center '>
        <Card className="w-1/3 h-1/2">
      <CardHeader>
        <CardTitle className='text-center'>Moje dane</CardTitle>
        <CardDescription className='m-10'>
            <>Nazwa: {data.displayName}</>
        </CardDescription>
        <CardDescription className='m-10'>
            <>Opis:{data.description}</>
        </CardDescription>
        <CardDescription className='m-10'>
            <>Wcześniejsze wydarzenia:{data.pastEvents}</>
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
    </div>
  )
}

export default Profile