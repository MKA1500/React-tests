import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    url = new URL('https://www.googleapis.com/youtube/v3/search');

    onSearchSubmit = (term) => {
        const params = {
            part: 'snippet',
            key: 'xx',
            maxResults: 5,
            q: term
        }

        this.url.search = new URLSearchParams(params).toString();

        fetch(this.url)
        .then(response => response.json())
        .then((data) => {
            // if (data && data.results) {
            //     this.setState({ images: data.results });
            // }
            console.log(data);
        });
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