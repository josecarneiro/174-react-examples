import React from 'react';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      names: ['José']
    };
    const instanceOfComponent = this;
    this.incrementCount = this.incrementCount.bind(instanceOfComponent);
    this.addName = this.addName.bind(instanceOfComponent);
  }

  incrementCount() {
    // We cannot mutate the state directly
    // this.state.count++;
    // this.state.count = this.state.count + 1;
    // We need to call setState()
    const count = this.state.count + 1;
    this.setState({
      count
    });
    // Count is still the old value inside of the method
    // console.log(this.state.count);
  }

  addName() {
    // You can't mutate the state directly
    // this.state.names.push('Gui');
    // We need to create a new array,
    // that has all of the elements of the previous array,
    // plus one at the end
    const names = [...this.state.names, 'José'];
    this.setState({
      names: names
    });
  }

  render() {
    const count = this.state.count;
    const names = this.state.names;
    return (
      <header>
        <button onClick={this.incrementCount}>+</button>
        <p>{count}</p>
        <button onClick={this.addName}>Add name</button>
        <ul>
          {names.map(name => {
            return <li>{name}</li>;
          })}
        </ul>
      </header>
    );
  }
}

export default App;
