import React from 'react';
import './bookItem.css'

export default class BookItem extends React.Component {

  render() {
    const book = this.props.data;
    
    return (
      <li className="BookItem">
        <div><img src={book.volumeInfo.imageLinks.thumbnail} alt="someText"/></div>
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <h3>{book.volumeInfo.subtitle}</h3>
          {book.volumeInfo.authors ? <p>Author: {book.volumeInfo.authors.join(', ')}</p>: ''}
          <p>Price: <span>$</span></p>  
          {book.searchInfo ? <p>{book.searchInfo.textSnippet.replace(/<\/?[^>]+(>|$)/g, "")}</p> : ''}
        </div>
      </li>
    )
  }
}