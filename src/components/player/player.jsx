
import React, {useEffect, useRef, useState} from 'react';
// import PropTypes from 'prop-types';
import {PromoFilmPropType} from '../../types/types';
import PlayerPlayButtonSvg from './player-play-button';
import PlayerPauseButtonSvg from './player-pause-button';
import {setTime} from './player-utils';
import {connect} from 'react-redux';
import {getPromofilm} from '../../selectors/selectors';

const Player = ({promoFilm}) => {
  // const {previewImage, name, previewVideoLink} = film;
  const [isVideoPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);

  const {name, backgroundImage, previewVideoLink} = promoFilm;

  const videoRef = useRef();
  const [runTime, setRunTime] = useState(0);
  const [durationTime, setdurationTime] = useState(0);

  const durationAndRunTimesDifference = durationTime - runTime;

  const timeElapsed = setTime(durationAndRunTimesDifference);
  const valueProgress = Math.floor((runTime / durationTime) * 100);
  // const videoPastTimeFormatted = setTime(runTime);
  // const videoTotalDurationFormatted = setTime(durationTime);


  const handleStopPlaying = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = null;
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isVideoPlaying) {
      videoRef.current.play();
      return;
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  useEffect(() => {
    if (isFullScreen) {
      videoRef.current.parentElement.requestFullscreen();
      return;
    } else {
      document.webkitExitFullscreen();
    }
  }, [isFullScreen]);

  return (
    <div className="player" >
      <video
        src={previewVideoLink}
        ref={videoRef}
        muted={true}
        className="player__video"
        poster={backgroundImage}
        onLoadedMetadata={(e) => {
          setdurationTime(e.target.duration);

        }}
        onTimeUpdate={(e) => {
          setRunTime(e.target.currentTime);
        }}
        onEnded={handleStopPlaying}>
      </video>
      <button type="button" className="player__exit" >Exit</button>
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
  );
};

Player.propTypes = {
  promoFilm: PromoFilmPropType,
  // film: FilmPropType,
};

const mapStateToProps = (state) => (
  {
    promoFilm: getPromofilm(state),
  }
);


export {Player};
export default connect(mapStateToProps)(Player);


