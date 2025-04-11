import useFectch from "../utils/useFectch"
import {useState} from 'react'



function Searchbar(){
const [inp,setInp]=useState("");

 const {data,error,loading}=useFectch("https://www.freetestapi.com/api/v1/books");
 function search(){
    let searchRes=data.filter((item)=>item.title.toLowerCase().includes(inp.toLowerCase()) || item.author.toLowerCase().includes(inp.toLowerCase()))
    }
 

    return (<div className="w-screen h-[150px]">

        <input type="text" placeholder="enter book title  or author name " onChange={(e)=>setInp(e.target.value)}> </input>
        <button className="w-screen h-[150px] border-2 p-2 bg-blue-600 text-white" onClick={search} > Search</button>
    </div>)

}
export default Searchbar