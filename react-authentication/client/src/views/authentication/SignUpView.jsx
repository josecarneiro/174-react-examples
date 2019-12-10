import React, { Component } from 'react';

import { signUp as signUpService } from './../../services/authentication';

class AuthenticationSignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { email, name, password } = this.state;
    try {
      const user = await signUpService({ email, name, password });
      console.log(user);
      this.props.history.push(`/private`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const note = this.state.note;
    return (
      <main>
        <form onSubmit={this.handleFormSubmission}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button>Sign Up</button>
        </form>
      </main>
    );
  }
}

export default AuthenticationSignUpView;
