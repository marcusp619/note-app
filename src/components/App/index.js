import React, {Component} from 'react';
import './App.css';
import {AppBar, Toolbar, Paper, Typography} from '@material-ui/core';
import TodoForm from '../TodoForm/';
import TodoList from '../TodoList/';
import uuidv4 from  'uuid/v4'
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = todo => {
    const newTodo = {...todo, id: uuidv4()};
    const todos = [...this.state.todos, newTodo];
    this.setState({todos});
  };

  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos});
  }

  render() {
    return (
      <div>
        <Paper
          elevation={0}
          style={{padding: 0, margin: 0, backgroundColor: '#fafafa'}}>
          <AppBar color="primary" position="static" style={{height: 64}}>
            <Toolbar style={{height: 64}}>
              <Typography color="inherit">TODO APP</Typography>
            </Toolbar>
          </AppBar>
        </Paper>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todos={this.state.todos}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
