import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    url = new URL('https://www.googleapis.com/youtube/v3/search');
    state = { videos: [] };

    onSearchSubmit = (term) => {
        const params = {
            part: 'snippet',
            key: 'AIzaSyB0YFhI7p4tBGqNSOXguPHYdcf00LYD4jo',
            maxResults: 5,
            q: term
        }

        this.url.search = new URLSearchParams(params).toString();

        fetch(this.url)
        .then(response => response.json())
        .then((data) => {
            if (data && data.items) {
                this.setState({ videos: data.items });
            }
            console.log(data.items);
        });
    }

    render() {
        return (
            <div className="container">
                <SearchBar onSubmitSearch={this.onSearchSubmit} />
                <p>{this.state.videos.length} videos found</p>
            </div>
        );
    }
}

export default App;