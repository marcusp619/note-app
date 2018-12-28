import React from "react";
import { Button, Header, Container } from 'semantic-ui-react'
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

const NoteItem = ({ title, noteDescription, id, tag, removeNote }) => (
  <Container style={containerStyle} key={id}>
    <Header color="orange" size="huge">
      {title}
      <Header.Subheader>Tag: {tag}</Header.Subheader>
    </Header>
    <p style={pStyle}>Note: {noteDescription}</p>
    <Button secondary onClick={() => removeNote(id)}>Remove Note</Button>
  </Container>
);

const containerStyle = {
  padding: '1rem',
}

const pStyle = {
  fontSize: '1.4rem',
}

export default NoteItem;
