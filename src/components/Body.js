import React, {Component} from 'react'

import Context from './Context.js'

class Body extends React.Component {

  render() {
    return (
      <div className="body">
        <div className="context"> <Context/>  </div>
      </div>
    );
  }

}

export default Body;
