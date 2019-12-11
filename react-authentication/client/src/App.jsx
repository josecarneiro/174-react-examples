import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

import NoteListView from './views/NoteListView';
import NoteCreateView from './views/NoteCreateView';
import NoteEditView from './views/NoteEditView';
import NoteItemView from './views/NoteItemView';

import AuthenticationSignInView from './views/authentication/SignInView';
import AuthenticationSignUpView from './views/authentication/SignUpView';
import AuthenticationPrivateView from './views/authentication/PrivateView';

import ErrorView from './views/ErrorView';

import Navbar from './components/Navbar';

import { loadUserInformation as loadUserInformationService } from './services/authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loaded: false
    };
    this.changeAuthenticationStatus = this.changeAuthenticationStatus.bind(this);
    this.verifyAuthentication = this.verifyAuthentication.bind(this);
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({
        user,
        loaded: true
      });
    } catch (error) {
      console.log(error);
    }
  }

  changeAuthenticationStatus(user) {
    this.setState({
      user
    });
  }

  verifyAuthentication() {
    return this.state.user;
  }

  render() {
    const user = this.state.user;
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar
            user={this.state.user}
            changeAuthenticationStatus={this.changeAuthenticationStatus}
          />
          {this.state.loaded && (
            <Switch>
              <ProtectedRoute
                path="/create"
                // component={NoteCreateView}
                render={props => <NoteCreateView {...props} />}
                verify={this.verifyAuthentication}
                redirect="/error/401"
              />
              <Route
                path="/sign-up"
                render={props => (
                  <AuthenticationSignUpView
                    {...props}
                    changeAuthenticationStatus={this.changeAuthenticationStatus}
                  />
                )}
              />
              <Route
                path="/sign-in"
                render={props => (
                  <AuthenticationSignInView
                    {...props}
                    changeAuthenticationStatus={this.changeAuthenticationStatus}
                  />
                )}
              />
              {/* <Route path="/private" component={AuthenticationPrivateView} /> */}
              <Route
                path="/private"
                render={props => <AuthenticationPrivateView {...props} user={this.state.user} />}
              />
              <Route path="/error/:code" component={ErrorView} />
              <Route path="/" exact component={NoteListView} />
              <Route path="/:id/edit" component={NoteEditView} />
              <Route path="/:id" component={NoteItemView} />
              <Redirect to="/error/404" />
            </Switch>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
