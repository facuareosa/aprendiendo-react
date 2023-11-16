import React, { useContext , useState } from 'react'
import { stateContext } from '../Contexto/Context'
import Lugar from './Lugar'
import Tutor from './Tutor'


function Content() {
  const { info } = useContext(stateContext);
  const [showLugar, setShowLugar] = useState(false);
  const [showTutor, setShowTutor] = useState(false);

  const toggleLugar = () => {
    if (showLugar == false){setShowLugar(true); setShowTutor(false)}
  };
  
  const toggleTutor = () => {
    if (showTutor == false){setShowTutor(true); setShowLugar(false)}
  };

  return (
    <div className='content'>
        <h2 className='content__title'>{info.titulo}</h2>
        <p className='content__text'>{info.texto}</p>
        <div className="content__btnContainer">
          <button className="content__btn" onClick={toggleTutor}>{info.boton1}</button>
          <button className="content__btn" onClick={toggleLugar}>{info.boton2}</button>
        </div>
        {showLugar && <Lugar />}
        {showTutor && <Tutor />}
    </div>
  )
}

export default Content