import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super ()
    this.state = {
      searchedBooks: [],
      bookTitles: [],
      userList: []
    }
  }
  searchBook = (title) => {
    let newbooks = []
    let newBookTitles = []
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&maxResults=8`)
    .then((data) => {
      for (let book of data.data.items) {
        let localBook = {}
        localBook.title = book.volumeInfo.title;
        newBookTitles.push(localBook.title)
        localBook.authors = book.volumeInfo.authors;
        localBook.thumbail = book.volumeInfo.imageLinks.smallThumbnail
        newbooks.push(localBook)
      }
      this.setState({
        searchedBooks: newbooks,
        bookTitles: newBookTitles
      })
      console.log(this.state.bookTitles)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://bestanimations.com/Books/page-turning-book-animation-17.gif" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GreatReads</h1>
        </header>
        <Search state = {this.state} searchBook = {this.searchBook}/>
        {/* <Results/> */}
      </div>
    );
  }
}

export default App;
