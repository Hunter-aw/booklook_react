import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Results from './components/Results';

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
        localBook.thumbnail = book.volumeInfo.imageLinks.smallThumbnail
        newbooks.push(localBook)
      }
      this.setState({
        searchedBooks: newbooks,
        bookTitles: newBookTitles
      })
    })
    console.log(this.state.searchedBooks)
  }
  showResults = () => {

  } 
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src="http://bestanimations.com/Books/page-turning-book-animation-17.gif" className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to GreatReads</h1>
          </header>
          <Route path="/" exact render={() => <Search state = {this.state} searchBook = {this.searchBook} showResults = {this.showResults}/>}/>
          <Route path="/results" exact render={() => <Results state={this.state}/>} />
        </div>
      </Router>
    );
  }
}

export default App;
