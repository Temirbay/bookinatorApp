import React, {Component} from 'react'


import { BrowserRouter as Hashrouter, Navlink, Route, Link } from 'react-router-dom'

import Home from '../pages/Home.js'
import Discussions from '../pages/Discussions.js'

import '../styles/Menu.css'

import { NavLink } from 'react-router-dom'

class Menu extends React.Component {

  constructor(props) {
    super (props);
  }


  render() {
    return (
      <div className="menu">
       <ul className="menu-bar">
        <li><NavLink className="menu-bar-element" to={'/'}>Home</NavLink></li>
        <li><NavLink className="menu-bar-element" to={'/catalog'}>Catalog</NavLink></li>
        <li><NavLink className="menu-bar-element" to={'/mybooks'}>My Books</NavLink></li>
        <li><NavLink className="menu-bar-element" to={'/discussions'}>Discussions</NavLink></li>
      </ul>
      </div>
    );
  }
}

export default Menu;
