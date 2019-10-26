import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

import Simulation from './components/Simulation';
import Number from './components/Number';

const balls = 
{
  red: 5,
  blue: 7,
  green: 3,
  purple: 6
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
