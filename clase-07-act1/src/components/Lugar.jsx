import React,{useContext } from 'react'
import { stateContext } from '../Contexto/Context'


function Lugar() {

    const {info} = useContext(stateContext)

  return (
    <div className='lugar__container'>
        <h2 className="lugar__title">{info.boton2}</h2>
        <p className="lugar__text">{info.direccion}</p>
    </div>
  )
}

export default Lugar