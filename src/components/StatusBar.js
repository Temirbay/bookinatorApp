import React, {Component} from 'react'

import user from '../drawable/user.png'
import NavigationMenu from './NavigationMenu'

import '../styles/StatusBar.css'

class StatusBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: 'false',
    }
  }

  handleClick = () => {
    if (this.state.visibility == 'false'){
      this.setState({
        visibility : 'true',
      });
      console.log(this.state.visibility);
    }
    else{
      this.setState({
        visibility : 'false',
      });
      console.log(this.state.visibility);
    }
  }

  handleClose = () => {
    this.setState({visibility: 'false'});
  }
  render() {
    return (
      <div className="status-bar">
        <img className="status-bar-img" src={user} alt={"user"}  onClick={this.handleClick}/>
        <NavigationMenu
          isOpen={this.state.visibility}
          username={this.props.username}
          onClose={this.handleClose}/>
      </div>
    );
  }
}

export default StatusBar;
