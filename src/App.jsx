import "./App.css"

import Navbar from "./components/Navbar"
import Home from './components/Home'
import BookPage from "./components/BookPage"
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer'

import {Provider} from 'react-redux'
import LibraryStore from './utils/LibraryStore.js'
function App() {
 

  return (
    <>
      <Provider store={LibraryStore}>
      <Navbar/>
     
      
      <Outlet/>
      <Footer/>
      </Provider>
    </>
  )
}

export default App
