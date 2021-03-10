import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';
import {useHistory, Link} from 'react-router-dom';
import Player from '../player/player';


const MovieCard = ({film, onMovieSelect, activeMovieCardId, showPlayer, isSelected, onMouseOut}) => {
  const {id, name, previewImage} = film;

  const handleFilmMouseHover = () => {
    onMovieSelect(id);
  };

  const handleFilmMouseHoverOut = () => {
    onMouseOut();
  };
  // useEffect(() => {
  //   console.log(activeMovieCardId)
  // }, [activeMovieCardId]);

  const history = useHistory();

  const handleMovieDescriptionRedirect = () => {
    history.push(`/films/${activeMovieCardId}`);
  };
  return (
    <article onMouseOver={handleFilmMouseHover} onMouseLeave={handleFilmMouseHoverOut} onClick={handleMovieDescriptionRedirect} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${activeMovieCardId}`}>{name}</Link>
      </h3>
      {showPlayer && isSelected ? <Player film={film} activeMovieCardId={activeMovieCardId} defaultIsPlaying={true}/> : null}
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmPropType,
  onMovieSelect: PropTypes.func.isRequired,
  activeMovieCardId: PropTypes.number.isRequired
};

export default MovieCard;

