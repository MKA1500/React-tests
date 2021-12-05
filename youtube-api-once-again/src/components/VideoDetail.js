import React from 'react';

const VideoDetail = props => {
    let title = props.video ? props.video.snippet.title : '';

    return <div>{title}</div>;
}

export default VideoDetail;