import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderLIst() {
        console.log('renderLIst()');
        console.log(this.props.books);
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.refNo} 
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}>
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

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a container
// it needs to know about the dispatch method - selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);