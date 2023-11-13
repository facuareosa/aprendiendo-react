import React from 'react'
import spain from '../assets/banderas/spain.jpg'
import francia from '../assets/banderas/francia.png'
import uk from '../assets/banderas/uk.png'

function Banderas() {
  return (
    <div className='banderas'>
        <img src={spain} alt="" className="banderas__img" />
        <img src={francia} alt="" className="banderas__img" />
        <img src={uk} alt="" className="banderas__img" />
    </div>
  )
}

export default Banderas