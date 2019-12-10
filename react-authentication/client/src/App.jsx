import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import NoteListView from './views/NoteListView';
import NoteCreateView from './views/NoteCreateView';
import NoteEditView from './views/NoteEditView';
import NoteItemView from './views/NoteItemView';

import AuthenticationSignInView from './views/authentication/SignInView';
import AuthenticationSignUpView from './views/authentication/SignUpView';
import AuthenticationPrivateView from './views/authentication/PrivateView';

import { signOut as signOutService } from './services/authentication';
import { loadUserInformation as loadUserInformationService } from './services/authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onSignOutTrigger = this.onSignOutTrigger.bind(this);
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  async onSignOutTrigger() {
    try {
      await signOutService();
      this.setState({
        user: null
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <Link to="/">List</Link>
            <Link to="/create">Create Note</Link>
            {(user && (
              <Fragment>
                <Link to="/private">Private</Link>
                <button onClick={this.onSignOutTrigger}>Sign Out</button>
              </Fragment>
            )) || (
              <Fragment>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </Fragment>
            )}
          </nav>
          <Switch>
            <Route path="/create" component={NoteCreateView} />
            <Route path="/sign-up" component={AuthenticationSignUpView} />
            <Route path="/sign-in" component={AuthenticationSignInView} />
            <Route path="/private" component={AuthenticationPrivateView} />
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
