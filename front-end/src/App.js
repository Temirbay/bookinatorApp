import React, {Component} from 'react';
import './App.css';

import Header from './components/Header.js'
import Body from './components/Body.js'
import SignIn from './pages/SignIn.js'

import {Button} from 'semantic-ui-react'

import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'



class App extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      books: [
            { id: 1,
              name: "Harry Potter",
              author: 'J.K Rowling',
              genre: 'fantasy',
              img: 'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg'},
            {
              id: 2,
              name: "Sherlock Holmes",
              author: 'A.K. Doyle',
              genre: 'detective',
              img: 'https://images-na.ssl-images-amazon.com/images/I/51dffso4JfL._SX357_BO1,204,203,200_.jpg' },
            {
              id: 3,
              name: "Abay",
              author: 'Mukhtar Auezov',
              genre: 'detective',
              img: 'http://adebiportal.kz/images/w170-h220-cct-si/upload/iblock/3ae/3ae4a3897f409d28af79d414be178d53.jpg'},
        ],

      username: 'Miras',
      password: 'password',

      carts: [
            { id: 1,
              name: "Harry Potter",
              author: 'J.K Rowling',
              genre: 'fantasy',
              img: 'https://hpmedia.bloomsbury.com/rep/s/9781408855898_309038.jpeg'},],
      feeds: [
            {
              id: 3,
              name: "Abay",
              author: 'Mukhtar Auezov',
              genre: 'detective',
              img: 'http://adebiportal.kz/images/w170-h220-cct-si/upload/iblock/3ae/3ae4a3897f409d28af79d414be178d53.jpg'}],
      nextID: 2,
      nextIDBooks: 4,
    }

    this.state.username = this.props.username;
    this.state.password = this.props.password;

    console.log (this.state.username);
    console.log (this.state.password);
  }

  handleCartItemAdded = (cart) => {
    let items = this.state.carts;
    let array = this.state.carts.filter((cur, index) => cur.name.toLowerCase() == cart.name.toLowerCase());
    if (array.length == 0) {
      cart.id = this.state.nextID++;
      items.push (cart);
    }
    this.setState ({carts: items});
  }

  handleCartItemDeleted = (id) => {
    this.setState({
        carts: this.state.carts.filter((cart, index) => cart.id !== id)
      });
  }

  handleBookItemAdded = (book) => {

    console.log("asdsad");

    let items = this.state.books;
    items.push ({id: this.state.nextIDBooks++, name: book.name, author: book.author, genre: book.genre});
    this.setState ({books: items});

    items = this.state.feeds;
    items.push ({id: this.state.nextIDBooks++, name: book.name, author: book.author, genre: book.genre });
    this.setState ({feed: items});
  }

  handleChangeUsername (text) {
    this.setState ({username: text});
  }

  handleChangePassword (text) {
    this.setState ({password: text});
  }

  render() {
    if (!this.state.username || !this.state.password) {
      return (
        <div>
          <SignIn/>
        </div>
      );
    }
    return (
      <div className="App">
        <div> <Header username={this.state.username}/> </div>
        <div> <Body
                  onCartItemAdded={this.handleCartItemAdded}
                  onBookItemAdded={this.handleBookItemAdded}
                  onCartItemDeleted={this.handleCartItemDeleted}
                  onChangeUsername={this.handleChangeUsername}
                  onChangePassword={this.handleChangePassword}
                  carts={this.state.carts}
                  books={this.state.books}
                  feeds={this.state.feeds}
                  username={this.state.username}
                  password={this.state.password}
                /> </div>
      </div>
    );
  }
}


export default App;
