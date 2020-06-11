import React, { useState, useRef } from 'react';
import Brand from '../Brand';
import './style.css';

function VideoPlayer() {
  const [metadata, setMetadata] = useState(null);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
   
  const updateMetadata = (event) => {
    if(!metadata) setMetadata({ duration: event.target.duration });
  }

  const play = () => {
    const video = videoRef.current;
    video.play();
    setPlaying(true);
    video.onended = (() => setPlaying(false))
  }
   
  console.log(playing);

  return (
    <div className="VideoPlayer">
      <div className="container" onClick={play}>
        <video
          ref={videoRef}
          onLoadedMetadata={updateMetadata}
          className="layer video"
        >
          <source src="/videos/stock.mp4" type="video/mp4" />
        </video>
        
        {
          !playing &&
          <div className="layer play">
            <button>play me</button>
          </div>
        }

        <div className="layer brand">
          <Brand
            show={playing}
            metadata={metadata}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
