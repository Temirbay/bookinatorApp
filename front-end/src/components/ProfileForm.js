import React, {Component} from 'react'


import '../styles/ProfileForm.css'

import {Input, Button} from 'semantic-ui-react'

class ProfileForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      name: this.props.name || '',
      surname: this.props.surname || '',
      username: this.props.username || '',
      password: this.props.password || '',
    }
  }

  handleClick = () => {
    this.props.onFormSubmit({
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      password: this.state.password,
    });
  }

  handleClickCancel = () => {
    this.props.onFormSubmit({
      name: this.props.name,
      surname: this.props.surname,
      username: this.props.username,
      password: this.props.password,
    });;
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }


  handleSurnameChange = (e) => {
    this.setState({surname: e.target.value});
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="profile-form">
        <h1>Profile</h1>

        <div className="profile-container">
          <div className="profile-label-container">
            <label className="profile-label"> Name</label>
            <label className="profile-label"> Surname</label>
            <label className="profile-label"> Username</label>
            <label className="profile-label"> Password</label>
          </div>

          <div className="profile-text-container">
            <Input focus type="text" value={this.state.name} onChange={this.handleNameChange}/>
            <Input focus type="text" value={this.state.surname}  onChange={this.handleSurnameChange}/>
            <Input focus type="text" value={this.state.username}  onChange={this.handleUsernameChange}/>
            <Input focus type="text" value={this.state.password}  onChange={this.handlePasswordChange}/>
          </div>

        </div>

        <Button.Group>
          <Button onClick={this.handleClickCancel}>Cancel</Button>
          <Button.Or />
          <Button positive onClick={this.handleClick}>Save</Button>
        </Button.Group>


      </div>
    );
  }
}

export default ProfileForm;
