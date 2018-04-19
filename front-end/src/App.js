import React, {Component} from 'react';
import './App.css';

import client from './client' 

import Header from './components/Header.js'
import Body from './components/Body.js'
import SignIn from './pages/SignIn.js'

class App extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      items: [],

      username: 'Miras',
      password: 'password',

      carts: [],
      feeds: [],
      nextID: 0,
      nextIDBooks: 4,
    }

    this.state.username = this.props.username;
    this.state.password = this.props.password;

    console.log (this.state.username);
    console.log (this.state.password);
  }

  componentDidMount() {
    client.getBooks((books) => {
      this.setState({
        items: books
      });
      console.log(this.stateitems)
      this.setState({nextID: this.state.items.length+1})
    });
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
    const data = {
      'id': this.state.nextID++,
      'name': book.name,
      'author': book.author,
      'genre': book.genre,
      'img': book.img,
      'published_at': new Date().toISOString()
    }
    
    let temp = this.state.items;
    temp.push(data)

    let temp2 = this.state.feeds;
    temp2.push(data)

    this.setState({items: temp, feeds: temp2});
    
    client.createBook(data, (book) => {
      if (book)
        alert('Created!');
    });  
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
                  books={this.state.items}
                  feeds={this.state.feeds}
                  username={this.state.username}
                  password={this.state.password}
                /> </div>
      </div>
    );
  }
}


export default App;
