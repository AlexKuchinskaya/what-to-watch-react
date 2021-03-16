import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({src, poster, isPlaying, width, height, playVideo}) => {

  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      playVideo(videoRef.current);
      return;
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = null;
      videoRef.current.src = src;

    }

  }, [isPlaying]);

  useEffect(() => {

    return () => {
      videoRef.current = null;
    };
  }, [isPlaying]);

  return (
    <>
      <video ref={videoRef} muted={true} src={src} poster={poster} width={width} height={height}/>

    </>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  playVideo: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
export default VideoPlayer;

