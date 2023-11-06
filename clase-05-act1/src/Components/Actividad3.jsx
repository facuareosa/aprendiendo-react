import React, { useState,useRef } from 'react';
import './Actividad3.css';

function Actividad3({reyes}) {

    const inputRef = useRef();
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        const value = inputRef.current.value;
        setInputValue(value);
    };

    const resultado = reyes.find((e) => new RegExp(`^${inputValue}`, 'i').test(e.nombre))
    
    
    const displaySearch = () => {
        if(inputValue === ""){
            return <p className='search__result'> Ingrese una letra para realizar la busqueda</p>
        } else {
            if (resultado === undefined) {
                return <p className='search__result'>No se ha encontrado un rey con la letra {inputValue}</p>
            } else {
                return <p className='search__result'>El rey encontrado es, {resultado.nombre}</p>;
            }
        }
    }


  return (
    <>
        <section className='section section-3'>
            <div className='search__div'>
            <input 
                type="text"
                className='search__input'
                ref={inputRef}
                placeholder='Ingrese la letra del rey a buscar'/>
            <button className="search__btn" onClick={handleSearch}>buscar</button>
            </div>
            {displaySearch()}
        </section>
    </>
    
  )
}

export default Actividad3