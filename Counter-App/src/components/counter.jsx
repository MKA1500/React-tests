import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  styles= {
    fonSize: '10px',
    fontWeight: 'bold'
  };

  render() {
    return (
      <div className="container mt-5">
        <div>
          <span
            style={this.style}
            className="badge badge-primary m-2">{ this.formatCount() }</span>
        </div>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state; // i.e. = this.state.count
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
