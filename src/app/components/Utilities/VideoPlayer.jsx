"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    height: "250",
    width: "300",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <button
          onClick={handleVideoPlayer}
          className="text-white float-right px-2 mb-1 text-xl bg-gray-800  hover:bg-red-500 transition-all shadow-xl"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video Is Broken, Please Try annother")}
        />
      </div>
    );
  };
  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 w-32 bg-white text-black hover:bg-red-500 rounded"
      >
        Watch Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
