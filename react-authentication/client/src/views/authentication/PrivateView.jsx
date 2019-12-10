import React, { Component } from 'react';
import { loadUserInformation as loadUserInformationService } from './../../services/authentication';

class PrivateView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const user = await loadUserInformationService();
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const user = this.state.user;
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
