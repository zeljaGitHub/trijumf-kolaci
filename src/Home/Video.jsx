import React, { useState, useEffect, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./Video.css";

const Component1 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [clicked, setClicked] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    if (videoElement) {
      videoElement.addEventListener("loadeddata", handleVideoLoad);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("loadeddata", handleVideoLoad);
      }
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);

    // Trigger animation
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // dužina trajanja animacije
  };

  return (
    <div className="full-screen c1" style={{ position: "relative" }}>
      {!videoLoaded && <div className="loading">Loading Video...</div>}
      <video ref={videoRef} className="video" autoPlay loop muted={isMuted}>
        <source src="/frenki_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={toggleMute}
        className={`mute-button ${clicked ? "clicked" : ""}`}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
};

export default Component1;
