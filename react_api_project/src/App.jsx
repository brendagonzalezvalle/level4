import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RandomDogs from './RandomDogs'
import FunFacts from './FunFacts'
import Home from './Home'
import Navbar from './Navbar'
import { ContextAPIProvider } from './ContextAPI'
import Footer from '../Footer'

function App() {


  return (
    <>
    <ContextAPIProvider>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/randomDogs' element={<RandomDogs/>}/>
        <Route path='/funFacts' element={<FunFacts/>}/>
      </Routes>
      <Footer/>

    </ContextAPIProvider>
    </>
  )
}

export default App
