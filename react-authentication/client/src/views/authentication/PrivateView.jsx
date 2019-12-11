import React, { Component } from 'react';

class PrivateView extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <h1>Private</h1>
        {user && (
          <div>
            <h1>{user.name}</h1>
            <h5>{user.email}</h5>
          </div>
        )}
      </div>
    );
  }
}

export default PrivateView;
