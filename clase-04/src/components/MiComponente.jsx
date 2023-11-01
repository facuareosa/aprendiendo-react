import React from 'react'
import './MiComponente.css'


function MiComponente({rey, setTotal}) {

    const colorFondo = {
        backgroundColor: rey.color,
        }
    const comprar = (element)=>{
        setTotal((e)=> e + rey.precio);
        element.target.parentNode.style.display= "none"
    }
    return (
        <>
            <div className="card" style={colorFondo}>
                <h2 className="rey__nombre">{rey.nombre}</h2>
                <img src={rey.img}alt="" className="rey__img" />
                <p className="rey__text">Precio:<span className="rey__precio">€ {rey.precio}</span></p>
                <button onClick={comprar} className="rey__btn">Comprar</button>
            </div>
        </>
    )
}

export default MiComponente