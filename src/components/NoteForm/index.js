import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react'

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
    const tagOptions = [
      {
        text: "Work",
        value: "Work",
      },
      {
        text: "Personal",
        value: "Personal",
      },
      {
        text: "Hobby",
        value: "Hobby",
      }
    ]
    return (
      <Form style={formStyle} onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title:</label>
          <Input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Note:</label>
          <Form.TextArea
            name="noteDescription"
            value={this.state.noteDescription}
            onChange={this.handleChange}
            maxLength="250"
            required
          />
        </Form.Field>
        <Select
          placeholder="select a tag"
          name="tags"
          required
          value={this.state.select}
          onChange={this.handleChange}
          options={tagOptions}>
        </Select>
        <Button primary type='submit'>Add Note</Button>
      </Form>
    );
  }
}

const formStyle = {
  marginBottom: '30px',
}

export default NoteForm;
