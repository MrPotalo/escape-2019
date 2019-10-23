import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

import Lightswitch from './components/Lightswitch';
import Number from './components/Number';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lights: false
    };
  }

  onLightClick = (val) => {
    this.setState({ lights: val });
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.lights ? 'black' : 'white'}}>
        <Lightswitch onChange={this.onLightClick} />
        <div style={{display: 'flex'}}>
          {_.map(_.range(0, 10), (num) => 
          <Number
            key={num}
            value={num}
          seed="yo" />)}
        </div>
      </div>
    );
  }

}

export default App;
