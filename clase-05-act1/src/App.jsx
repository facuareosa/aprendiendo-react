import React from 'react'
import ReyCard from'./Components/Actividad1'
import Actividad2 from './Components/Actividad2'
import Actividad3 from './Components/Actividad3'
import './App.css'

function App() {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
  return (
    <>
      <h2 className="actividad__title">Actividad 1</h2>
        <ReyCard reyes={reyes}/>
      <h2 className="actividad__title">Actividad 2</h2>
        <Actividad2 reyes={reyes}/>
      <h2 className="actividad__title">Actividad 3</h2>
        <Actividad3 reyes={reyes}/>

    </>
  )
};

export default App