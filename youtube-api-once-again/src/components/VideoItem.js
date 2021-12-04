import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="my-2">
            <img src={video.snippet.thumbnails.medium.url} />
            <span className="pl-2">{video.snippet.title}</span>
        </div>
    );
};

export default VideoItem;
