import React from 'react'

function Actividad4({reyes}) {

    const suma = (e)=>{
        ++e.target.innerHTML
    }

    const filtro = reyes.filter(e => e.vacasComidas >= 10 && e.reinado >= 10).map((e,index) =>
        <div key={index}>
            <h2>{e.nombre}</h2>
            <span 
                className="contador"
                onClick={suma}>
                0
            </span>
        </div>
    )
    


  return (
    <>
        <section className='section'>
            {filtro}
        </section>
    </>
  )
}

export default Actividad4