import React, {Component} from 'react'

import Book from '../components/Book.js'

import Challenge from '../components/Challenge.js'
import Recommendations from '../components/Recommendations.js'
import '../styles/Home.css'

import {Modal, Icon, Button, Header} from 'semantic-ui-react'

class Home extends React.Component {

  constructor(props) {
    super (props);

    this.state = { modalOpen: false }
  }


  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

   handleCartItemAdded = (cart) => {
    this.props.onCartItemAdded(cart);
  }

  handleModalRecommendations = () => {
    this.setState({modalOpen: true});
  }

  render() {
    const feedsAPI = this.props.feeds.map((book) => {
      return(
          <div class="home-element">
            <h3> New Added Book!</h3>
            <Book book={book} type="book" onCartItemAdded={this.handleCartItemAdded}/>
          </div>
        );
    });

    return (
      <div className="home"><div></div>
        <div className="home-side-bar">
          <Recommendations onModalRecommendations={this.handleModalRecommendations}/>
          <Challenge onModalRecommendations={this.handleModalRecommendations}/>
        </div>

        <ul>{feedsAPI}</ul>

        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
          className="modal"
        >
        <Modal.Content>
          <h3>Done</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    );
  }

}

export default Home;
