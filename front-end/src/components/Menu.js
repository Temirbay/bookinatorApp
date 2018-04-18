import React, {Component} from 'react'


import { BrowserRouter as Hashrouter, Navlink, Route, Link } from 'react-router-dom'

import Home from '../pages/Home.js'
import Discussions from '../pages/Discussions.js'

import '../styles/Menu.css'

import { NavLink } from 'react-router-dom'

class Menu extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      classNameHome: 'menu-bar-element-active',
      classNameCatalog: 'menu-bar-element',
      classNameMyBooks: 'menu-bar-element',
      classNameDiscussions: 'menu-bar-element',
    }
  }

  handleClickHome = () => {
      this.setState({
        classNameHome: 'menu-bar-element-active',
        classNameCatalog: 'menu-bar-element',
        classNameMyBooks: 'menu-bar-element',
        classNameDiscussions: 'menu-bar-element',
      });
  }

  handleClickCatalog = () => {
    this.setState({
      classNameHome: 'menu-bar-element',
      classNameCatalog: 'menu-bar-element-active',
      classNameMyBooks: 'menu-bar-element',
      classNameDiscussions: 'menu-bar-element',
    });
}

handleClickMyBooks = () => {
  this.setState({
    classNameHome: 'menu-bar-element',
    classNameCatalog: 'menu-bar-element',
    classNameMyBooks: 'menu-bar-element-active',
    classNameDiscussions: 'menu-bar-element',
  });
}

handleClickDiscussions = () => {
  this.setState({
    classNameHome: 'menu-bar-element',
    classNameCatalog: 'menu-bar-element',
    classNameMyBooks: 'menu-bar-element',
    classNameDiscussions: 'menu-bar-element-active',
  });
}


  render() {
    return (
      <div className="menu">
       <ul className="menu-bar">
        <li>
          <NavLink 
            className={this.state.classNameHome}
            to={'/'}
            onClick={this.handleClickHome}>
              Home
            </NavLink>
        </li>
        
        <li>
          <NavLink 
            className={this.state.classNameCatalog} 
            to={'/catalog'}
            onClick={this.handleClickCatalog}>
              Catalog
            </NavLink>
        </li>
        
        <li>
          <NavLink 
            className={this.state.classNameMyBooks} 
            to={'/mybooks'}
            onClick={this.handleClickMyBooks}>
              My Books
            </NavLink>
        </li>

        <li>
          <NavLink 
            className={this.state.classNameDiscussions} 
            to={'/discussions'}
            onClick={this.handleClickDiscussions}>
              Discussions
            </NavLink>
        </li>
      </ul>
      </div>
    );
  }
}

export default Menu;
