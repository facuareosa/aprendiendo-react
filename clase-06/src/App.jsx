import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [joke,setJoke]=useState("");
  
  const nextJoke =()=>{
    const url = "https://api.chucknorris.io/jokes/random";
    const call = fetch(url);
    call
    .then(datos=>datos.json())
    .then(object=>{setJoke(object.value)})
  }
  
  
useEffect( () => {
  nextJoke();
},[]);

  return (
    <>
      {joke}
      <button onClick={nextJoke}>Siguiente</button>
    </>
  );
}

export default App
