import React from "react";

const TodoItem = ({title, todoDescription, id, removeTodo}) => (
  <div className="todo-item" key={id}>
    <h1>{title}</h1>
    <p>{todoDescription}</p>
    <button onClick={() => removeTodo(id)}>Remove Todo</button>
  </div>
);

export default TodoItem;
