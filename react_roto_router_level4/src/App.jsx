import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Center from './Center'
import Footer from './Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Center/>}> </Route>
        </Routes>
      </Router>
      <h1>App</h1>
      <Navbar />
      <Center/>
      <Footer/>
    </div>
     
  )
}

export default App
