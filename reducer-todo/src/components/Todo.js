//setup state here(rreduce hook)
//rredner todolist here
import React, { useState, useReducer } from 'react';
const Todo = (props) =>{
    const toggleItem = (id) =>{
        props.dispatch({type: "COMPLETE", id:id})
    }

    return (
        <div>
       <h1> To-Do: </h1>
        {props.state.map(todo=>{
            return(
                <div className={`todo${todo.completed ? " completed" : ""}`} onClick={() => toggleItem(todo.id)} key={todo.id}>
<ul>
                <li>{todo.item}</li>
                </ul>
            </div>
            )
            })}
        </div>
    )




}

export default Todo;