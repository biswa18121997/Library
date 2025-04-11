

function Addbook(){



    return(<div className="flex justify-around font-serif m-2">
        <img className="w-1/3" src="https://www.frontlist.in/storage/uploads/2021/06/GettyImages-577674005.jpg"></img>
    <form className="flex flex-col w-full h-screen justify-center ml-6 bg-amber-200 p-4 border-4">    
        <label for="title" className="font-bold" >Book Title:</label><br/>
             <input type="text" id="title" name="title" placeholder="Enter Title" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /> <br/>
        <label className="font-bold" for="description">Book Description: </label><br/>
             <input type="text" placeholder="Description" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /><br/>
        <label className="font-bold" for="author"> Name of the Author:</label><br/>
            <input type="text" placeholder="Name of author" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /><br/>
        <label className="font-bold" for="year">Year of publishing:</label><br/>
             <input type="text" placeholder="Year of publishing" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl" /><br/>
         <label className="font-bold" for="genre">Genre / Category:</label><br/>
            <input type="text" placeholder="category or Genre" className="ml-5 border p-2 bg-neutral-300 w-1/2 rounded-2xl"/><br/>

        <button className="border rounded-4xl p-2 bg-amber-700 text-white w-1/4"> Add / Submit</button>
    </form>

    </div>)
}
export default Addbook