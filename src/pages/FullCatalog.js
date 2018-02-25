import React, {Component} from 'react'


import { BrowserRouter as Hashrouter, Navlink, Route, Switch, Link } from 'react-router-dom'

class FullCatalog extends React.Component {

  render() {
    const BooksAPI = {
        books: [
            { id: 1, name: "Harry Potter", },
            { id: 2, name: "Sherlock Holmes", },
            { id: 3, name: "Abay", },
            { id: 4, name: "People", },
            { id: 5, name: "William Winger", },
            { id: 6, name: "Fillipe Forward", }
        ],
        all: function() { return this.books},

        get: function(id) {

        const isBook = p => p.id === id
          return this.books.find(isBook)
      }
    }

    return (
      <div className="full-catalog">
          <ul>
            {
              BooksAPI.all().map(p => (
                <li key={p.id}>
                  <Link to={'/catalog/${p.id}'}>{p.name}</Link>
                </li>
              ))
            }
          </ul>
      </div>
    );
  }
}

export default FullCatalog;
