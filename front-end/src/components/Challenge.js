import React, {Component} from 'react'

import '../styles/Challenge.css'

import image from '../drawable/challenge.png'

import {Button} from 'semantic-ui-react'

class Challenge extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      cnt: 0,
    }
  }

  handleChange = (e) =>{
    this.setState({cnt: e.target.value});
  }

  handleClick = () => {
    this.props.onModalRecommendations();
  }

  render() {
    return (
      <div className="challenge">
        <h4>Reading Challenge!</h4>
        <h5> Challenge yourself to read more books this year</h5>
        <div className="challenge-container">
          <img className="challenge-image"src={image} alt=""/>
          <div className="challenge-form">
            <h5>I want to read</h5>
            <input
              className="challenge-input"
              onChange={this.handleChange}
              type="number"
              min="0"
              max="20"
              step="1"
              value={this.state.cnt}/>
            <h5>books in 2018</h5>
            <Button onClick={this.handleClick}>Start</Button>
          </div>
        </div>
      </div>
    );
  }

}

export default Challenge;
