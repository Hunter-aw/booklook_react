import React, { Component } from 'react';

class Search extends Component {
    
    searchBook = (event) => {
        this.props.searchBook(event.target.value)

    }
    render() {
        return (
            <div>
                <h1>Search for your favorite books below!</h1>
                <form>
                <input placeholder = "Book" type= "text" onChange ={this.searchBook} list="titles"></input>
                <datalist id="titles">{this.props.state.bookTitles.map(b=><option>{b}</option>)}</datalist>
                <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Search