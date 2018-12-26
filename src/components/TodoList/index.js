import React from 'react';
import uuidv4 from  'uuid/v4'
import TodoItem from '../TodoItem/';

const TodoList = ({todos, removeTodo}) => {
  const todoItems = todos.map(todo => (
    <TodoItem {...todo} removeTodo={removeTodo} key={uuidv4()}/>
  ));

  return <div className="todo-list-container">{todoItems}</div>;
};

export default TodoList;
