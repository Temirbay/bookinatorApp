import React, {Component} from 'react'

import Book from '../components/Book.js'

class Home extends React.Component {

  constructor(props) {
    super (props);

  }

  render() {
    const feedsAPI = this.props.feeds.map((book) => {
      return(
          <div>
            <Book book={book}/>
          </div>
        );
    });

    return (
      <div className="home">
        <ul>{feedsAPI}</ul>
      </div>
    );
  }

}

export default Home;
