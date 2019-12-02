import React, { Component } from 'react';

import './style.scss';

class Card extends Component {
  render() {
    const body = this.props.body;
    const children = this.props.children;
    return (
      <div className="card">
        {children}
        <p>{body}</p>
      </div>
    );
  }
}

export default Card;
