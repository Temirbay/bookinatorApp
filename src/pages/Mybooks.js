import React, {Component} from 'react'

import Book from '../components/Book.js'

import '../styles/Mybooks.css'

class Mybooks extends React.Component {

  constructor(props) {
    super (props);
  }


  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }


  render() {

    console.log (this.props.carts);

    const cartsAPI = this.props.carts.map((book, index) => {
      return(
          <div key={index}>
            <Book book={book} type="cart" onCartItemDeleted={this.handleCartItemDeleted}/>
          </div>
        );
    });

    return (
      <div className="mybooks">
        {cartsAPI}
      </div>
    );
  }
}

export default Mybooks;
