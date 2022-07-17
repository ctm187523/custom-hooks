
//creamos un Hook para formularios como parametro de valor inicial tenemos un objeto vacio

import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    //Usamos el Hook de React useState como valor inicial ponemos el objeto initialForm recibido como parametro en el Hook
    const [formState, setformState] = useState( initialForm );

    //funcion para crear los cambios del input del usuario(entrada de datos) ya que no se puede hacer directamente en React
    //recibimos el evento del onChange del input(ver FormWithCustomHook.jsx) y lo destruturamos, usamos el target
    const onInputChange = ({ target }) => {

        //desestructuramos del target el name para saber si se trata del input username o del input email
        //tambien desestructuramos del target el value que sera el valor que introduce el usuario
        const { name, value } = target;

        setformState({
            ...formState, //usamos el spread para mantener todas las variables en su estado
            [name]: value //queremos cambiar la propiedad de la  que el name este siendo modificado y le damos el value, usamos las propiedades computadas de los objetos [name]
        });
    }

    //reseteamos los valores al estado inicial
    const onResetForm = ( ) => {

        setformState ( initialForm );
    }


    return {
        // desestructuramos el formState para pasar todos los valores desestructurados
        ...formState, 
        formState,
        onInputChange,
        onResetForm

    }
}
