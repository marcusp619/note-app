import React, {Component} from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todoDescription: '',
      tags: 'Work',
    };
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Todo:
          <textarea
            name="todoDescription"
            value={this.state.todoDescription}
            onChange={this.handleChange}
          />
        </label>
        <select
          name="tags"
          value={this.state.select}
          onChange={this.handleChange}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Hobby">Hobby</option>
        </select>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
