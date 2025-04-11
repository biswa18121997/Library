import React from 'react'
import useFectch from '../utils/useFectch'
import { useParams } from 'react-router-dom';

export default function BookDetails() {
    let params=useParams();
   
    let {data,error,loading}=useFectch("https://www.freetestapi.com/api/v1/books");
    let details=data.filter(item=>item.id==params.id);


  return (<>
  {details.map((item)=>
  
  <div key={item.id} className='border-2 flex  justify-around  m-4 bg-neutral-500 items-center   h-screen'>
  
        <img src={item.cover_image} className='rounded-4xl border-2 h-1/2 w-1/3' ></img>
        
        <div className='text-white font-semibold flex flex-col h-1/2  items-start font-serif border-l-2'>
        <h2 className="m-2">Book ID : {item.id}</h2>
        <h1 className='text-4xl underline underline-offset-8 m-4 text-wrap'>{item.title}</h1>
        <h1 className='text-2xl m-2'>{item.description}</h1>
        <h1 className='text-2xl m-2'>Name of the Author: {item.author}</h1>
        <h2 className="m-2">Year of Publication : {item.publication_year}</h2>
        <h1 className='text-xl m-2'>Genre: {item.genre}</h1>
        </div>
        
  </div>
  
    )}
    
  </>)
}
