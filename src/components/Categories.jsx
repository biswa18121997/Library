import useFectch from '../utils/useFectch'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Link } from 'react-router-dom'
function Categories(){
    let [display,setDisplay]=useState([]);
   


    const caturl="https://www.freetestapi.com/api/v1/books"
    let item=useParams();
    // let {data,error,loading}=useFectch(caturl);
   
     
    
    const {data:catdata,error:caterror,loading:catloading}= useFectch(caturl);
    // console.log(data);
    // console.log(catdata)
    
    
    let category=catdata.map((items)=>items.genre)
    category=[...new Set(category.flat())];
    // console.log("category" ,category);


    return(
        <div>

            <div className="m-4 bg-orange-500/30 p-3">
                    <h1 className="text-3xl font-bold p-2  text-center w-full underline">Choose Books by Categories / Genre::</h1>
                    <hr/>
                    {category.map((item)=>(
                        <Link to={`/allbooks/cat/${item}`} key={item}>
                                 <button key={item.id} className='active:bg-red-300 p-2 m-2 border rounded-2xl hover:bg-amber-200 font-bold font-serif'> {item}</button>
                        </Link>

                       
                    ))}
            </div>

            <div>
                


            </div>
        </div>
        
        
    )
}
export default Categories