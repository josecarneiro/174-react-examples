import React, { Component } from 'react';

class CustomInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={this.props.onChange}>Increment</button>
      </div>
    );
  }
}

export default CustomInput;
