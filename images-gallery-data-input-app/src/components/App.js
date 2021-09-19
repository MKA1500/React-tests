import React from 'react';
import SearchBar from './SearchBar';
import Unsplash from '../api/unsplash';
import ImageList from './imageList';

class App extends React.Component {
    settings = new Unsplash();
    state = { images: [] };

    // constructor() {
    //     super();
    //     console.log(this.settings.baseUrl);
    //     console.log(this.settings.clientId);
    // }

    onSearchSubmit = (term) => {
        fetch(`${this.settings.baseUrl}search/photos?per_page=${this.settings.perPage}&query=${term}`, {
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
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;