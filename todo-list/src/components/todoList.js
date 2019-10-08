import React, { useState, useReducer } from 'react';
import { initialState } from "../reducers/reducer";

export const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState("");

    const handleChanges = event => {
        setInput(event.target.value)
    }

    console.log(initialState)

    return (
    <div>
        <form>
            <input 
            className="inputForm" 
            type="text" 
            value={input}
            name= "item"
            onChange={handleChanges}
            >
            </input>
        </form>
     <button onClick={() =>
     dispatch({type: "ADD_NEW_ITEM" })} > Add Item
     </button>
    </div>
    )
}