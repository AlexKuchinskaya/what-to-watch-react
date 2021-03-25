import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';
import browserHistory from "../../browser-history";
import {Link} from 'react-router-dom';
import Player from '../player/player';
import {PREVIEW_HEIGHT, PREVIEW_WIDTH, VIDEO_DELAY} from '../../const/utils';
import {FILMS_PATH} from '../../const/routes-path';


const MovieCard = ({film, onMovieSelect, activeMovieCardId}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  let timer = null;

  const playVideo = (element) => {
    if (element) {
      setTimeout(() => element.play(), VIDEO_DELAY);
    }
  };

  const handleFilmMouseEnter = () => {
    onMovieSelect(film.id);
    if (timer) {
      clearTimeout(timer);
    }
    setIsPlaying(true);
  };

  const handleFilmMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsPlaying(false);
  };

  const handleMovieDescriptionRedirect = () => {
    browserHistory.push(`/${FILMS_PATH}/${activeMovieCardId}`);
  };
  return (
    <article onMouseEnter={handleFilmMouseEnter} onMouseLeave={handleFilmMouseLeave} className="small-movie-card catalog__movies-card">

      <div className="small-movie-card__image" onClick={handleMovieDescriptionRedirect}>
        {isPlaying && film.id === activeMovieCardId ?
          <Player
            isMovieCardPlayer={true}
            src={film.previewVideoLink}
            poster={film.previewImage}
            playSmallVideo={playVideo}
            isSmallPlayerPlaying={isPlaying}
            width={PREVIEW_WIDTH}
            height={PREVIEW_HEIGHT}
          /> :
          <img src={film.previewImage} alt={film.name} width={PREVIEW_WIDTH} height={PREVIEW_HEIGHT} />}
      </div>

      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/${FILMS_PATH}/${activeMovieCardId}`}>{film.name}</Link>
      </h3>
    </article>

  );
};

MovieCard.propTypes = {
  film: FilmPropType,
  onMovieSelect: PropTypes.func.isRequired,
  activeMovieCardId: PropTypes.number.isRequired
};

export default MovieCard;
