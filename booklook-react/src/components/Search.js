import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'


class Search extends Component {
    
    searchBook = (event) => {
        this.props.searchBook(event.target.value)
    }
    showResults = (event) => {
        event.preventDefault();
        this.props.showResults()
    }
    render() {
        return (
            <div>
                <h1>Search for your favorite books below!</h1>
                <form onSubmit = {this.showResults}>
                <input placeholder = "Book" type= "text" onChange ={this.searchBook} list="titles"></input>
                <datalist id="titles">{this.props.state.bookTitles.map(b=><option>{b}</option>)}</datalist>
                <Link to = "/results"><button>Search</button></Link>
                </form>
            </div>
        )
    }
}

export default Search