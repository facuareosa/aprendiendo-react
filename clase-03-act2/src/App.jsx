import { useState } from 'react'
import React from 'react'
import './App.css'

const cambios = [
  {
    moneda: "Euro",
    cambio: 1,
  }, {
    moneda: "Peso argentino",
    cambio: 1000.6,
  }, {
    moneda: "Peso colombiano",
    cambio: 4543.5,
  }, {
    moneda: "Peso mexicano",
    cambio: 23.2,
  }, {
    moneda: "Dólar",
    cambio: 1.14
  }
]
function App() {

  //  ----------------- OPCION 1----------------

const [valorEuro, setValorEuro] = useState(0)


  const modificarEuro = (e) => {
    setValorEuro(Number(e.target.value))
  }



  return (
    <>
      <section className="container">
        <div className="divisa__container">
          <label htmlFor="euro">{cambios[0].moneda}</label>
          <input type="number" id="euro" onChange={modificarEuro} />
        </div>
        <div className="divisa__container">
          <label htmlFor="pesoArgentino">{cambios[1].moneda}</label>
          <input type="number" id="PesoArgentino" readOnly value={valorEuro * Number(cambios[1].cambio)} />
        </div>
        <div className="divisa__container">
          <label htmlFor="pesoColombiano">{cambios[2].moneda}</label>
          <input type="number" id="pesoColombiano" readOnly value={valorEuro * Number(cambios[2].cambio)} />
        </div>
        <div className="divisa__container">
          <label htmlFor="pesoMexicano">{cambios[3].moneda}</label>
          <input type="number" id="pesoMexicano" readOnly value={valorEuro * Number(cambios[3].cambio)} />
        </div>
        <div className="divisa__container">
          <label htmlFor="dolar">{cambios[4].moneda}</label>
          <input type="number" id="dolar" readOnly value={valorEuro * Number(cambios[4].cambio)} />
        </div>
      </section>
    </>
  )
  // -----------OPCION SOLUCION CURSO---------------
  //const [valorEuro,setValorEuro]=useState(0);
  //const [valor1,setValor1]=useState(0);
  //const [valor2,setValor2]=useState(0);
  //const [valor3,setValor3]=useState(0);
  //const [valor4,setValor4]=useState(0);
  //
  //const modificarEuro =(e)=>{
  //  setValorEuro(e.target.value);
  //  setValor1(e.target.value*cambios[1].cambio);
  //  setValor2(e.target.value*cambios[2].cambio);
  //  setValor3(e.target.value*cambios[3].cambio);
  //  setValor4(e.target.value*cambios[4].cambio);
  //}
  //
  //
  //
  //return (
  //  <>
  //  <section className="container">
  //    <div className="divisa__container">
  //      <label htmlFor="euro">{cambios[0].moneda}</label>
  //      <input type="number" id="euro" onChange={modificarEuro}/>
  //    </div>
  //    <div className="divisa__container">
  //      <label htmlFor="pesoArgentino">{cambios[1].moneda}</label>
  //      <input type="number" id="PesoArgentino" readOnly value={valor1}/>
  //    </div>
  //    <div className="divisa__container">
  //      <label htmlFor="pesoColombiano">{cambios[2].moneda}</label>
  //      <input type="number" id="pesoColombiano" readOnly value={valor2} />
  //    </div>
  //    <div className="divisa__container">
  //      <label htmlFor="pesoMexicano">{cambios[3].moneda}</label>
  //      <input type="number" id="pesoMexicano" readOnly value={valor3} />
  //    </div>
  //    <div className="divisa__container">
  //      <label htmlFor="dolar">{cambios[4].moneda}</label>
  //      <input type="number" id="dolar" readOnly value={valor4} />
  //    </div>
  //  </section>
  //  </>
  //)
  //
}

export default App