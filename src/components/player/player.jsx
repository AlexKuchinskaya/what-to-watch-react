
import React, {useEffect, useRef, useState} from 'react';
import {FilmPropType, PromoFilmPropType} from '../../types/types';
import PlayerPlayButtonSvg from './player-play-button';
import PlayerPauseButtonSvg from './player-pause-button';
import {setTime} from './player-utils';
import {connect} from 'react-redux';
import {getPromofilm} from '../../selectors/selectors';
import {getSelectedFilm} from '../../selectors/selectors';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';

const Player = (props) => {
  const {src, poster, isSmallPlayerPlaying, width, height, playSmallVideo, isMovieCardPlayer, selectedMovie} = props;

  const [isVideoPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);


  const videoRef = useRef();
  const videoSmallPlayerRef = useRef();
  const [runTime, setRunTime] = useState(0);
  const [durationTime, setdurationTime] = useState(0);

  const durationAndRunTimesDifference = durationTime - runTime;

  const timeElapsed = setTime(durationAndRunTimesDifference);
  const valueProgress = Math.floor((runTime / durationTime) * 100);

  const handleStopPlaying = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = null;
    setIsPlaying(false);
  };

  const handlePlayerExit = () => {
    handleStopPlaying();
    browserHistory.goBack();
  };

  useEffect(() => {
    if (videoSmallPlayerRef.current) {
      if (isSmallPlayerPlaying) {
        playSmallVideo(videoSmallPlayerRef.current);
        return;
      } else {
        videoSmallPlayerRef.current.pause();
        videoSmallPlayerRef.current.currentTime = null;
        videoSmallPlayerRef.current.src = src;

      }
    }
  }, [isSmallPlayerPlaying]);

  useEffect(() => {

    return () => {
      videoSmallPlayerRef.current = null;
    };
  }, [isSmallPlayerPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play();
        return;
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      if (isFullScreen) {
        videoRef.current.parentElement.requestFullscreen();
        return;
      } else {
        document.webkitExitFullscreen();
      }
    }
  }, [isFullScreen]);

  return (
    <>
      {isMovieCardPlayer ?
        <video ref={videoSmallPlayerRef} muted={true} src={src} poster={poster} width={width} height={height}/> :
        <div className="player" >
          <video
            src={selectedMovie.videoLink}
            ref={videoRef}
            muted={true}
            className="player__video"
            poster={selectedMovie.posterImage}
            onLoadedMetadata={(e) => {
              setdurationTime(e.target.duration);

            }}
            onTimeUpdate={(e) => {
              setRunTime(e.target.currentTime);
            }}
            onEnded={handleStopPlaying}>
          </video>
          <button onClick={handlePlayerExit} type="button" className="player__exit" >Exit</button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={isNaN(valueProgress) ? 0 : valueProgress} max="100"></progress>
                <div className="player__toggler" style={{left: `${valueProgress}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{timeElapsed}</div>
            </div>
            <div className="player__controls-row">
              <button type="button" className="player__play" onClick={() => setIsPlaying(!isVideoPlaying)}>
                {isVideoPlaying ? <PlayerPauseButtonSvg /> : <PlayerPlayButtonSvg />}
                <span>{isVideoPlaying ? `Play` : `Pause`}</span>
              </button>
              <div className="player__name">{name}</div>

              <button type="button" className="player__full-screen" onClick={() => setFullScreen(!isFullScreen)}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

Player.propTypes = {

  isMovieCardPlayer: PropTypes.bool,
  selectedMovie: FilmPropType,
  poster: PropTypes.string,
  src: PropTypes.string,
  playSmallVideo: PropTypes.func,
  isSmallPlayerPlaying: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};


const mapStateToProps = (state, ownProps) => {
  const {movieId} = ownProps;
  return {
    promoFilm: getPromofilm(state),
    selectedMovie: getSelectedFilm(state, parseInt(movieId, 10)),
  };
};

export {Player};
export default connect(mapStateToProps)(Player);


