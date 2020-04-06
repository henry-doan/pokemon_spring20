import React, { Component } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import PokeForm from './PokeForm';
 
class Pokemon extends Component {
  state = { showForm: false }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render() {
    const { id, name, type, level, releasePokemon } = this.props
    const { showForm } = this.state
    return(
      <Table.Row>
        {
          showForm ? 
          // TODO have the form be on another page for it to work
          <PokeForm {...this.props} toggleForm={this.toggleForm} />
          :
          <>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>{level}</Table.Cell>
            <Table.Cell>
              <Button icon onClick={() => releasePokemon(id)}>
                <Icon name='tree' color='green' />
              </Button>
            </Table.Cell>
          </>
        }
      </Table.Row>
    )
  }
}

export default Pokemon;