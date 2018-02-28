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

  render() {
    return (
      <div className="status-bar" onClick={this.handleClick}  >
        <img className="user" src={user} alt={"user"}/>
        <div className="navigation-menu-component">
          <NavigationMenu isOpen={this.state.visibility}/>
        </div>
      </div>
    );
  }

}

export default StatusBar;
