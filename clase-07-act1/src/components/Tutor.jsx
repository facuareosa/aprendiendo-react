import React,{useContext, useRef} from 'react'
import { stateContext } from '../Contexto/Context'
import aimee from "../assets/imgProfile/aimee.png"
import grace from "../assets/imgProfile/grace.png"
import marta from "../assets/imgProfile/marta.png"

function Tutor() {
    const refTutor = useRef();
    

    const {info} = useContext(stateContext);
    const imgSrc = ()=>{
        if (info.leng == "es"){
            return aimee}
        if (info.leng == "en"){
            return grace}
        return marta
    };
  return (
    <div className='tutor__container' ref={refTutor}>
        <h2 className="tutor__title">{info.boton1}</h2>
        <img className='tutor__img' src={imgSrc()} alt=""/>
        <p className="tutor__name">{info.nombre}</p>
    </div>
  )
}

export default Tutor