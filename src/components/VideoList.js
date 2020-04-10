import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from "./VideoItem.js";



const VideoList = ({video, onVideoSelect}) => {
    const listOfVideos = video.map(video => (
        <VideoItem
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      ));
    return listOfVideos;
    
}

export default VideoList;