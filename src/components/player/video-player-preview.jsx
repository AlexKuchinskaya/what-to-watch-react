import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';

const VideoPlayer = ({film, isPlaying, width, height}) => {
  const {previewImage, previewVideoLink} = film;
  const videoRef = useRef();


  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = null;
      videoRef.current.src = previewVideoLink;

    }
    // return () => {
    //   videoRef.current = null;
    // };

  }, [isPlaying]);

  useEffect(() => {

    return () => {
      videoRef.current = null;
    };
  }, [isPlaying]);

  return (
    <>
      <video ref={videoRef} muted={true} src={previewVideoLink} poster={previewImage} width={width} height={height}/>

    </>
  );
};

VideoPlayer.propTypes = {
  film: FilmPropType,
  isPlaying: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default VideoPlayer;

