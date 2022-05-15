import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderLIst() {
        console.log('renderLIst()');
        console.log(this.props.books);
        return this.props.books.map((book) => {
            return (
                <li key={book.refNo} className="list-group-item">
                    <h5>{book.title}</h5>
                    <strong>{book.author}</strong>
                    <p>Year: {book.year} / {book.pages} pages</p>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderLIst()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // will show up as props in BookList
    console.log('mapStateToProps');
    console.log(state);
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);