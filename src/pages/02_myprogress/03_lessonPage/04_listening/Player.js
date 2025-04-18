import React, { useRef, useState } from 'react';

const Player = ({audio}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div>
      <audio ref={audioRef} src={audio} />
      <div>
        <button
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Player;
