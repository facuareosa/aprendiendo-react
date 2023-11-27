import {useState} from 'react'



function ShopList() {

    const [itemList,setItemList] = useState([])
    const [item,setItem] = useState("");

    const handleChange = (e)=>{
        setItem(e.target.value)
    }
    
    const createItem = ()=>{
        setItemList([...itemList,item]);
        setItem('')
    }
  return (
    <section className='shopList'>
        <div className='input__div'>
            <h2>Producto:</h2>
            <input className='input__box' type="text" value={item} onChange={handleChange} />
            <button onClick={createItem} >Añadir</button>
        </div>
        <div className='list__div'>
        {itemList.map((item, index)=>
            <div key={index} className='list__unit'>
                <div className='list__text'>
                    <h2>{item}</h2>
                    <p>(<span>3 </span>Unidades)</p>
                </div>
                <div className='list__btns'>
                    <button>+</button>
                    <button>-</button>
                    <button>x</button>
                </div>
            </div> 
        )}
        </div>
    </section>
  )
}

export default ShopList

{/* <div>
<h2>{item}</h2>
<button>+</button>
<button>-</button>
<button>&#128465;</button>
</div> */}