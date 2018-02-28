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
        <li><a className="menu-bar-element" href="/">Home</a></li>
        <li><a className="menu-bar-element" href='/catalog'>Catalog</a></li>
        <li><a className="menu-bar-element" href='/mybooks'>My Books</a></li>
        <li><a className="menu-bar-element" href="'/discussions'">Discussions</a></li>
      </ul>
      </div>
    );
  }
}

export default Menu;
