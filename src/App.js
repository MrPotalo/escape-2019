import React from 'react';
import logo from './logo.svg';
import './App.css';

import Lightswitch from './components/Lightswitch';

class App extends React.Component {

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
      </div>
    );
  }

}

export default App;
