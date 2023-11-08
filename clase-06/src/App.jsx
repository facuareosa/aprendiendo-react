import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [joke,setJoke]=useState([]);
  
  const nextJoke =()=>{
    setJoke([])
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";
    const call = fetch(url);
    call
    .then(datos=>datos.json())
    .then(object=>{
      object.jokes.map((chistes)=>{
        setJoke((e)=>
        [...e,<div key={chistes.id}>
          <p>{chistes.setup}</p>
          <p>{chistes.delivery}</p>
        </div>]
        )
      })
    })
  }
  
  
useEffect( () => {
  const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10";
  const call = fetch(url);
  call
  .then(datos=>datos.json())
  .then(object=>{
    object.jokes.map((chistes)=>{
      setJoke((e)=>
      [...e,<div key={chistes.id}>
        <p>{chistes.setup}</p>
        <p>{chistes.delivery}</p>
      </div>]
      )
    })
  })
},[]);

  return (
    <>
      {joke}
      <button onClick={nextJoke}>Siguiente</button>
    </>
  );
}

export default App
