import React, { Component } from 'react';
import './App.css';

import SearchBar from './searchBar/searchBar';
import BooksList from './booksList/booksList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      options: {
        printType: 'all'
      }
    }
  }

  updateList(books) {
    this.setState({
      books: books.items
    })
  }

  changePrintType(type) {
    this.setState({
      options:{
        printType: type
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar 
          options={this.state.options}
          handleChange={type=>this.changePrintType(type)}
          updateList={books=>this.updateList(books)}/>
        <BooksList books={this.state.books}/>
      </div>
    );
  }
}

export default App;
