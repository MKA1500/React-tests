import React from 'react';

const SeasonDisplay = (props) => {
    console.log(props);
    return (
        <div className="container">
            <h2 className="text-center">
                Latitude: {props.lat}
            </h2>
            <h2 className="text-center">
                Longitude: {props.long}
            </h2>
        </div>
    );
};

export default SeasonDisplay;