import "./App.css"
// import BookCard from "./components/BookCard"
import Navbar from "./components/Navbar"
// import Home from './components/Home'
// import BookPage from "./components/BookPage"
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar.jsx'
function App() {
 

  return (
    <>
      
      <Navbar/>
      {/* <Searchbar /> */}
      
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
