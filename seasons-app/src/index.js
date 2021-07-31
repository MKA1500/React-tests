import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            long: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            },
            (error) => {
                // it is not required to update all properties
                // in the state
                this.setState({
                    errorMessage: error.message
                });
            }
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div className="container">
                    <h2 className="text-center">
                        Error: {this.state.errorMessage}
                    </h2>
                </div>
            );
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div className="container">
                    <h2 className="text-center">
                        Latitude: {this.state.lat}
                    </h2>
                    <h2 className="text-center">
                        Longitude: {this.state.long}
                    </h2>
                </div>
            );
        }

        return (
            <div className="container">
                <h2 className="text-center">
                    Loading!
                </h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);