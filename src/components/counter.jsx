import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="container mt-5">
        <div>
          <span>{ this.formatCount() }</span>
        </div>
        <button className="btn btn-success">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state; // i.e. = this.state.count
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
