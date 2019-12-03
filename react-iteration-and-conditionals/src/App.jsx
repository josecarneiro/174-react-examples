import React, { Component } from 'react';

import './App.css';

const messages = [
  {
    id: '1',
    body: 'Olá Mundo'
  },
  {
    id: '2',
    body: 'Hello World'
  },
  {
    id: '3',
    body: 'Hola Mundo'
  },
  {
    id: '4',
    body: 'This string should be longer than the rest'
  },
  {
    id: '5',
    body: 'Short'
  }
];

let available = true;

class App extends Component {
  render() {
    // const divStyles = { backgroundColor: 'grey', color: 'white' };
    const divStyles = { backgroundColor: '#fc34e2' };
    return (
      <div className="App" style={divStyles}>
        {(available && <span>This product is available</span>) || (
          <span>This product is not available</span>
        )}
        {messages.map(message => {
          return <h1 key={message.id}>{message.body}</h1>;
        })}
      </div>
    );
  }
}

export default App;
