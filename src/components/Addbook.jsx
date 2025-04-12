import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {addBook} from '../utils/LibrarySlice'
import {useNavigate} from 'react-router-dom'

function Addbook(){
    let [id,setId]=useState("");
    let [title,setTitle]=useState('');
    let [author,setAuthor]=useState('');
    let [des,setDes]=useState('');
    let [year,setYear]=useState('');
    let [genre,setGenre]=useState('');
    let navigate=useNavigate();

    const dispatch=useDispatch();
    function handleSubmit(e){
        e.preventDefault();
        const newBook={
            id: id,
            title:title,
            description :des,
            author: author,
            publication_year: year,
            genre:[genre],
            cover_image:"https://img.freepik.com/free-vector/realistic-book-mockup-template-with-various-side-views-open-closed-books-with-empty-pages-vector-illustration_1284-79208.jpg?t=st=1744386083~exp=1744389683~hmac=ed7b13e4dad1fe50935195582ea7b7ed075387a0e0e3ce30d40de9d1719c6a3d&w=996"
        };
        dispatch(addBook(newBook));
        alert("Book Added Sucessfully");
        setId('');
        setTitle('');
        setDes('');
        setAuthor('');
        setYear('');
        setGenre('');
        navigate('/allbooks');
    }





    return(<div className="flex justify-around font-serif m-2">
        <img className="w-1/3" src="https://www.frontlist.in/storage/uploads/2021/06/GettyImages-577674005.jpg"></img>
    <form onSubmit={handleSubmit} className="flex flex-col w-full h-screen justify-center ml-6 bg-amber-200 p-4 border-4">    
        <label htmlFor="bookid"  className="font-bold">Book ID:</label> <br/>
            <input required id="bookid" onChange={(e)=>setId(e.target.value)} placeholder="Enter Book ID" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl"></input><br/>
        <label htmlFor="title" className="font-bold" >Book Title:</label><br/>
             <input required id="title" onChange={(e)=>setTitle(e.target.value)} type="text" name="title" placeholder="Enter Title" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /> <br/>
        <label className="font-bold" htmlFor="description">Book Description: </label><br/>
             <input required id="description" onChange={(e)=>setDes(e.target.value)} type="text" placeholder="Description" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /><br/>
        <label className="font-bold" htmlFor="author"> Name of the Author:</label><br/>
            <input required id="author" onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="Name of author" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /><br/>
        <label className="font-bold"  htmlFor="year">Year of publishing:</label><br/>
             <input required id="year" onChange={(e)=>setYear(e.target.value)} type="text" placeholder="Year of publishing" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /><br/>
         <label className="font-bold" htmlFor="genre">Genre / Category:</label><br/>
            <input required id="genre" onChange={(e)=>setGenre(e.target.value)} type="text" placeholder="category or Genre" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl"/><br/>

        <button type="submit" className="border rounded-4xl p-2 bg-amber-700 text-white w-1/4"> Add / Submit</button>
    </form>

    </div>)
}
export default Addbook