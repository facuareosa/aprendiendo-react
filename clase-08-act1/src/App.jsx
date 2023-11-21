import React from 'react'
import {Datos,Context} from './components/Context'
import NavBar from './components/NavBar'
import Rey from './components/Rey'
import Home from './components/Home'
import './App.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Datos>
        <BrowserRouter>
        <NavBar/>
        <main>
        <Home />
        </main>


        <Routes>
          <Route path="/ataulfo" element={<Rey />} />
        </Routes>
        </BrowserRouter>
      </Datos>
    </>
  )
}

export default App
