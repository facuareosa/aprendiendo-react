import {React , useContext}from 'react'
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
        <Routes>
          <Route path="/:rey" element={<Rey />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </BrowserRouter>
      </Datos>
    </>
  )
}

export default App
