import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";

const TodoForm = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_NEW_ITEM",
      payload: input
    });
    setInput("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input name="item" 
        onChange={handleChanges} 
        value={input} 
        />
        <button>Add Todo</button>
        <button onClick={clearCompleted}>Delete Purchased</button>
      </form>
    </div>
  );
};
export default TodoForm;
