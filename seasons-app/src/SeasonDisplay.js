import React from 'react';
import './App.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    console.log(props);
    const season = getSeason(props.lat, new Date().getMonth());
    const bg = season === 'winter' ? 'bg winter-bg' : 'bg summer-bg';
    return (
        <div className={bg}>
            <div className="container">
                <h2 className="text-center">
                    Latitude: {props.lat}
                </h2>
                <h2 className="text-center">
                    Longitude: {props.long}
                </h2>
                <h1 className="text-center season-label">
                    {season === 'winter' ? 'It is winter.' : 'It is summer.'}
                </h1>
            </div>
        </div>
    );
};

export default SeasonDisplay;