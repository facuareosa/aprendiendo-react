import React from 'react'

function ReyCard({reyes}) {
    const imgUrl = "http://www.html6.es/img/rey_"
    const reyInfo = reyes.map((e,index) =>
    <div key={index} className="card__container">
        <p className="card__text">
            <span className='card__nombre'>{e.nombre.toUpperCase()} </span>
            ha comido {e.reinado*e.vacasComidas*365} vacas en sus {e.reinado} años de reinado
        </p>
        <img className="card__img" src={imgUrl+e.nombre.toLowerCase()+".png"} alt="" />
    </div>
        )
    return( 
    <>
        {reyInfo}
    </>
    );
}

export default ReyCard

