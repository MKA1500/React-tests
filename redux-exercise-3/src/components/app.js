import React, { Component } from 'react';
import BookList from '../containers/BookList';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <BookList />
                    </div>
                </div>
            </div>      
        );
    }
}
