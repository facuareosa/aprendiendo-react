import './App.css'
import imgSisebuto from './assets/img/rey_sisebuto.png';
import imgLeogivildo from './assets/img/rey_leogivildo.png';
import imgAtanagildo from './assets/img/rey_atanagildo.png';
import imgIncognito from './assets/img/rey_incognito.png'

function App() {
  //ARRAYS INDIVIDUALES
  let nombre=['Sisebuto','Leogivildo','Atanagildo'];
  //PROBANDO OBJETOS
  //----------------
  const cambioImg = (e)=>{
    if(e.target.src.includes("incognito")){
      e.target.style.opacity="0"
    }else{
      e.target.src = imgIncognito;
      e.target.parentNode.style.backgroundColor="white"
    }
  }
  const cambioText = (e) =>{
    if(e.target.innerHTML != "Visto"){
      e.target.innerHTML = "Visto"
    }else{
      e.target.innerHTML=""
    }
  }
  return (
    <>
    <section className="king">
      <div className='king__div'>
        <img onClick={cambioImg}src={imgSisebuto} className='king__img' />
        <p onClick={cambioText} className="king__name">{nombre[0]}</p>
      </div>
      <div className='king__div'>
        <img onClick={cambioImg}src={imgLeogivildo} className='king__img' />
        <p onClick={cambioText} className="king__name">{nombre[1]}</p>
      </div>
      <div className='king__div'>
        <img onClick={cambioImg}src={imgAtanagildo} className='king__img' />
        <p onClick={cambioText} className="king__name">{nombre[2]}</p>
      </div>
    </section>
    </>
  )
}

export default App
