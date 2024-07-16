// YouTubePlayer.js
import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer;
