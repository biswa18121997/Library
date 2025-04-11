import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import App from './App.jsx'
import Bookmain from './components/Bookmain.jsx'
import Addbook from './components/Addbook.jsx'
import BookDetails from './components/BookDetails.jsx'
import Error from './components/Error.jsx'
// import Categories from './components/Categories.jsx'
import Filteredcat from './components/Filteredcat.jsx'


let routes=createBrowserRouter([
  {
    element:<App/>,
    path:"/",
    errorElement:<Error />,
    children:[
        {
          element:<Bookmain/>,
          path:"/allbooks"
        
        },
        {
          element:<Home/>,
          path:"/",
          
          
        },
        {
          element:<BookDetails/>,
          path:"/allbooks/:id",
          
        },
        {
          element: <Filteredcat />,
          path: "/allbooks/cat/:category"
        },
        {
          element : <Addbook />,
          path : "/addbooks"
        }
        
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
