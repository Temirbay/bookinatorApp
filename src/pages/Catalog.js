import React, {Component} from 'react'

import FullCatalog from './FullCatalog.js'
import Book from './Book.js'


import { BrowserRouter as Hashrouter, Navlink, Route, Switch } from 'react-router-dom'

class Catalog extends React.Component {

  render() {
    return (
      <div className="catalog">
        <Switch>
          <Route exact path='/catalog' component={FullCatalog}/>
          <Route path='/catalog/:id' component={Book}/>
        </Switch>
      </div>
    );
  }
}

export default Catalog;
