import React from 'react';
import uuidv4 from 'uuid/v4'
import NoteItem from '../NoteItem/';

const NoteList = ({ notes, removeNote }) => {
  if (notes) {
    const noteItems = notes.map(note => (
      <NoteItem {...note} removeNote={removeNote} key={uuidv4()} />
    ));
    return <div className="todo-list-container">{noteItems}</div>;
  }
};

export default NoteList;
