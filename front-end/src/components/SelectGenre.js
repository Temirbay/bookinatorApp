import React, {Component} from 'react'

import '../styles/SelectGenre.css'

import {Button} from 'semantic-ui-react'

class SelectGenre extends React.Component {

  constructor (props) {
    super (props);
  }

  handleClickAll = () => {
    this.props.onGenreItemSelected ("all");
  }


  handleClickFantasy = () => {
    this.props.onGenreItemSelected ("fantasy");
  }

  handleClickDetective = () => {
    this.props.onGenreItemSelected ("detective");
  }

  render() {
    return (
      <div className="select-genre">
        <h4>Select Genre</h4>
        <Button.Group vertical>
          <Button onClick={this.handleClickAll}> All </Button>
          <Button onClick={this.handleClickFantasy}> Fantasy</Button>
          <Button onClick={this.handleClickDetective}> Detective</Button>
        </Button.Group>


      </div>
    );
  }

}

export default SelectGenre;
