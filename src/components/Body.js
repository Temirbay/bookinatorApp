import React, {Component} from 'react'

import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home.js'
import Discussions from '../pages/Discussions.js'
import Catalog from '../pages/Catalog.js'
import Mybooks from '../pages/Mybooks.js'

import '../styles/Body.css'

class Body extends React.Component {

  constructor(props) {
    super (props);
  }

  render() {
      return(
        <div className="body">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/mybooks' component={Mybooks}/>
            <Route path='/discussions' component={Discussions}/>
          </Switch>
        </div>
      );
  }

}

export default Body;
