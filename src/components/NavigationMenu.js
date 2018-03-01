import React, {Component} from 'react';

import '../styles/NavigationMenu.css'

import { BrowserRouter as Hashrouter, NavLink, Route, Switch } from 'react-router-dom'

class NavigationMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: '',
        }
        this.state.isOpen = this.props.isOpen;
    }

    handleClick = () => {
        this.props.onClose ();
    }

    render(){
        if (this.props.isOpen == 'true') {
            return(
                <div className = "navigation-menu">
                    <ul className="navigation-menu-list" >
                        <li> <h3> {this.props.username}</h3> </li>

                        <li><NavLink to={'/profile'}
                            onClick={this.handleClick}> Profile</NavLink></li>
                        <li><NavLink to={'/addbook'}
                            onClick={this.handleClick}> Add book</NavLink></li>
                        <li><NavLink to={'/signin'}
                            onClick={this.handleClick}> Sign Out</NavLink></li>
                    </ul>
                </div>
            );
        }else{
            return(
                <div>

                </div>
            )
        }
    }
}

export default NavigationMenu;
