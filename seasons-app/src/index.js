import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {
        lat: null,
        long: null,
        errorMessage: ''
    };

    componentDidMount() {
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

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div className="bg loading-bg">
                    <h2 className="text-center">
                        Error: {this.state.errorMessage}
                    </h2>
                </div>
            );
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay
                    lat={this.state.lat}
                    long={this.state.long}/>;
        }

        return <Spinner
                message="Please accept location request..."/>
    }

    render() {
        return (
            <div className="padding-5">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// reload after index.js changes:
if (module.hot) {
    module.hot.accept();
}