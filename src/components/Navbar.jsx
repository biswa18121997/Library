import React from 'react'
import { Link } from 'react-router-dom'



export default function Navbar() {

    const navLinks=[
        {
            name:"Home",
            hlink:"/"
        },
        {
            name:"Browse Books",
            hlink:"/allbooks"
        },
        {
            name:"Add a Book",
            hlink:"/addbooks",
        },
        // {
        //     name: "MyCart",
        //     hlink: "/mycart"
        // }
        
    ]
  return (
    <nav className='flex justify-around items-center  border-b-2 bg-orange-200'>
        <Link to={"/"}>
        <div className='flex flex-col  justify-center bg-white items-center border-t-2 shadow-xl shadow-black p-2 m-2 rounded-full'>
            <span className='text-5xl text-red-600'><span className="text-blue-600 text-2xl font-semibold">Bookie's <br/> </span><i className="fa-solid fa-book"></i>Library</span>
           
        </div>
        
        </Link>
        {/* <h1 className="font-bold text-4xl p-3 border-b-8 bg-green-400/20 rounded-t-4xl">Bookie's <br/> Library</h1>
         */}
        <ul className='flex w-1/2 justify-end'>
            {navLinks.map((item,index)=>{return(  
                <Link to={item.hlink} key={index}>
                <li key={index} className='m-2 p-4 font-bold text-2xl hover:underline hover:bg-amber-800 hover:text-white hover:rounded-4xl hover:duration-500'>{item.name}</li>
                </Link>)
})}
        </ul>
        <Link to={"/addedbooks"}>
        <button className="shadow-2xl shadow-amber-900 bg-red-400 text-white border font-bold  p-2 rounded-full">Your Added Books <i className="fa-solid fa-cart-arrow-down"></i></button>

        </Link>
    </nav>
  )
}
