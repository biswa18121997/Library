import React, { useEffect, useState } from 'react'

export default function useFectch(url) {

    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const datafetcher=async ()=>{


            try{

                let fetchres= await fetch(url);
                let fetdata=await fetchres.json();
                setData(fetdata);
                
            }
            catch(e){
                setError(e);
               


            }
            finally{
                setLoading(false);
                
            }
        }

        datafetcher();
    },[url])



  return {data,error,loading};
}
