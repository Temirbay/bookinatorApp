import React, {Component} from 'react'

import '../styles/Header.css'

import Menu from './Menu.js'
import SearchBar from './SearchBar.js'
import StatusBar from './StatusBar.js'

import logo from '../drawable/logo.jpg'

class Header extends React.Component {

  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt={"logo"}/>
        <div className="menu">  <Menu/> </div>
        <div className="status-bar">  <StatusBar username={this.props.username}/> </div>
      </div>
    );
  }

}

export default Header;
