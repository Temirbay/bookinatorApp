import React, {Component} from 'react'

import '../styles/SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
    }

    this.handleInputChange = this.handleInputChange.bind (this);
  }

  handleInputChange (e) {
    this.setState({inputText: e.target.value});
  }

  handleIconClick () {
      console.log ("Clicked");
  }

  render() {
    return (
      <div className="search-bar">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>

        <div className='search-bar-container'>
          <span className="search-bar-container-icon">
            <i
              onClick={this.handleIconClick}
              className="fa fa-search">
            </i>
          </span>
          <input
            className="search-bar-container-input"
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputChange}
            placeholder="Enter name of the book"/>
        </div>

      </div>
    );
  }

}

export default SearchBar;
