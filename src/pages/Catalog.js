import React, {Component} from 'react'

import Book from '../components/Book.js'
import SelectGenre from '../components/SelectGenre.js'
import SearchBar from '../components/SearchBar.js'

import '../styles/Catalog.css'

import {Pagination} from 'semantic-ui-react'

class Catalog extends React.Component {

  constructor(props) {
    super (props);

    this.state = {
      books: [],
    }

    this.state.books = this.props.books;
  }

  handleCartItemAdded = (cart) => {
    this.props.onCartItemAdded(cart);
  }

  handleCartItemDeleted = (id) => {
    this.props.onCartItemDeleted(id);
  }

  handleGenreItemSelected = (type) => {
    console.log (type);
    if (type == "all") {
      this.setState({books: this.props.books});
    }
    else {
      let items = this.props.books.filter (item => {
        return item.genre == type
      })
      this.setState({books: items});
    }
  }

  handleBookSearched = (text) => {
    let newArray = this.props.books.filter ( item => {
      return item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
             item.author.toLowerCase().indexOf(text.toLowerCase()) >= 0
    })

    this.setState ({
      books: newArray
    })
  }

  render() {
    const booksAPI = this.state.books.map((book, index) => {
      return(
          <div key={index}>
            <Book book={book} type="book" onCartItemAdded={this.handleCartItemAdded}/>
          </div>
        );
    });

    return (
      <div className="catalog">
        <div className="catalog-container">
          <div className="catalog-side-bar">
            <SearchBar onBookSearched={this.handleBookSearched}/>
            <SelectGenre onGenreItemSelected={this.handleGenreItemSelected}/>
          </div>

          <ul className="catalog-list"> {booksAPI} </ul>
        </div>

      </div>
    );
  }
}

export default Catalog;
