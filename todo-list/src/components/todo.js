import React from "react";

function Todo({ todo, dispatch }) {
    
  const toggleCompleted = event => {
    event.preventDefault();
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };

  console.log(todo);
  return (
    <div
        onClick={toggleCompleted}
        className={`todo${todo.completed ? "completed" : ""}`}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        <p>{todo.list}</p>
      </div>
  );
}

export default Todo;