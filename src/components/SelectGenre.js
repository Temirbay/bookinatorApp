import React, {Component} from 'react'

import '../styles/SelectGenre.css'

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
        <button onClick={this.handleClickAll}> All </button>
        <button onClick={this.handleClickFantasy}> Fantasy</button>
        <button onClick={this.handleClickDetective}> Detective</button>
      </div>
    );
  }

}

export default SelectGenre;
