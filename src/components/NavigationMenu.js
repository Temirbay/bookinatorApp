import React, {Component} from 'react';

import '../styles/NavigationMenu.css'


class NavigationMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: '',
        }
        this.state.isOpen = this.props.isOpen;

    }

    render(){
        if (this.props.isOpen == 'true') {
            return(
                <div className = "navigation-menu">
                    <ul className="navigation-menu-list" >
                        <li className="user-name">Changes</li>
                        <li className="reading-challenge" ><a class="link-navigation-menu" href="">Reading Challenge</a></li>
                        <li className="settings" ><a class="link-navigation-menu" href="">Settings</a></li>
                        <li className="sign-out" ><a class="link-navigation-menu" href="">Sign Out</a></li>
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
