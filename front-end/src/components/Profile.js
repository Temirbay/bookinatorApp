import React, {Component} from 'react'

import '../styles/Profile.css'

import {Button} from 'semantic-ui-react'

class Profile extends React.Component {

  constructor(props){
    super(props);
  }

  handleClick = () => {
    this.props.onChangeToForm();
  }

  render() {
    return (
      <div className="profile">
        <h1>Profile</h1>

        <img className="profile-img" src="https://labelstech.com/wp-content/uploads/2017/02/47199326-profile-pictures.png" alt="Image"/>
        <div className="profile-container">
          <div className="profile-label-container">
            <label className="profile-label"> Name</label>
            <label className="profile-label"> Surname</label>
            <label className="profile-label"> Username</label>
          </div>

          <div className="profile-text-container">
            <label className="profile-text"> {this.props.name}</label>
            <label className="profile-text"> {this.props.surname}</label>
            <label className="profile-text"> {this.props.username}</label>
          </div>

        </div>
        <Button color='blue' onClick={this.handleClick}> Edit</Button>

      </div>
    );
  }
}

export default Profile;
