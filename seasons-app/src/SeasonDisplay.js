import React from 'react';

const seasonConfig = {
    summer: {
        text: 'It\'s summer',
        iconName: 'fas fa-sun',
        bgOption: 'summer-bg'
    },
    winter: {
        text: 'It\'s winter',
        iconName: 'fas fa-snowflake',
        bgOption: 'winter-bg'
    }
}

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
    const { text, iconName, bgOption } = seasonConfig[season];
    return (
        <div className={`bg ${bgOption}`}>
            <div className="container">
                <h2 className="text-center">
                    Latitude: {props.lat}
                </h2>
                <h2 className="text-center">
                    Longitude: {props.long}
                </h2>
                <h1 className="text-center season-label">
                    {text}
                </h1>
                <i className={iconName} />
            </div>
        </div>
    );
};

export default SeasonDisplay;