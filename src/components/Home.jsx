import React from 'react'
import useFectch from '../utils/useFectch';
import { Link } from 'react-router-dom';
import Categories from './Categories'

   
export default function Home() {

    const url="https://www.freetestapi.com/api/v1/books?limit=5"
    const {data,error,loading}=useFectch(url);
    // const caturl="https://www.freetestapi.com/api/v1/books"
    // const {data:catdata,error:caterror,loading:catloading}= useFectch(caturl);
    // // console.log(data);
    // // console.log(catdata)

    // let category=catdata.map((items)=>items.genre)
    // category=[...new Set(category.flat())];
    // console.log("category" ,category);
   
  return (
    <div className='h-full w-fit  m-1'>
        <div className='text-center text-4xl m-4 border-t-4 rounded-b-4xl  bg-gray-400  font-serif'>
        <h1 className='p-4'>Welcome to Bookie's Library</h1>
        <h1 className="p-3">Eat. Sleep. Read...! Repeat</h1>
        </div>
        
            {/* <div>
                    <h1>Choose Books by Categories / Genre::</h1>
                    {category.map((item)=>(
                        <Link to={`/allbooks/cat/${item}`}>
                                 <button key={item.id} className='p-2 m-2 border rounded-2xl'> {item}</button>
                        </Link>
    
                       
                    ))}
            </div> */}
            <Categories />
            <h1 className="text-3xl font-bold p-2  text-center w-full underline">Our Trending Books and Best Sellers :</h1>
        <div className='grid grid-cols-2 gap-4 w-fit m-4'> 
                    
                {data.map((items,index)=>(
                            <div key={index} className='border-2 rounded-4xl h-fit flex m-4 w-full p-2'>
                                    <img src={items.cover_image} alt="" className='rounded-3xl w-[200px] h-[200px] ' />
                                    <div className="border m-2 bg-yellow-100 rounded-4xl">
                                        <h2 className="m-2 font-bold font-serif text-blue-700">Title :-  {items.title}</h2>
                                        <h3 className="m-2 font-bold font-serif text-gray-700">Author:{items.author}</h3>
                                        <h3 className="m-2 font-bold font-serif text-red-700">Publishing Year:{items.publication_year}</h3>
                                        <p className='text-wrap m-2 font-bold font-serif text-neutral-700 '>Description:{items.description.slice(0,30)}...</p>
                                        <Link to={`/allbooks/${items.id}`}>
                                        <button className='rounded-2xl border-2 text-white font-semibold p-2 m-4 bg-red-400 hover:bg-amber-950'> View Details</button>
                                        </Link>
                                    </div>                     
                            </div> 
                    ))}
        </div>
    </div>
  )
}
