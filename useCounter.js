import { useState } from "react"

export const useCounter = ( initialValue=10 ) => { //le ponemos el valor 10 por defecto al paremetro por defecto del Hook

    //usamos el Hook de React useState
    const [counter, setCounter] = useState( initialValue )

    //si manda un argumento vacio el valor por defecto a incrementar es 1
    const increment = ( value = 1) => {
        //setCounter( counter + value);
        setCounter( (current) => current + value); //modificamos la linea de arriba para que al hacer pruebas coja siempre el valor actual ver video 166 minuto 8
    }

    //si manda un argumento vacio el valor por defecto a restar es 1
    const decrement = ( value = 1) => {
        if (counter === 0 ) return; //ponemos el limite a 0 si baja el valor sale del metodo
        //setCounter( counter - value);
        setCounter( (current) => current - value); //modificamos la linea de arriba para que al hacer pruebas coja siempre el valor actual ver video 166 minuto 8
    }

    const reset = () => {
       
        setCounter( initialValue );
    }


    //retornamos el objeto counter y las funciones
    return {

       // counter: counter,
       // al ser un valor que retorna el mismo valor podemos poner simplemente counter
       counter,
       increment,
       decrement,
       reset
    }

}