import React, {Component} from 'react';
import './App.css';

import Header from './components/Header.js'
import Body from './components/Body.js'
import SignIn from './pages/SignIn.js'

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
              img: '../drawable/harrypotter.jpeg'},
            {
              id: 2,
              name: "Sherlock Holmes",
              author: 'A.K. Doyle',
              genre: 'detective',
              img: '../drawable/sherlock.jpg' },
            {
              id: 3,
              name: "Abay",
              author: 'Mukhtar Auezov',
              genre: 'detective',
              img: '../drawable/abay.jpg'},
        ],

      username: 'Miras',
      password: 'password',

      carts: [
            { id: 1,
              name: "Harry Potter",
              author: 'J.K Rowling',
              genre: 'fantasy',
              img: '../drawable/harrypotter.jpeg'},],
      feeds: [],
      nextID: 2,
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
    let items = this.state.books;
    items.push ({id: book.id, name: book.name, });
    this.setState ({books: items});

    items = this.state.feeds;
    items.push ({id: book.id, name: book.name, });
    this.setState ({feed: items});
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
        <div> <Header/> </div>
        <div> <Body
                  onCartItemAdded={this.handleCartItemAdded}
                  onBookItemAdded={this.handleBookItemAdded}
                  onCartItemDeleted={this.handleCartItemDeleted}
                  carts={this.state.carts}
                  books={this.state.books}
                  feeds={this.state.feeds}
                /> </div>
      </div>
    );
  }
}


export default App;
