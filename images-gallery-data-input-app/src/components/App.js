import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
        // https://unsplash.com/documentation#search-photos
        // https://unsplash.com/documentation#location 
        fetch(`https://api.unsplash.com/search/photos?query=${term}`, {
            headers: { Authorization: 'Client-ID xx' }
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmitSearch={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;