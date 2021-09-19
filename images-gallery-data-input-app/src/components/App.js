import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/unsplash';

class App extends React.Component {
    settings = new Unsplash();
    state = { images: [] };

    constructor() {
        super();

        console.log(this.settings.baseUrl);
        console.log(this.settings.clientId);
    }

    onSearchSubmit = (term) => {
        // https://unsplash.com/documentation#search-photos
        // https://unsplash.com/documentation#location 
        fetch(`${this.settings.baseUrl}search/photos?query=${term}`, {
            headers: { Authorization: `Client-ID ${this.settings.clientId}` }
        })
        .then(response => response.json())
        .then((data) => {
            if (data && data.results) {
                this.setState({ images: data.results });
            }
        });
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmitSearch={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;