import { useRef, useState } from 'react';
import { Wrapper, Button } from "./PlayerStyle"

const Player = ({ audio }) => {
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
    <Wrapper>
      <audio ref={audioRef} src={audio} />
        <Button
          onClick={handlePlay}
        >
          Play
        </Button>
        <Button
          onClick={handlePause}
        >
          Pause
        </Button>
        <Button
          onClick={handleStop}
        >
          Stop
        </Button>
    </Wrapper>
  );
};

export default Player;
