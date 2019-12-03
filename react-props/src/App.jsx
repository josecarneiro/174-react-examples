import React, { Component } from 'react';

import Heading from './components/Heading';
import Card from './components/Card';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading message="Olá Mundo" />
        <Heading message="Hello World" />
        <Heading message="Hola Mundo" />
        <Card body="This is the body for the card" />
        <Card body="This is the body for the card">
          <Heading message="This is a heading for a card!" />
          <span>One more element</span>
        </Card>
      </div>
    );
  }
}

export default App;
