import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Counter component was constructed');
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  componentWillUnmount() {
    console.log('Counter component will be destroyed');
  }

  componentDidMount() {
    console.log('Counter component was mounted');
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('Counter component was did update');
    const currentProps = this.props;
    const currentState = this.state;
    if (currentState.count !== previousState.count) {
      console.log('The count changed');
    }
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log('Counter component was rendered');
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;
