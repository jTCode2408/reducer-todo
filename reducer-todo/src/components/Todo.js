//setup state here(rreduce hook)
//rredner todolist here
import React, { useState, useReducer } from 'react';
import { TodoReducer, initialState } from '../reducers/TodoReducer';

const Todo = () =>{
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    console.log(state);
    return (
        <div>
       <h2> To-Do: {state.item}</h2>
        
        </div>
    )




}

export default Todo;