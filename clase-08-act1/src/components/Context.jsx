import { createContext } from "react";

export const Context = createContext();

export const Datos = ({children}) =>{

    const reyes = ["atanagildo","ataulfo","ervigio","leogivildo","recesvnito","sisebuo"];

    return (
        <Context.Provider value={reyes}>
            {children}
        </Context.Provider>
    )
}