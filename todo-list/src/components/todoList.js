import React, { useReducer } from 'react';
import { initialState, reducer } from "../reducers/reducer";
import TodoForm from './todoForm'
import Todo from './todo'

const TodoList = () => {
    const [{todos}, dispatch] = useReducer(reducer, initialState);
    return (

    <div>
     {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;    })}
       <TodoForm dispatch={dispatch} />
    </div>
    )
}


export default TodoList


