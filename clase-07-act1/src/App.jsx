import React from 'react'
import './App.css'
import Banderas from './components/Banderas'
import Content from './components/Content'
import Tutor from './components/Tutor'
import Lugar from './components/Lugar'
import { Datos } from './Contexto/Context';

function App() {

  return (
    <>
    <Datos>
      <section className='app'>
          <Banderas />
          <Content />


      </section>
    </Datos>
    </>
  )
}

export default App