import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Recipes from './Recipes'
import Ownrecipes from './Ownrecipes'
import Home from './Home'
import Navbar from './Navbar'

function App() {


  return (
    <div>
      <h1>App</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/ownRecipes' element={<Ownrecipes/>}/>
      </Routes>
    </div>
  )
}

export default App
