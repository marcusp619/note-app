import React from "react";
import { Button, Header, Container } from 'semantic-ui-react'
import moment from 'moment';

const NoteItem = ({ title, noteDescription, id, tag, addedAt, removeNote }) => (
  <Container style={containerStyle} key={id}>
    <Header color="orange" size="huge">
      {title}
      <Header.Subheader>Tag: {tag}</Header.Subheader>
      <Header.Subheader>Added At: {moment(parseInt(addedAt)).format('YYYY/MM/D hh:mm:ss')}</Header.Subheader>
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
