import { useState } from 'react'
import './App.css'
import MiComponente from './components/MiComponente';

const reyes=[
  {
    nombre:"Atanagildo",
    color:"darkolivegreen",
    precio:178,
    img: "http://html6.es/img/rey_atanagildo.png"
  },{
    nombre:"Ervigio",
    color:"crimson",
    precio:169,
    img: "http://html6.es/img/rey_ervigio.png"
  },{
    nombre:"Ataúlfo",
    color:"peru",
    precio:81,
    img: "http://html6.es/img/rey_Ataulfo.png"
  },{
    nombre:"Leogivildo",
    color:"darkmagenta",
    precio:126,
    img: "http://html6.es/img/rey_leogivildo.png"
  },{
    nombre:"Recesvinto",
    color:"royalblue",
    precio:141,
    img: "http://html6.es/img/recesvinto.png"
  },{
    nombre:"Sisebuto",
    color:"teal",
    precio:69,
    img: "http://html6.es/img/rey_sisebuto.png"
  }
]

function App() {

  const [total,setTotal] = useState(0)

  return (
    <>
      <h2>El total a pagar es de € {total}</h2>
      <section>
        <MiComponente rey={reyes[0]} setTotal={setTotal}/>
        <MiComponente rey={reyes[1]} setTotal={setTotal}/>
        <MiComponente rey={reyes[2]} setTotal={setTotal}/>
        <MiComponente rey={reyes[3]} setTotal={setTotal}/>
        <MiComponente rey={reyes[4]} setTotal={setTotal}/>
        <MiComponente rey={reyes[5]} setTotal={setTotal}/>
      </section>
    </>
  )
}

export default App
