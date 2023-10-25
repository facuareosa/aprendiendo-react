import './App.css'
import imgSisebuto from './assets/img/rey_sisebuto.png';
import imgLeogivildo from './assets/img/rey_leogivildo.png';
import imgAtanagildo from './assets/img/rey_atanagildo.png';

function App() {
  //ARRAYS INDIVIDUALES
  let nombre=['Sisebuto','leogivildo','atanagildo'];
  //PROBANDO OBJETOS
  
  return (
    <>
    <section className="king">
      <div className='king__div'>
        <img src={imgSisebuto} className='king__img' />
        <p className="king__name">{nombre[0]}</p>
      </div>
      <div className='king__div'>
        <img src={imgLeogivildo} className='king__img' />
        <p className="king__name">{nombre[1]}</p>
      </div>
      <div className='king__div'>
        <img src={imgAtanagildo} className='king__img' />
        <p className="king__name">{nombre[2]}</p>
      </div>
    </section>
    </>
  )
}

export default App
