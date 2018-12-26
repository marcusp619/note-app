import React from 'react';
import TodoItem from '../TodoItem/';

const TodoList = ({todos}) => {
  const todoItems = todos.map(todo => <TodoItem {...todo} />);

  return <div className="todo-list-container">{todoItems}</div>;
};

export default TodoList;
