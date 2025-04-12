
import {useSelector,useDispatch } from 'react-redux'
import BookPage from './BookPage';
import { useParams } from 'react-router-dom';
import {Link } from 'react-router-dom'
import {removeBook,clear,addBook} from '../utils/LibrarySlice'
import {useNavigate} from 'react-router-dom'

function AddedBooks(){
    let navigate=useNavigate();
    const Book=useSelector((state)=>state.library.Books)
    let params=useParams();
    let dispatch=useDispatch();
    const del=(id)=>{
        dispatch(removeBook(id));
        

    };
    const clearall=()=>{
        dispatch(clear());
    }

    return(<div>


        <h1 className="text-2xl font-bold font-serif underline underline-offset-8 text-center m-3">Books in Library:</h1>
        
        <button onClick={()=>clearall()} className=" m-5 visible  p-2  border text-white  bg-red-600  rounded-2xl ">Clear all Items</button>
        <hr/>
        <ul className="grid grid-cols-3 grid-rows-3 gap-3 m-2">
        {Book.map((book, index) => (
            
                   <li className="group" key={book.id}>
                    <Link to={`/allbooks/${book.id}`} >
                    <BookPage items={book}  />
                    </Link>
                    <button key={book.title} onClick={()=>del(book.id)} className="group-hover:visible invisible p-2  border text-white  group-hover:bg-red-600 relative rounded-2xl left-1/2">Delete this Item</button>
                    
                    </li>
                     
                   
                    
                ))}
        </ul>
    </div>)
}
export default AddedBooks;