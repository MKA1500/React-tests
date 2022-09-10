import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BookDetail.css';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }

        return (
            <div>
                <h4>Details for:</h4>
                <h2>{this.props.book.title}</h2>
                <h3>{this.props.book.author}</h3>
                <div class="main-image-wrap">
                    <img src={this.props.book.image} alt="cover" />
                </div>
                <p>Year: {this.props.book.year} / {this.props.book.pages} pages</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);