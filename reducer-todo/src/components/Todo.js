//setup state here(rreduce hook)
//rredner todolist here
import React, { useState, useReducer } from 'react';
const Todo = (props) =>{
    const toggleItem = (id) =>{
        props.dispatch({type: "COMPLETE", id:id})
    }

    return (
        <div>
       <h2> To-Do: </h2>
        {props.state.map(todo=>{
            return(
                <div className={`todo${todo.completed ? " completed" : ""}`} onClick={() => toggleItem(todo.id)} key={todo.id}>
                    
                <p>{todo.item}</p>
            </div>
            )
            })}
        </div>
    )




}

export default Todo;