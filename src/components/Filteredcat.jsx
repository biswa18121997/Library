import Categories from "./Categories";
import {useParams,Link} from 'react-router-dom'
import useFectch from '../utils/useFectch'
import BookPage from "./BookPage";


export default function Filteredcat(){

    let params=useParams();
    console.log(params)
    

    let {data,error,loading}=useFectch("https://www.freetestapi.com/api/v1/books");
    let filter=data.filter((items)=>items.genre.includes(params.category));
    console.log(filter);

    return(<div className="bg-neutral-800/20">

        <Categories />

        <h1 className="text-3xl font-bold text-center p-4 m-4 underline underline-offset-8 inline">Books Filtered by Category :</h1> <span className="no-underline text-red-600  text-3xl font-bold text-center p-4 m-4  inline">{params.category}</span>
        <hr/>
        <div className="grid grid-cols-3 grid-rows-3 gap-3 m-4 bg-amber-200 p-5">

        {filter.map((item)=>(
              <Link to={`/allbooks/${item.id}`}>
                    <BookPage items={item} />
            </Link>
        ))}

        </div>
        
        
        </div>)
}