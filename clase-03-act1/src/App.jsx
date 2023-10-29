import React,{ useState } from 'react'
import './App.css'

function App() {

  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]
  const [rey,setRey] = useState(0);
  
  const cambiarRey = ()=>{
    setRey((rey + 1) % reyesGodos.length)
  }

  const reyActual = reyesGodos[rey]
  return (
    <>
      <button onClick={cambiarRey}>Ver Siguiente</button>
      <div>
        <p>La afición principal de
          <span className="nombreRey"> {reyActual.nombre} </span>
          es 
          <span className='aficionRey'> {reyActual.aficion} </span>
        </p>
      </div>
    </>
  )
}

export default App