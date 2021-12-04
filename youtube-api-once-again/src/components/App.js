import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    url = new URL('https://www.googleapis.com/youtube/v3/search');
    state = { videos: [] };

    onSearchSubmit = (term) => {
        const params = {
            part: 'snippet',
            key: '',
            maxResults: 10,
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
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-6">
                        <VideoList videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;