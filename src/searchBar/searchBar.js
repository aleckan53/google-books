import React from 'react';
import Filters from '../filters/filters'

export default class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      term: ''
    }
  }

  getBooks(e) {
    e.preventDefault();
    const term = this.state.term
    const url = 'https://www.googleapis.com/books/v1/volumes?q='+term;
    const options = {
      key: "AIzaSyApYn5UYylDBvJFzzeI_ohhnczBZw8ZeGQ",
      ...this.props.options
    };
    console.log(options);
    
    fetch(url, options)
      .then(res=>{
        if(!res.ok){
          throw new Error('something went wrong')
        }
        return res.json()
      })
      .then(res=> this.props.updateList(res))
  }

  termChange(value){
    this.setState({
      term: value
    })
  }

  render() {

    return (
      <div className="SearchBar">
        <form onSubmit={e=>this.getBooks(e)}>
          <label htmlFor="search-input">Search:</label>
          <input 
            name="search-input"
            type="text"
            value={this.state.term}
            onChange={e=>this.termChange(e.target.value)}
            required
            placeholder="Enter a book name"/>
          <button type="submit">Search</button>
        </form>
        <Filters handleChange={this.props.handleChange}/>
      </div>
    )
  }
}