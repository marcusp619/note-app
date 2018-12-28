import React from 'react';
import uuidv4 from 'uuid/v4'
import NoteItem from '../NoteItem/';
import { Container, Segment } from 'semantic-ui-react'

const NoteList = ({ notes, removeNote }) => {
  if (notes) {
    const noteItems = notes.map(note => (
      <Segment raised piled >
        <NoteItem {...note} removeNote={removeNote} key={uuidv4()} />
      </Segment>
    ));

    return <Container style={containerStyle}>{noteItems}</Container>;
  }
};

const containerStyle = {
  boxShadow: 'rgb(204, 204, 204) 0px 1px 2px',
  background: '#f5f5f5',
  marginBottom: '1rem',
  overflow: 'auto',
  maxHeight: '70vh'
}

export default NoteList;
