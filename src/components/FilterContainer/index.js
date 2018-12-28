import React from 'react';
import { Container, Button, Header } from 'semantic-ui-react';

const FilterContainer = ({ filterNotes }) => (
  <Container>
    <Header as='h2'>Filter Notes By Category: </Header>
    <Button onClick={() => filterNotes("Work")}>Work</Button>
    <Button onClick={() => filterNotes("Personal")}>Personal</Button>
    <Button onClick={() => filterNotes("Hobby")}>Hobby</Button>
  </Container>
);

export default FilterContainer;