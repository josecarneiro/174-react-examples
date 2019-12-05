import React from 'react';
import { Component } from 'react';

import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <header>
        {this.state.active && <Counter />}
        <button onClick={() => this.setState({ active: !this.state.active })}>
          Toggle counter
        </button>
        <p>Sample App</p>
      </header>
    );
  }
}

export default App;
