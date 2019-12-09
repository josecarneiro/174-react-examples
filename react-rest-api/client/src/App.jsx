import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import NoteListView from './views/NoteListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={NoteListView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
