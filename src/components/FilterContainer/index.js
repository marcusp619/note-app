import React, { Component } from 'react';
import { Container, Button, Header, Form, Input } from 'semantic-ui-react';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.filterDates(this.state.date);
    this.setState({
      date: '',
    });
  };

  render() {
    return (
      <Container>
        <Header as='h2'>Filter Notes By Category: </Header>
        <Button onClick={() => this.props.filterNotes("Work")}>Work</Button>
        <Button onClick={() => this.props.filterNotes("Personal")}>Personal</Button>
        <Button onClick={() => this.props.filterNotes("Hobby")}>Hobby</Button>
        <Form style={formStyle} onSubmit={this.handleSubmit}>
          <Header as='h2'>Filter Notes By Date: </Header>
          <Form.Field>
            <Input
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="filter by unix time for now i.e. 15459919 to get back all but work"
              required
            />
          </Form.Field>
          <Button primary type='submit'>Search</Button>
        </Form>
      </Container>
    )
  }
};

const formStyle = {
  marginBottom: '30px',
}

export default FilterContainer;