import {useRouteError} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Error(){
    const err=useRouteError();
    console.log(err);


    return(
        <div className="h-screen w-screen flex flex-col  p-4 m-1 bg-red-400  justify-center items-center">
                <Link to={`/allbooks`}>
                    <button className="border bg-green-300 p-2 rounded-4xl text-xl mb-8">Back to Browse Books</button>
       
                </Link>
                   
          
           
            <div className="flex justify-center items-center">   
            <span className='text-6xl'>
                <i className="fa-solid fa-triangle-exclamation"></i>
            </span>
            <section className='border p-4 m-4 border-white rounded-4xl'>
                <h1 className='text-3xl'>Something Went Wrong..</h1>

                <h2 className='text-2xl'>Status:{err.status}</h2>
                <h2 className=''> {err.data}</h2>
            </section>

            </div>
        </div>
    )
}
export default Error