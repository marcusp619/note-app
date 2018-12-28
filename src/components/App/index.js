import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import NoteForm from '../NoteForm/';
import NoteList from '../NoteList/';
import uuidv4 from 'uuid/v4';
import { getAllNotes } from '../../helper/api'
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount = async () => {
    let notes = await getAllNotes()
    this.setState({ notes })
  }

  addNote = note => {
    const newnote = { ...note, id: uuidv4() };
    const notes = [...this.state.notes, newnote];
    this.setState({ notes });
  };

  removeNote = id => {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  };

  render() {
    return (
      <Container>
        <Header size='huge'>Note App</Header>
        <Container style={containerStyle}>
          <NoteForm addNote={this.addNote} />
        </Container>
        <NoteList notes={this.state.notes} removeNote={this.removeNote} />
      </Container>
    );
  }
}

const containerStyle = {
  boxShadow: 'rgb(204, 204, 204) 0px 1px 2px',
}

export default App;
