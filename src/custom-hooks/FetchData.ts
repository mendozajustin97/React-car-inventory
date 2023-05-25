import React, { useState, useEffect} from 'react'
import { server_calls } from '../api';

export const  useGetData = () =>{
    const [carData, setData] = useState<[]>([]);

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

  // This is the actual call of the function handleDataFetch, 
    // where the data is actually acquired
    useEffect( () => {
      handleDataFetch();
  }, [])
      // We return the data that we've saved
      return {carData, getData:handleDataFetch}
}
