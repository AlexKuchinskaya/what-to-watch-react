import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';
import {useHistory, Link} from 'react-router-dom';
// import Player from '../player/player';
import VideoPlayer from '../player/video-player-preview';
import {PREVIEW_HEIGHT, PREVIEW_WIDTH, VIDEO_DELAY} from '../../const/utils';


const MovieCard = ({film, onMovieSelect, activeMovieCardId}) => {
  const {id, name, previewImage} = film;

  const [isPlaying, setIsPlaying] = useState(false);
  let timer = null;

  const handleFilmMouseEnter = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setIsPlaying(true);
    }, VIDEO_DELAY);
    onMovieSelect(id);
  };

  const handleFilmMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsPlaying(false);
  };

  const history = useHistory();

  const handleMovieDescriptionRedirect = () => {
    onMovieSelect(id);
    history.push(`/films/${activeMovieCardId}`);
  };
  return (
    <article onMouseEnter={handleFilmMouseEnter} onMouseLeave={handleFilmMouseLeave} onClick={handleMovieDescriptionRedirect} className="small-movie-card catalog__movies-card">

      <div className="small-movie-card__image">
        {isPlaying && id === activeMovieCardId ?
          <VideoPlayer
            film={film}
            isPlaying={isPlaying}
            width={PREVIEW_WIDTH}
            height={PREVIEW_HEIGHT}
          /> :
          <img src={previewImage} alt={name} width={PREVIEW_WIDTH} height={PREVIEW_HEIGHT} />}
      </div>

      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${activeMovieCardId}`}>{name}</Link>
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
