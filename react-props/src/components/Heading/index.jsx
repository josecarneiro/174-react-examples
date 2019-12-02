import React, { Component } from 'react';

import './style.scss';

class Heading extends Component {
  render() {
    const message = this.props.message;
    return <h1 className="heading-title">{message}</h1>;
  }
}

export default Heading;
