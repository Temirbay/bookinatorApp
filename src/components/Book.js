import React, {Component} from 'react'

import '../styles/Book.css'

class Book extends React.Component {

  constructor(props) {
    super(props);

  }

  handleClick = () => {
    if (this.props.type == "book")
      this.props.onCartItemAdded (this.props.book);
    else
      this.props.onCartItemDeleted(this.props.book.id);
  }

  render() {
    if (this.props.type == "cart") {
        return(
          <div className="book">
              <img className="book-img" src={this.props.book.img} alt="IMAGE"/>
              <div className="book-container">
                <h4>{this.props.book.name}</h4>
                <h5>By {this.props.book.author}</h5>
                <h5>{this.props.book.genre}</h5>
                <button className="book-button-delete" onClick={this.handleClick}> Delete</button>
              </div>
          </div>
        );
    }

    else {
        return(
          <div className="book">
              <img className="book-img" src={this.props.book.img} alt="IMAGE"/>
              <div className="book-container">
                <h4>{this.props.book.name}</h4>
                <h5>By {this.props.book.author}</h5>
                <h5>{this.props.book.genre}</h5>
                <button className="book-button-add" onClick={this.handleClick}> Want to Read</button>
              </div>
          </div>
        );
    }
  }
}

export default Book;
