import {React, useContext} from 'react'
import {Context} from '../components/Context'
import { useParams, Navigate } from 'react-router-dom'
import './rey.css'

function Rey() {
    const parametro = useParams();

    const reyes = useContext(Context);

    const valoresPermitidos = reyes

    if (!valoresPermitidos.includes(parametro.rey)){
        return <Navigate to="/" />;
    }

  return (
    <div className='rey__div'>
        <img src={`https://www.html6.es/img/rey_${parametro.rey}.png`} alt="" />
        <h2 className='rey__name'>{parametro.rey}</h2>
    </div>
  )
}

export default Rey