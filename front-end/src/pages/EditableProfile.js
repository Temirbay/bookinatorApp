import React, {Component} from 'react'

import Profile from '../components/Profile.js'
import ProfileForm from '../components/ProfileForm.js'

class EditableProfile extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isFormOpen: false,
      name: 'Miras',
      surname: 'Temirbay',
      username: this.props.username,
      password: this.props.password,
    }
  }

  handleFormSubmit = (user) => {
    this.setState({
      isFormOpen: false,
      name: user.name,
      surname: user.surname,
      username: user.username,
      password: user.password,
    });

    if (this.state.password != this.props.password)
      this.props.onChangePassword(user.password);

    if (this.state.username != this.props.username)
      this.props.onChangeUsername (user.username);

  }

  handleChangeToForm = () => {
    this.setState({isFormOpen: true});
  }

  render() {
    if (this.state.isFormOpen == false) {
      return (
        <div className="editable-profile">
          <Profile
            onChangeToForm={this.handleChangeToForm}
            name={this.state.name}
            surname={this.state.surname}
            username={this.state.username}
            password={this.state.password}/>
        </div>
      );
    }

    else {
      return (
        <div className="editable-profile">
          <ProfileForm
            onFormSubmit={this.handleFormSubmit}
            name={this.state.name}
            surname={this.state.surname}
            username={this.props.username}
            password={this.props.password}/>
        </div>
      );
    }
  }
}

export default EditableProfile;
