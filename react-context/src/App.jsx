import React, { Component } from 'react';
import './App.css';

import NameInput from './component/NameInput';

import nameContext from './contexts/name';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'José'
      }
    };
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(event) {
    const name = event.target.value;
    this.setState({
      user: {
        ...this.state.user,
        name: name
      }
    });
  }

  render() {
    return (
      <div className="App">
        <nameContext.Provider
          value={{
            user: this.state.user,
            changeUser: this.changeUser
          }}
        >
          <p></p>
          <NameInput name={this.state.name} />
        </nameContext.Provider>
        <p>{this.state.user.name}</p>
      </div>
    );
  }
}

export default App;
