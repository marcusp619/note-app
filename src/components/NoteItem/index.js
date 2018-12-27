import React from "react";

const NoteItem = ({ title, noteDescription, id, removeNote }) => (
  <div className="note-item" key={id}>
    <h1>{title}</h1>
    <p>{noteDescription}</p>
    <button onClick={() => removeNote(id)}>Remove Note</button>
  </div>
);

export default NoteItem;
