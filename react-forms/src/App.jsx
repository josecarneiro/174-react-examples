import React from 'react';
import { Component } from 'react';

import CustomInput from './components/CustomInput';
import CustomInputFunctional from './components/CustomInputFunctional';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Carla',
      names: [],
      count: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNameToList = this.addNameToList.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({
      name: value
    });
  }

  addNameToList(event) {
    event.preventDefault();
    const name = this.state.name;
    const names = [...this.state.names, name];
    this.setState({
      names: names,
      name: ''
    });
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  get squaredCount() {
    const count = this.state.count;
    return count ** 2;
  }

  render() {
    console.log(this.state.count, this.squaredCount);
    console.log(this.squaredCount);
    const names = this.state.names;
    return (
      <header>
        <form onSubmit={this.addNameToList}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Name"
          />
          <button>Add Name to List</button>
        </form>
        <ul>
          {names.map(name => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
        <CustomInput value={this.state.count} onChange={this.handleIncrement} />
        <CustomInputFunctional
          value={this.state.count}
          onChange={this.handleIncrement}
        />
        <span>Count is currently at {this.state.count}</span>
        <br />
        <span>Square of count is {this.squaredCount}</span>
      </header>
    );
  }
}

export default App;
