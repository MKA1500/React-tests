import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <BookList />
                    </div>
                    <div className="col-8">
                        <BookDetail />
                    </div>
                </div>
            </div>      
        );
    }
}
