import React from 'react'
import './VideoItem.css'

const VideoDetail = ({ video }) => {

    if (!video) {return <div className="loading">Loading...</div>}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
    <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
    </div>
    <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
    </div>
        
    </div>
  )
}

export default VideoDetail