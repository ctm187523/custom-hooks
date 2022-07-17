import { useEffect, useState } from "react"


export const useFetch = ( url ) => {

    //usamos el Hook useState de React
    const [state, setstate] = useState({

        data:null, //la peticion
        isLoading: true, // manejamos si esta cargando la peticion
        hasError: null //manejamos si hay algun error
    });

    const getFetch = async() => {

        //ponemos isLoading del state en true, va a cargar la peticion
        //los demas atributos del objeto los dejamos igual usando el spread ...state
        setstate({
            ...state,
            isLoading: true
        });

       const resp  = await fetch(url);
       const data =  await resp.json();

       setstate({
           data: data,
           isLoading: false,
           hasError: null
       })

    }

    //usamos el Hook useEffect de React
    useEffect(() => {
        
        getFetch();

    }, [url]) //cada vez que cambia el url se dispara el useEffect

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
        
    
}
