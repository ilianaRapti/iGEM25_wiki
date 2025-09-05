import React from "react";
import "./header-video.css";

const VideoHeader: React.FC = () => {
  return (
    <header className="video-header">
      <iframe
        className="video-bg"
        title="IOANNINA: Shots of plane trees (2025)" 
        width="560" 
        height="315" 
        src="https://video.igem.org/videos/embed/gHSpjovmWGmTNojoTWrL8M?autoplay=1&amp;title=0&amp;warningTitle=0&amp;controlBar=0&amp;peertubeLink=0&muted=1&loop=1"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
        allow="autoplay; fullscreen; picutre-in-picutre;"
        allowFullScreen
      ></iframe>

      <div className="overlay"></div>
      <div className="header-content">
        {/*<h1>iGEM IOANNINA 2025</h1>
        <p>AMADRYADS</p>*/}
      </div>
    </header>
  );
};

export default VideoHeader;
