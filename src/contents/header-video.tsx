import React from "react";
import "./header-video.css";

const VideoHeader: React.FC = () => {
  return (
    <div className="video-header"> {/* άλλαξα από <header> σε <div> */}
      <iframe
        className="video-bg"
        title="IOANNINA: Shots of plane trees (2025)" 
        src="https://video.igem.org/videos/embed/gHSpjovmWGmTNojoTWrL8M?autoplay=1&title=0&warningTitle=0&controlBar=0&peertubeLink=0&muted=1&loop=1"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="overlay"></div>
      <div className="header-content">
        {/* Εδώ μπορείς να βάλεις κείμενο ή κουμπιά πάνω από το video */}
      </div>
    </div>
  );
};

export default VideoHeader;