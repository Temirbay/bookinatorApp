import React, {Component} from 'react'

import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home.js'
import Discussions from '../pages/Discussions.js'
import Catalog from '../pages/Catalog.js'
import Mybooks from '../pages/Mybooks.js'

import '../styles/Body.css'

class Body extends React.Component {

  constructor(props) {
    super (props);

    this.state = {

    }
  }



  handleCartItemAdded = (cart) => {
    this.props.onCartItemAdded(cart);
  }

  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }

  render() {

      return(
        <div className="body">
          <Switch>
            <Route exact path='/' render={props => <Home
                feeds={this.props.feeds}/>}/>

            <Route path='/catalog' render={props => <Catalog
                onCartItemAdded={this.handleCartItemAdded}
                onCartItemDeleted={this.handleCartItemDeleted}
                books={this.props.books}
                carts={this.props.carts}/>}
                />

            <Route path='/mybooks' render={props => <Mybooks
                onCartItemDeleted={this.handleCartItemDeleted}
                carts={this.props.carts}/>}/>

            <Route path='/discussions' render={props => <Discussions/>}/>
          </Switch>
        </div>
      );
  }

}

export default Body;
