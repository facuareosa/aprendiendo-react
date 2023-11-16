import React, { useContext , useState } from 'react'
import { stateContext } from '../Contexto/Context'
import spain from '../assets/banderas/spain.jpg'
import francia from '../assets/banderas/francia.png'
import uk from '../assets/banderas/uk.png'
import {valores} from '../Contexto/Context'

function Banderas() {

  const {info , setInfo} = useContext(stateContext)
  
  const cambiarIdioma = (leng) =>{
    setInfo(valores[leng])
  }

  return (
    <div className='banderas'>
        <img src={spain}  onClick={()=>cambiarIdioma("es")} alt="" className="banderas__img" />
        <img src={francia} onClick={()=>cambiarIdioma("fr")} alt="" className="banderas__img" />
        <img src={uk} onClick={()=>cambiarIdioma("en")} alt="" className="banderas__img" />
    </div>
  )
}

export default Banderas