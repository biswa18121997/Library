import { Link } from 'react-router-dom'

function Footer(){

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

    const Socials=[
        {
            Name:"Facebook",
            icon:"fa-brands fa-facebook",
            hlink:"www.facebook.com"

        },
        {
            Name:"Twitter /X",
            icon:"fa-brands fa-x-twitter",
            hlink:"www.x.com"

        },
        {
            Name:"Instagram",
            icon:"fa-brands fa-facebook",
            hlink:"www.instagram.com"

        },
        {
            Name:"Youtube",
            icon:"fa-brands fa-square-instagram" ,
            hlink:"www.youtube.com"

        }
    ]

    return(<footer className=" bg-gray-600 w-full  font-serif">
        <div className=" h-18 flex justify-center items-center  bg-gray-700 w-full hover:bg-neutral-500">
            <button className="border-2 rounded-2xl p-2 m-2">Back to Top <i className="fa-solid fa-arrow-up-from-bracket"></i></button>
        </div>
        <div className="flex justify-around m-8 p-8">
                
                <ul className='flex-col  '>
                {navLinks.map((item,index)=>{return(  
                <Link to={item.hlink} key={index}>
                <li key={index} className='m-2  font-bold  hover:underline hover:text-white  hover:duration-500'>{item.name}</li>
                </Link>)
})}
            </ul>
                

                <div>
                        <h1>About US:</h1>
                        <h2>About Bookie's Library</h2>
                        <h2>Carrers</h2>
                        <h2>Press Releases</h2>
                        
                </div>

                <div>
                        <h1>Customer Support</h1>
                        <h2>Return / Replace Service</h2>
                        <h2>Connect to Customer Support</h2>
                        <h2>Product safety and Recall Service</h2>
                
                        <h2>Become a Supplier</h2>
                        <h2>Become a Seller</h2>
                        <h2>Help</h2>
                </div>
                <div className="">
                        <h1 className="underline underline-offset-4 mb-2">Connect us on Socials:</h1>
                        {Socials.map((item,index)=>
                        <section className="flex justify-center items-center hover:bg-neutral-400 hover:text-blue-700 rounded-full h-fit w-fit p-2" key={index}><a className="flex flex-col justify-center items-center mb-2" href={Socials[index].hlink}>
                            <i className={Socials[index].icon}></i>
                            <p>{Socials[index].Name}</p></a>

                        </section>

                        )}
                            
                        

                        
                        
                        
                       
                </div>
                    

        </div>
            

        <div className="w-full h-15 flex justify-center items-center border-t-2 bg-gray-700">
            <p className=" text-sm font-bold">Bookie's Library <br /><img className="w-12 h-10 " src=" https://cdn-icons-png.flaticon.com/512/2331/2331970.png"></img></p>
            <p className="p-2 m-2 border rounded">Language:English</p>
            <p className="p-2 m-2 border rounded"> <img className="h-[30px] w-[40px] inline" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" alt="" /> INDIA</p>

        </div>
        <div className="flex flex-col justify-center items-center bg-gray-500 w-full h-20">
            <section className="flex justify-center items-center text-sm font-medium">
                <p className="m-3">Terms and Conditions</p>
                <p className="m-3">Conditions of Return /Refund</p>
                <p className="m-3">Privacy Notice</p>
            </section>
          <p className="text-sm font-bold ">&copy;  1996-2025, Bookie'sLibrary.com, Inc. or its affiliates</p>

        </div>




    </footer>)
}
export default Footer;