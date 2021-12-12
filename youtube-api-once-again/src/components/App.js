import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    url = new URL('https://www.googleapis.com/youtube/v3/search');
    state = { 
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onSearchSubmit('React JS');
    }

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
                this.setState({ 
                    videos: data.items,
                    selectedVideo: data.items[0]
                });
            }
            console.log(data.items);
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };
 
    render() {
        return (
            <div className="container">
                <SearchBar onSubmitSearch={this.onSearchSubmit} />
                <div className="row">
                    <div className="col-6">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="col-6">
                        <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;