import React from 'react'
import './Actividad2.css'


function Actividad2({reyes}) {

    const reyFilter = reyes.filter((e)=>{
        return (!e.nombre.includes('g'))
    })


    
    const reyFiltered = reyFilter.map((e,index)=>
    <div className="rey__tag" key={index}>
        <p className='rey__nombre'>{e.nombre}</p>
        <button onClick={borrarTag}>Borrar</button>
    </div>
    )
    
    function borrarTag(e){
        e.target.parentNode.remove()
    }
    

  return (
    <>
        <section className='section'>
            {reyFiltered}
        </section>
    </>
  )
}

export default Actividad2