import React, {Component} from 'react'

import App from '../App.js'


import '../styles/SignIn.css'
import SignUp from './SignUp.js';
import Button from 'semantic-ui-react';

class SignIn extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      signed: false,
      notregistered: false,
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

  handleSignUpClicked = () => {
    this.setState({
      notregistered: true,      
      signed: true,
    }); 
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

              <div
                onClick={this.handleSignUpClicked}>
                    <p> Haven't got an account? </p>  
              </div> 

              <button
                className="signin-button"
                type="submit">Sign In</button>
            </div>
          </form>
        </div>
      );
    }
    else if (this.state.notregistered == true){
      return (
        <div className="signin">
          <SignUp/>
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
