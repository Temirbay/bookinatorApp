import React, {Component} from 'react'

import {Button, Image, Rating} from 'semantic-ui-react'


import '../styles/Book.css'

import {Modal, Icon} from 'semantic-ui-react'

class Book extends React.Component {

  constructor(props) {
    super(props);

    this.state = { modalOpen: false }
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })


  handleClick = () => {
    if (this.props.type == "book")
      this.props.onCartItemAdded (this.props.book);
    else
      this.props.onCartItemDeleted(this.props.book.id);

    this.setState({modalOpen: true});
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
                <Rating icon='star' defaultRating={3} maxRating={4} />

                <Button negative onClick={this.handleClick}> Delete</Button>
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
                <Rating icon='star' defaultRating={3} maxRating={4} />
                <Button positive onClick={this.handleClick}> Want to Read</Button>
              </div>
          </div>
        );
    }
  }
}

export default Book;
