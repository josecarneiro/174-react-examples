import React from 'react';
import { Component } from 'react';

import { load as loadPokemonService } from './services/heroes';

// With node, we could do:
// const searchHeroService = require('./services/heroes').search;
// const { search: searchHeroService } = require('./services/heroes');

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null
    };
  }

  /*
  componentDidMount() {
    loadPokemonService('pikachu')
      .then(pokemon => {
        this.setState({
          pokemon
        });
      })
      .catch(error => {
        console.log(error);
        console.log('Error in service.');
      });
  }
  */

  async componentDidMount() {
    try {
      const pokemon = await loadPokemonService('pikachu');
      console.log(pokemon);
      const a = await loadPokemonService('bulbasaur');
      console.log(a);
      const b = await loadPokemonService('raichu');
      console.log(b);
      const c = await loadPokemonService('squirtle');
      console.log(c);
      const d = await loadPokemonService('charmander');
      console.log(d);
      const e = await loadPokemonService('charizard');
      console.log(e);
      this.setState({
        pokemon
      });
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  }

  render() {
    const pokemon = this.state.pokemon;
    return (
      <main>
        {pokemon && (
          <div>
            <h1>{pokemon.name}</h1>
          </div>
        )}
      </main>
    );
  }
}

export default App;
