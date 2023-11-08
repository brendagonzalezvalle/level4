import { useState } from 'react'
import './App.css'
import Header from './Header'
import List from './List'
import { UglyContextProvider } from './UglyContext'

function App() {


  return (
    <>
      <UglyContextProvider>
      
        <Header/>
        <List/>
      </UglyContextProvider>
    </>
  )
    
}

export default App
