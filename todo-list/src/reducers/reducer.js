import React from 'react';
import todoList from "../components/todoList";

const todoData = [
    {
      list: 'Milk',
      id: 1246,
      completed: false
    },
    {
      list: 'Eggs',
      id: 1237,
      completed: false
    },
    {
      list: 'Fruits',
      id: 1248,
      completed: false
    }
  ];


export const initialState = {
    todos: todoData
  };

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_ITEM":
      return {
        ...state,
        todos : [...state.todos,  
            { 
            list: action.payload, 
            id: Date.now(),
            completed: false
            }
        ]
        
     };

    case "TOGGLE_COMPLETED":
        const newTodos = state.todos.map(todo => {
            if (todo.id === action.payload) {
                return { 
                ...todo, 
                completed: !todo.completed };
            }
            return todo;
            });
        return {...state, todos: newTodos}

    case "CLEAR_COMPLETED":
        const uncompleteTodos = state.todos.filter(todo => !todo.completed);
        return {...state, todos: uncompleteTodos};
    default:
      return state;
  }
};