import React, {Component} from 'react';
import './App.css';
import {AppBar, Toolbar, Paper, Typography} from '@material-ui/core';
import TodoForm from '../TodoForm/'
import AddTodo from '../AddTodo/';
import TodoList from '../TodoList/';
import TodoItem from '../TodoItem/';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo = todo => {
    const newTodo = {...todo, id: Date.now()}
    const todos = [...this.state.todos, newTodo]
    this.setState({todos})
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
        <TodoForm 
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
