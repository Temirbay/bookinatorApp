import React, {Component} from 'react';
import './App.css';

import Header from './components/Header.js'
import Body from './components/Body.js'

class App extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      books: [
            { id: 1,
              name: "Harry Potter",
              author: 'J.K Rowling',
              genre: 'fantasy',
              img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjc36KGxMbZAhUK3SwKHZRjA6sQjRx6BAgAEAY&url=https%3A%2F%2Fwww.amazon.com%2FHarry-Potter-Chamber-Secrets-Rowling%2Fdp%2F0439064872&psig=AOvVaw1mBqDaHQqThvpXc-h7DCe1&ust=1519835889384771'},
            {
              id: 2,
              name: "Sherlock Holmes",
              author: 'A.K. Doyle',
              genre: 'detective',
              img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiDqrWuxMbZAhXE_iwKHQs8C8gQjRx6BAgAEAY&url=https%3A%2F%2Fwww.amazon.com%2FOriginal-Illustrated-Sherlock-Holmes%2Fdp%2F0890090572&psig=AOvVaw3-KjT450WC-kv4KD7sMmf-&ust=1519835973528763' },
            {
              id: 3,
              name: "Abay",
              author: 'Mukhtar Auezov',
              genre: 'detective',
              img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj52cvMxMbZAhXCDiwKHWvYDO4QjRx6BAgAEAY&url=https%3A%2F%2Fwww.livelib.ru%2Fbook%2F1000558524-put-abaya-romanepopeya-v-dvuh-tomah-tom-1-muhtar-auezov&psig=AOvVaw2tpSHVcK6AARr4Nj1SQbDL&ust=1519836027811853'},
        ],

      username: '',
      password: '',

      carts: [],
      feeds: [],
      nextID: 2,
    }
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
