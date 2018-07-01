import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Budget from './budget.js';


class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="page-header">
          <h1>This is Billy, the app!</h1>
        </div>
        <Budget value="1000" />
      </div>
    );
  }
}

export default App;
