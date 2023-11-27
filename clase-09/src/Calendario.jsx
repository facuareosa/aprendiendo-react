import React, { useReducer } from 'react'

const currentTime =new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();

const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

const initialState = {m:month, a:year};

const reducer = (state,action) =>{

    let newMonth = state.m;
    let newYear = state.a;
    
    switch(action.type){
    
        case "masM":
            newMonth= newMonth == 11 ? 0 : newMonth+1;
            break;
            
        case "menosM":
            newMonth= newMonth == 0 ? 11 : newMonth-1;
            break;
    }
    return {m:newMonth,a:state.a};
    

} 

function Calendario() {

    const [fecha,dispatch] = useReducer(reducer,initialState)

  return (
    <>
        {meses[fecha.m]} ({fecha.a})
        <div>
            meses <button onClick={()=> dispatch({type:'masM'})}>+</button><button onClick={()=> dispatch({type:'menosM'})}>-</button>
        </div>
    </>
  )
}

export default Calendario