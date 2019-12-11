import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { signOut as signOutService } from './../services/authentication';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onSignOutTrigger = this.onSignOutTrigger.bind(this);
  }

  async onSignOutTrigger() {
    try {
      await signOutService();
      this.props.changeAuthenticationStatus(null);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.props.user;
    return (
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
    );
  }
}

export default Navbar;
