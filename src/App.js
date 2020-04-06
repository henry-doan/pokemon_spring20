import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Pokedex from './components/pokemon/Pokedex';
import PokeForm from './components/pokemon/PokeForm';

class App extends Component {
  state = { pokemons: [
    { id: 1, name: 'Pikachu', type: 'electric', level: 5 },
    { id: 2, name: 'Jiggly puff', type: 'fairy', level: 16 },
    { id: 3, name: 'Charmander', type: 'fire', level: 30 },
    { id: 4, name: 'Mewtwo', type: 'psychic', level: 2 },
    { id: 5, name: 'Diglett', type: 'ground', level: 43 },
  ]}

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addPokemon = (incomingPokemon) => {
    let newPokemon = { id: this.getId(), ...incomingPokemon }
    this.setState({ pokemons: [ newPokemon, ...this.state.pokemons ] })
  }

  releasePokemon = (id) => {
    const { pokemons } = this.state 
    this.setState({ pokemons: pokemons.filter( p => p.id !== id ) })
  }

  updatePokemon = (id, updatedPokemon) => {
    const pokemons = this.state.pokemons.map( p => {
      if (p.id === id) {
        return updatedPokemon
      }
      return p
    })
    this.setState({ pokemons })
  }

  render() {
    const { pokemons } = this.state 
    // const pokemons = this.state.pokemons
    return(
      <>
         {/* className             text-align */}
        <Header color='red' size='huge' textAlign='center'>
          Pokedex
        </Header>
        <PokeForm addPokemon={this.addPokemon} />
        <Pokedex 
          pokemons={pokemons} 
          releasePokemon={this.releasePokemon}
          updatePokemon={this.updatePokemon}
        />
      </>
    )
  }
}

export default App;