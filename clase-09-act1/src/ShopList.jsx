import {useReducer, useState, useRef} from 'react'

const initialList = []

const reducer = (state,action)=>{
    switch(action.type){
        case "incrementar":
            return state.map(elemento=>
                (action.payload === elemento.id)
                ? {...elemento, cantidad:elemento.cantidad+1}
                : elemento
                )
        case "disminuir":
            return state.map(elemento=>
                (action.payload === elemento.id && elemento.cantidad >1)
                ? {...elemento, cantidad:elemento.cantidad-1} // copia propiedadees del objeto elemento y sobrescribe cantidad
                : elemento
                )
        case "eliminar":
            return state.filter(elemento=> action.payload !== elemento.id)
        case "añadir":
            return [...state,action.payload] //toma el array de objetos que hay en state y agrega el objeto recibido por el payload creado en el boton
    }
}

function ShopList() {
    const inputBox = useRef()
    const [list,dispatch] = useReducer(reducer, initialList);
    const [item, setItem] = useState("");

    return (
        <section className='shopList'>
            <div>
                <label htmlFor="producto">Producto:</label>
                <input 
                    id="producto"
                    ref={inputBox} 
                    type="text" 
                    value={item}
                    onChange={(e)=>setItem(e.target.value)}
                    />
                <button className='input__btn' 
                onClick={()=>{
                inputBox.current.focus();
                setItem(""); //no poner inputBox.current.value="" porque modificara la creacion del objeto
                dispatch({type:"añadir",payload:{id:Date.now(),nombre:item,cantidad:1}})}
                }>
                Añadir
                </button>
            </div>
            {list.map((producto)=>
                <div key={producto.id}>
                    <p>{producto.nombre} <span>({producto.cantidad}) unidades</span></p>
                    <button onClick={()=>dispatch({type:"incrementar", payload:producto.id})} >+</button>
                    <button onClick={()=>dispatch({type:"disminuir", payload:producto.id})} >-</button>
                    <button onClick={()=>dispatch({type:"eliminar", payload:producto.id})} >x</button>
                </div>
            )}
        </section>
    )
}

export default ShopList
