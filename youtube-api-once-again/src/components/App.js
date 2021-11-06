import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/youtube';

class App extends React.Component {
    settings = new YouTube();

    onSearchSubmit = (term) => {
        console.log('term', term);
        console.log('getUrl', this.settings.getUrl);
        console.log('clientKey', this.settings.clientKey);
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