import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      noteDescription: '',
      tag: 'Work',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: '',
      noteDescription: '',
    });
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
          Note:
          <textarea
            name="noteDescription"
            value={this.state.noteDescription}
            onChange={this.handleChange}
            maxLength="250"
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
        <button>Add Note</button>
      </form>
    );
  }
}

export default NoteForm;
