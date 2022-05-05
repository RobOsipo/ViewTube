import React from 'react'
import './VideoItem.css'

const VideoDetail = ({ video }) => {

    if (!video) {return <div className="loading">Loading...</div>}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="viewtube">
    <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
    </div>
    <div className="ui segment">
        <h4 className="ui header info">{video.snippet.title}</h4>
        <p className="info">{video.snippet.description}</p>
    </div>
        
    </div>
  )
}

export default VideoDetail