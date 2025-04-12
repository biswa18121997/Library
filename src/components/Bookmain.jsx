import useFectch from '../utils/useFectch';
import React from 'react'
import {Link} from 'react-router-dom'
import BookPage from './BookPage'
import {useState,useEffect} from 'react'
import Categories from './Categories'
import {useSelector} from 'react-redux'

export default function Bookmain() {
    

    let [display,setDisplay]=useState([]);
    let [fillter,setFillter]=useState("All");
    let [search,setSearch]=useState("");
    let reduxBooks=useSelector((state)=>state.library.Books);
    let url="https://www.freetestapi.com/api/v1/books"
    let {data,error,loading}=useFectch(url);
   
    let finaldata=[...reduxBooks,...data];
    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    // if (error) {
    //     return <p>Error: {error}</p>;
    // }
    
    
    
    
    // if(fillter=="All")
    //     display=data;
    
   
 

    // useEffect(()=>{
        
    //         setDisplay(data);
        
    // },[])
    
   
    
    
    // useEffect(() => {
    //     console.log("in use effect....");
    //     console.log(data);
    //     if (data && data.length > 0 ) {
    //       let filteredBooks = data;
    
    //       
    //       if (fillter !== "All") {
    //         filteredBooks = data.filter((item) => item.genre.includes(fillter));
    //       }
    
    //       
    //       if (search.length > 0) {
    //         filteredBooks = data.filter(
    //           (item) =>
    //             item.title.toLowerCase().includes(search.toLowerCase()) ||
    //             item.author.toLowerCase().includes(search.toLowerCase())
    //         );
    //       }
    
    //       setDisplay(filteredBooks); 
    //     }
    //   },[]);
    useEffect(()=>{

       
        filtering(fillter);
    },[fillter,data]);
    
    
    function filtering(fillter){
        let F;
        if(fillter=="All"){
            setDisplay(finaldata);
            return;
        }
        else
            F=finaldata.filter((items)=>items.genre.includes(fillter));
            
            
            setDisplay(F);
            
        
    }

    function searcher(search){
        
        let S=finaldata.filter((items)=>items.title.toLowerCase().includes(search.toLowerCase()) || items.author.toLowerCase().includes(search.toLowerCase()));
        if(S.length==0){
            
            return alert("No Match FOund");
            
        
        }
        
        setDisplay(S);
        
        setSearch("");
        
    }




    // if(fillter="All")
    //     setDisplay(data);


    //   function searcher(inp){
    //     let SI;
    //     if(search.length>0){
    //         SI=data.filter((items)=>items.genre.toLowerCase().includes(search.toLowerCase()))
    //     }
    //     if(!SI){
    //         return <h1>No Matches Found</h1>
    //     }
    //     setDisplay(SI);
    //     setSearch("");
    //   }

   

   
    
    
    let filerStack=finaldata.map(item=>item.genre);
    filerStack=filerStack.flat();
    let filerStackUnique=filerStack.reduce((acc,ini)=>{
                                                if(!acc.includes(ini))
                                                    acc.push(ini)
                                            
                                            return acc},[]);
    
    
    
    
    




  return (<div>

                <div className="flex justify-center items-center m-2">
                    <input onChange={(e)=>{setSearch(e.target.value)}} value={search} type="text" placeholder="Search Books Here->enter title or author" className="border-2 border-black p-2 rounded-2xl w-1/3"/>
                    <button onClick={()=>searcher(search)}  className="border p-2 bg-green-300 rounded-2xl m-1">Search</button>
                    <label  className="ml-18">Filter Books-:</label>
                    <select id="filter" name="Filter" onChange={(e)=>{setFillter(e.target.value)}}  className="border-2">
                            <option name="All" value="All" >All</option>
                            {filerStackUnique.map((item)=><option key={item} name={item} value={item}>{item}</option>)}
                    </select>

                </div>
                <div>
                    
                    <Categories />

            </div>
                <hr/>


            <h1 className="text-2xl font-bold p-2 m-3 border">Current Filter: {fillter }  </h1>
                <div className='w-full grid grid-cols-3 grid-rows-3 gap-3 p-1 mt-3 bg-yellow-200'>
                        {display.map((items)=>(   
                        <Link to={`/allbooks/${items.id}`}  key={items.id}>
                                <BookPage items={items} />
                        </Link>))}         
                </div>
        </div>);                   
   
}
