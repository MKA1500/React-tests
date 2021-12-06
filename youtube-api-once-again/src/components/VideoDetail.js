import React from 'react';

const VideoDetail = props => {
    let title = '';
    let description = '';
    let videoSrc = '';
    if (props.video) {
        title = props.video.snippet.title;
        description = props.video.snippet.description;
        videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
    }

    return (
        <div className="video-detail-container">
            <div className="video-container">
                <iframe width="100%" height="300" src={videoSrc} />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default VideoDetail;