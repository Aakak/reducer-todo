import React from 'react';


export const initialState = {
    todoList: []
};


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            const newItem = {
                item: action.payload,
                id: Date.now(),
                purchased: false
            };
            return {
                ...state.todoList
                // ...state,
                // todoList: [...state.todoList, newTodoList ]
            };                                                                
            default: 
            return state;
    }
};