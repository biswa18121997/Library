import {useParams} from 'react-router-dom'
import React from 'react'

export default function BookPage({items}) {
    
      
      return (
            <div key={items.id} className='w-full flex justify-center items-center flex-col border hover:shadow-xl shadow-black rounded-3xl hover:scale-95 duration-300 hover:bg-neutral-300'>
                    <img src={items.cover_image} alt="" className='w-[200px] h-[200px] ' />
                    <h2 className="font-semibold font-serif m-2 p-2 border-t-2 rounded-4xl text-red-600 underline underline-offset-8">Title:  {items.title}</h2>
                    <h3 className="font-semibold font-serif  rounded-4xl text-neutral-600 ">Author:{items.author}</h3>
                    
                   
                    <button className='border-2 font-semibold font-mono text-white rounded p-1 bg-blue-500 m-2 hover:bg-green-800 hover:duration-500'>View Details</button>
            </div>
    
        
    
  )
}
