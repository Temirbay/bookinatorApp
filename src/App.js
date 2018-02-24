import React, {Component} from 'react';
import './App.css';

import Header from './components/Header.js'
import Body from './components/Body.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>  <Header/> </div>
        <div> <Body/> </div>
      </div>
    );
  }
}

export default App;
