import React, {useState, useEffect, useRef} from 'react';
import {PromoFilmPropType} from '../../types/types';
import PlayerPlayButtonSvg from './player-play-button';
import PlayerPauseButtonSvg from './player-pause-button';
import PropTypes from 'prop-types';

const Player = (props) => {
  const {name, previewVideoLink, defaultIsPlaying, activeMovieCardId} = props;
  console.log(`name`, name)

  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(defaultIsPlaying);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = setIsLoading(false);
    videoRef.current.onplay = setIsPlaying(true);
    videoRef.current.onpause = setIsPlaying(true);

    return (() => {
      console.log(`после отрисовки videoRef`, videoRef.current)
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    });
  }, [activeMovieCardId]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div className="player">
      <video src={previewVideoLink} ref={videoRef} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            disabled={isLoading}
            onClick={setIsPlaying(!isPlaying)}
          >
            {isPlaying ? PlayerPlayButtonSvg : PlayerPauseButtonSvg}
            <span>{isPlaying ? `Play` : `Pause`}</span>
          </button>
          <div className="player__name">{name}</div>

          <button type="button" className="player__full-screen">
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
  defaultIsPlaying: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired
};
export default Player;
