import React, {Component} from 'react'

import '../styles/Recommendations.css'

import book from '../drawable/book.png'

import {Button} from 'semantic-ui-react'

class Recommendations extends React.Component {

  constructor (props) {
    super (props);

  }

  handleClick = () => {
    this.props.onModalRecommendations ();
  }

  render() {
    return (
      <div className="recommendations">
        <h4>Recommendations</h4>
        <div className="container">
          <img className="container-image" src={book} alt=""/>
          <label className="container-question">What do you want to read?</label>
        </div>
        <Button onClick={this.handleClick}> Try this</Button>
      </div>
    );
  }

}

export default Recommendations;
