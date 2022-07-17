
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add todo':
            return [ ...initialState, action.payload ] //creamos un spread para esparcir el initial state y no modificar y como action ponemos payload que es el TODO nuevo a cargar a la lista
            
        case '[TODO] Remove todo':
            //llamamos al initialState y usamos la funcion filter que crea un nuevo arreglo y como condicion le decimos que carge
            //el arreglo de todos los objetos que tengan un id diferente al id pasado por el action.payload que es el objeto que queremos
            //borrar y al no ser insertado en el nuevo arreglo ya queda borrado
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            //el map regresa un nuevo arreglo 
            return initialState.map( todo => {
                //si el el id el todo es igual al id recibido a traves del action.payload
                //se desestructura el todo para dejar los atributos igual y se cambia unicamente el done
                //cambiando el estado de false a true y viceversa
                if ( todo.id === action.payload ) {
                    return{
                        ...todo,
                        done: !todo.done
                    }

                }
                //si no se cumple la condicion retornamos el todo
                return todo;
            });
            
        default:
            return initialState;
    }

}