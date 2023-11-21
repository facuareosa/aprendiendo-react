import React, { useContext } from 'react'
import {Datos,Context} from '../components/Context'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const reyes = useContext(Context)

    const reyesLink = reyes.map((rey,index)=>{
      return <NavLink className={
        ({isActive}) => (isActive ? "nav-active" : null)
        } to={`/${rey}`}>{rey}</NavLink>
    })
  return (
    <nav className='nav'>
      
      {reyesLink}
    </nav>
  )
}

export default NavBar 