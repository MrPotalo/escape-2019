import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

import Simulation from './components/Simulation';

const balls = 
{
  red: 6,
  blue: 7,
  green: 8,
  purple: 3,
  orange: 12,
  black: 23
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{position: 'relative'}}>
          <Simulation balls={balls} />
        </div>
      </div>
    );
  }

}

export default App;
