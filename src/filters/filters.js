import React from 'react';
import './filters.css'

export default class Filters extends React.Component {

  render() {

    return (
      <div className="Filters">
        <div>
          <label htmlFor="print-type">Print type:</label>
          <select 
            name="print-type"
            onChange={e=>this.props.handleChange(e.target.value)}>
            <option value="all">All</option>
            <option value="magazines">Magazines</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div>
          <label htmlFor="book-type">Book type:</label>
        </div>
      </div>
    )
  }
}