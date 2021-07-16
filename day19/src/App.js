import React from 'react';
import './App.css';

class Counter extends React.Component {
  state = {
    count : 0
  };

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button className="block" onClick={this.handleClick}>
        <div className="btn">{this.state.count}</div>
      </button>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="outFrame">
        <div className="frame">
        <div className="intro">
          Count on Me
        </div>
        {[1, 2, 3, 4].map((v) => (
          <Counter />
        ))}
      </div>
      </div>
    );
  }
}

export default App;
