import React, { useState, useReducer } from 'react';
import { initialState, reducer } from "../reducers/reducer";
import TodoForm from './todoForm'
import Todo from './todo'

const TodoList = () => {
    const [{todos}, dispatch] = useReducer(reducer, initialState);
    return (

    <div>
         <TodoForm dispatch={dispatch} />
     {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;    })}
    </div>
    )
}


export default TodoList


