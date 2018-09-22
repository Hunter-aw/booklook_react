import React, { Component } from 'react';

class Results extends Component {
    render() {
        return(
            <div>
                {this.props.state.searchedBooks.map(s => <div><h2>{s.title}</h2><image href={s.thumbnail}></image><h4>{s.authors[0]}</h4></div>)}
            </div>
        )
    }
}

export default Results