import React, { useContext } from 'react'
import {Datos,Context} from '../components/Context'



function Home() {

    const reyes = useContext(Context)
    
    const reyesImg = reyes.map((rey,index) =>{
       return <img key={index} src={`https://www.html6.es/img/rey_${rey}.png`}></img>
    })
   
  return (
    <section>
        {reyesImg}
    </section>
  )
}

export default Home