import React, {Component} from 'react'

import App from '../App.js'


import '../styles/SignIn.css'

class SignIn extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      signed: false,
      username: '',
      password: '',
    }
  }

  handleUsernameChange = (e) => {
      this.setState({username: e.target.value});
  }


  handlePasswordChange = (e) => {
      this.setState({password: e.target.value});
  }

  handleSign = () => {
      this.setState ({signed: true});
  }

  render() {
    if (this.state.signed == false) {
      return (
        <div className="signin">
          <form
            className="signin-form"
            onSubmit={this.handleSign}>

            <div className="signin-container">
              <h1>Sign In</h1>

              <div className="signin-username">
                <label><b>Username</b></label>
                <input
                  className="signin-input"
                  type="text"
                  placeholder="Enter username"
                  onChange={this.handleUsernameChange}
                  required/>
              </div>

              <div className="signin-password">
                <label><b>Password</b></label>
                <input
                  className="signin-input"
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handlePasswordChange}
                  required/>
              </div>

              <button
                className="signin-button"
                type="submit">Sign In</button>
            </div>
          </form>
        </div>
      );
    }
    else {
      return (
        <div className="signin">
          <App username={this.state.username} password={this.state.password}/>
        </div>
      );
    }

  }

}

export default SignIn;
