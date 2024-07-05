import React from "react";

export const VideoPlayingBox = () => {
  return (
    <div className="videoPlayingDiv">
      <video
        src="https://cdn.shopify.com/videos/c/o/v/fa32de7271f0452bb06962706e433470.mp4"
        className="videoPlaying"
        muted
        autoPlay
        loop
        controls
      ></video>
    </div>
  );
};
