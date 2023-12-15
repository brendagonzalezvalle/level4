import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


function App() {


  return (
    <div>
      
    
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>

      </Routes>
      <Footer/>
      
     
      
    </div>
     
  )
}

export default App
