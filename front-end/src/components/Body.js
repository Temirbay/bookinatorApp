import React, {Component} from 'react'

import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home.js'
import Discussions from '../pages/Discussions.js'
import Catalog from '../pages/Catalog.js'
import Mybooks from '../pages/Mybooks.js'
import SignIn from '../pages/SignIn.js'
import EditableProfile from '../pages/EditableProfile.js'
import AddBookForm from '../pages/AddBookForm.js'

import '../styles/Body.css'

class Body extends React.Component {

  constructor(props) {
    super (props);
  }

  handleCartItemAdded = (cart) => {
    this.props.onCartItemAdded(cart);
  }

  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }

  handleChangeUsername =(text) =>{
    console.log (text);
    this.props.onChangeUsername(text);
  }

  handleChangePassword =(text) =>{
    this.props.onChangePassword(text);
  }

  handleBookItemAdded = (book) =>{
    console.log (book);
    this.props.onBookItemAdded(book);
  }

  render() {

      return(
        <div className="body">
            <Switch>
            <Route exact path='/' render={props =>
              <Home
                onCartItemAdded={this.handleCartItemAdded}
                feeds={this.props.feeds}/>}/>

            <Route path='/catalog' render={props =>
              <Catalog
                onCartItemAdded={this.handleCartItemAdded}
                onCartItemDeleted={this.handleCartItemDeleted}
                books={this.props.books}
                carts={this.props.carts}/>}
                />

            <Route path='/mybooks' render={props =>
              <Mybooks
                onCartItemDeleted={this.handleCartItemDeleted}
                carts={this.props.carts}/>}/>

            <Route path='/discussions' render={props =>
              <Discussions
              username={this.props.username}/>}/>


            <Route path='/addbook' render={props =>
              <AddBookForm
                onBookItemAdded={this.handleBookItemAdded}/>}/>

            <Route path='/profile' render={props =>
              <EditableProfile
                username={this.props.username}
                password={this.props.password}
                onChangeUsername={this.handleChangeUsername}
                onChangePassword={this.handleChangePassword}/>}/>

          </Switch>

        </div>
      );
  }

}

export default Body;
