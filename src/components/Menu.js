import React, {Component} from 'react'


import { BrowserRouter as Hashrouter, Navlink, Route, Link } from 'react-router-dom'

import Home from '../pages/Home.js'
import Discussions from '../pages/Discussions.js'

import '../styles/Menu.css'

class Menu extends React.Component {

  constructor(props) {
    super (props);
  }


  render() {
    return (
      <div className="menu">
       <ul className="menu-bar">
        <li><Link className="menu-bar-element" to='/'>  <a href="">Home</a> </Link></li>
        <li><Link className="menu-bar-element" to='/catalog'> <a href="">Catalog</a> </Link></li>
        <li><Link className="menu-bar-element" to='/mybooks'> <a href="">My Books</a> </Link></li>
        <li><Link className="menu-bar-element" to='/discussions'> <a href="">Discussions</a> </Link></li>
      </ul>
      </div>
    );
  }
}

export default Menu;
