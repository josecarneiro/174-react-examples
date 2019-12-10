import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import NoteListView from './views/NoteListView';
import NoteCreateView from './views/NoteListView';
import NoteEditView from './views/NoteEditView';
import NoteItemView from './views/NoteItemView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/create" component={NoteCreateView} />
            <Route path="/" exact component={NoteListView} />
            <Route path="/:id/edit" component={NoteEditView} />
            <Route path="/:id" component={NoteItemView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
