import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Budget from './budget.js';
import Entries from './entries.js';

const entries = [
  {
    id: 4,
    amount: 26.23,
    description: "Intelligent Iron Bag",
    category: "utilities",
    date: "2018-05-26",
    created_at: "2018-06-04T19:08:28.090Z",
    updated_at: "2018-06-04T19:08:28.090Z",
    user_id: 1,
    entry_type: "expense"
  },
  {
    id: 5,
    amount: 69.89,
    description: "Aerodynamic Steel Knife",
    category: "health_care",
    date: "2018-05-31",
    created_at: "2018-06-04T19:08:28.098Z",
    updated_at: "2018-06-04T19:08:28.098Z",
    user_id: 1,
    entry_type: "expense"
  }
];

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="page-header">
          <h1>This is Billy, the app!</h1>
        </div>
        <Budget availableBudget={1000} />
        <Entries {...entries} />
      </div>
    );
  }
}

export default App;
