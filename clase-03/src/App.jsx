import React,{useState} from 'react'

const App = () => {

  const [contador,setContador]=useState(0);

  const restar = ()=>{
    setContador(contador-1);
  }
  const restablecer = ()=>{
    setContador(0);
  }
  const aumentar = ()=>{
    setContador(contador+1);
  }
  return (
    <>
      <h1>El numero actual es {contador}</h1>
      <button onClick={restar}>Restar</button>
      <button onClick={restablecer}>volver a 0</button>
      <button onClick={aumentar}>Sumar</button>
    </>
  )
}

export default App