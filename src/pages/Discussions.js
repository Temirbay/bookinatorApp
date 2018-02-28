import React, {Component} from 'react'

class Discussions extends React.Component {

  constructor (props) {
    super (props);


    this.state = {

      color: ''
    }
  }

  render() {
    return (
      <div className="discussions">
        <h1>{this.props.color}</h1>

      </div>
    );
  }

}

export default Discussions;
