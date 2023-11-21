import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Datos,Context} from '../components/Context'



function Home() {

    const reyes = useContext(Context)
    
    const reyesImg = reyes.map((rey,index) =>{
       return  <Link key={index} to={`/${rey}`}><img src={`https://www.html6.es/img/rey_${rey}.png`}></img></Link>
    })
   
  return (
    <section>
        {reyesImg}
    </section>
  )
}

export default Home