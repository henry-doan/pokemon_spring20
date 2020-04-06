import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PokeForm extends Component {
   // this name for the pokemon
  state = { name: '', type: '', level: 0 }

  componentDidMount() {
    if (this.props.id) {
      const { name, id, type, level } = this.props
      this.setState({ name, id, type, level })
      // this.setState({ name: name, id: id, type, level })
    }
  }

  handleChange = (e) => {
    // this name is for the input
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      // update the pokemon in the array
      this.props.updatePokemon(this.props.id, this.state)
      // toggle the form
      this.props.toggleForm()
    } else {
      // add the pokemon to the array
      this.props.addPokemon(this.state)
    }
    this.setState({ name: '', type: '', level: 0 })
  }

  render() {
    const { name, type, level } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Name:'
          required

          name='name'
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Type:'
          required

          name='type'
          value={type}
          onChange={this.handleChange}
        />
        <Form.Input
          label='Level:'
          required

          name='level'
          value={level}
          onChange={this.handleChange}
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

export default PokeForm;
// export PokeForm;