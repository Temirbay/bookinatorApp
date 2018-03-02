import React, {Component} from 'react'

import {Input, Button} from 'semantic-ui-react'

class AddBookForm extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
        name: '',
        author: '',
        genre: '',
    }
  }

  handleNameChange =(e)=> {
    this.setState ({name: e.target.value});
  }

  handleAuthorChange =(e)=> {
    this.setState ({author: e.target.value});
  }

  handleGenreChange =(e)=> {
    this.setState ({genre: e.target.value});
  }

  handleClick = () => {
      this.props.onBookItemAdded ({
        name: this.state.name,
        author: this.state.author,
        genre: this.state.genre,
      })
  }


  render() {
    return (
      <div className="add-book-form">
           <h1>Add Book</h1>

        <div className="profile-container">
          <div className="profile-label-container">
            <label className="profile-label"> Name</label>
            <label className="profile-label"> Author</label>
            <label className="profile-label"> Genre</label>
          </div>

          <div className="profile-text-container">
            <Input focus type="text" value={this.state.name} onChange={this.handleNameChange}/>
            <Input focus type="text" value={this.state.author}  onChange={this.handleAuthorChange}/>
            <Input focus type="text" value={this.state.genre}  onChange={this.handleGenreChange}/>
          </div>

        </div>

          <Button positive onClick={this.handleClick}>Add</Button>
      </div>
    );
  }

}

export default AddBookForm;
