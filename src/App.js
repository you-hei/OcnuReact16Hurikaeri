import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React15NoYatsu from "./vasion-betsu/React15NoYatsu";
import React16NoYatsu from "./vasion-betsu/React160NoYatsu";
import React162NoYatsu from "./vasion-betsu/React162NoYatsu";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<React15NoYatsu />*/}
        {/*<React16NoYatsu />*/}
        <React162NoYatsu />
      </div>
    );
  }
}

export default App;
