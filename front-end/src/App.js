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
      users: [],
      userId: 0,
      username: "",
      password: "",

      carts: [],
      feeds: [],
      nextID: 1,
      nextIDBooks: 1,
    }

    this.state.username = this.props.username;
    this.state.password = this.props.password;

  }

  componentDidMount() {
    client.getBooks((data) => {
      this.setState({items: data});
      console.log(this.stateitems)
      this.setState({nextID: this.state.items.length+1})


    console.log (this.state.username);
    if (!this.state.username) return;

    client.getUsers((data) => {
      this.setState({users: data});

      let hasUser = false;
      this.state.users.map((user) => {
        if (user.username == this.state.username){
          this.setState({userId: user.id});
          console.log (user)
          hasUser = true;
        }
      })
      
      if (hasUser == false){
          const data = {
            "username": this.state.username,
            "password": this.state.password,
            "name": "",
            "surname": ""
          }

          client.createUser(data, (user) => {
              if (user) alert("Created!");
              
              let temp = this.state.users;
              temp.push(data);
              this.setState({
                userId: this.state.users.length-1,
                users: temp,
              });

              console.log(this.state.userId);
            });  
      }

      console.log(this.state.username);  
      console.log(this.state.userId);

      client.getMyBooks(this.state.userId, (data) => {
          let temp = this.state.carts;
          console.log (data)
          console.log (temp.length)
          data.map ((item) => {
            this.state.items.map((book) => {
              if (book.id == item.book_id)
                  temp.push(book)
            });
          });
          this.setState({carts: temp, nextIDBooks: temp.length-1});
      });
    });
    });


  }

  handleCartItemAdded = (cart) => {
    let temp = this.state.carts;
    let array = this.state.carts.filter((cur, index) => 
      cur.name.toLowerCase() == cart.name.toLowerCase());

    if (array.length == 0) {

      let book_id = 1;
      this.state.items.map((book) => {
          if (book.name == cart.name) {
            book_id = book.id
          }
      })
      
      const data = {
        "user_id": this.state.userId,
        "book_id": book_id
      }
      
      

      console.log (data);

      client.createTuple(this.state.userId, data, (tuple) => {
        if (tuple) alert("Added!");
    
        let carts = this.state.carts;
        cart.id = this.state.carts.length+1;
        temp.push (cart);
        this.setState ({carts: temp});
      });  

    }
  }

  handleCartItemDeleted = (id) => {
    console.log (id)
    console.log (this.state.carts);

    let curCart = this.state.carts[0];
    this.state.carts.map ((cart) => {
        if (cart.id == id)
          curCart = cart;
    });

    let curBook;
    let temp3 = this.state.items;

    temp3.map((book) => {
      if (book.name == curCart.name) {
          curBook = book;
      }
    });

    console.log (this.state.items)
    console.log (curCart);
    console.log (curBook);

    client.deleteTuple(this.state.userId, curBook.id, (tuple) => {
      if (tuple)
        alert("Deleted!");
        let temp = this.state.carts.filter((cart, index) => cart.id !== id)
        this.setState({
          carts: temp
        });
        
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
    
    
    client.createBook(data, (book) => {
      if (book)
        alert('Created!');
        let temp = this.state.items;
        temp.push(data)

        let temp2 = this.state.feeds;
        temp2.push(data)

        this.setState({items: temp, feeds: temp2});
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
