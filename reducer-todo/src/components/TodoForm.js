//form input for adding to-do's
//dispatch function to add todo
//import reducer here as well for switch cases

import React, { useState, useReducer} from 'react';
import {TodoReducer,  initialState } from '../reducers/TodoReducer';
import Todo from './Todo';

const TodoForm = () =>{
    const [state, dispatch] = useReducer(TodoReducer, initialState)
    const [todo, setNewTodo] = useState('');
   

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: todo})
    }

    const handleClear = e =>{
        e.preventDefault();
        dispatch({type:"CLEAR", payload:todo})
    }

return(
    <div className = "add-cont">

<form >
<input className= "task"
type = "text"
name = "todo"
value ={todo}
onChange = {handleChanges}
/>

<button onClick ={handleSubmit}> Add To-Do </button>
<button onClick ={handleClear}> Clear Complete </button>

</form>

<Todo id ={state.id} todo ={todo} state ={state} dispatch = {dispatch}
/>
    </div>

)

}


export default TodoForm;