import React from "react";

const TodoItem = ({title, todoDescription, id}) => (
  <div className="todo-item">
    <h1>{title}</h1>
    <p>{todoDescription}</p>
  </div>
);

export default TodoItem;
