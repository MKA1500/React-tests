import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="my-2 video-item">
            <div className="row">
                <div class="col-8">
                    <img src={video.snippet.thumbnails.medium.url} className="video-item-img" />
                </div>
                <div class="col-4">
                    <div className="video-title">
                        <strong>
                            {video.snippet.title}
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
