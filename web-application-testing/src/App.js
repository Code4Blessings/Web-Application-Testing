import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Display from './Display';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
  return (
      <div className="App">
        <Dashboard />
        <Display />
      </div>
    );
  }
}

export default App;
