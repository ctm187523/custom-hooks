import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

//creamos la variable initalState que es un arreglo vacio
const initialState = [];

//creamos la funcion init (3 argumento del userReducer) para cuando se cargue
//el navegador recupere la informacion guardada por el navegador en el Local Stroage
//con || [] le decimos que si es nulo mande un arreglo vacio
const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

//creamos un CustomHook para manejar la logica del componente TodoApp
export const useTodos = () => {

    //usamos el Hook de React useReducer, desestructuramos state(que le pondremos todos) y el dispatch del array(esta entre corchetes)
    //state(TODOS) es el estado del objeto y dispatch la accion que debemos hacer en el objeto
    //como parametros el Hook tiene el REDUCER que es la funcion que usamos(todoReducer) en
    // nuestro caso es la funcion todoReducer.js creada en esta carpeta 08-useReducer
    // INITIALSTATE es el estado inicial
    // y el INIT que es una funcion de inicializacion se usa normalmente cuando se tiene un estado pesado y el resultado
    //de esa funcion es lo que sera el estado inicial, la usamos arriba linea 11
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    //cuando el todo cambie debemos notificar al navegador al Local Storage para almacenar
    //para ello usamos el useEfect y como dependencia ponemos los todos
    useEffect(() => {
        //serializamos los todos porque en el Local Storage solo podemos almacenar strings 
        //para ello usamos el JSON.stringify ( todos )
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])

    //funcion para añadir el nuevo TODO recibido del componente TodoAdd.jsx
    const handleNewTodo = (todo) => {

        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        //usamos el dispatch para mandar la accion anterior al Hook de arriba de React useReducer, esa accion se manda a la funcion creada por nosotros todoReducer.js para ser gestionada
        dispatch(action);
    }

    //metodo para borrar un TODO usando el id recibido del componente TodoList.jsx a traves del TodoItem.jsx
    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        });

    }

    //metodo para cambiar el estado de done de false a true  un TODO usando el id recibido del componente TodoList.jsx a traves del TodoItem.jsx
    const handleToggleTodo = (id) => {

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });

    }

    // //metodo para saber cuantas tareas hay en la lista
    // const todosCount = () => {

    //     todos.length;

    // }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length, //mandamos el numero de tareas
        pendingTodosCount: todos.filter(todo => !todo.done).length //usamos el metodo filter para que cree un nuevo arreglo con las tareas que no esten en done o sea pendientes
    }
}
