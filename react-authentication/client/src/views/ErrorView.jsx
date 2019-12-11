import React, { Component } from 'react';

class ErrorView extends Component {
  render() {
    const errorMessageMap = {
      404: 'Page not found',
      401: 'User not authorized',
      500: 'Server error'
    };
    const defaultErrorMessage = 'Unknown error';
    const code = this.props.match.params.code;
    const message = errorMessageMap[code] || defaultErrorMessage;
    return (
      <main>
        <h1>There was an error</h1>
        <h3>{message}</h3>
      </main>
    );
  }
}

export default ErrorView;
