import React, { Component } from 'react';
import { AppBar, Toolbar, Paper, Typography } from '@material-ui/core';
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
      <div>
        <Paper
          elevation={0}
          style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}>
          <AppBar color="primary" position="static" style={{ height: 64 }}>
            <Toolbar style={{ height: 64 }}>
              <Typography color="inherit">Note APP</Typography>
            </Toolbar>
          </AppBar>
        </Paper>
        <NoteForm addNote={this.addNote} />
        <NoteList notes={this.state.notes} removeNote={this.removeNote} />
      </div>
    );
  }
}

export default App;
