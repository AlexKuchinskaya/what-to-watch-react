import React from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';

const MovieCard = ({film, onMovieSelect, isSelected}) => {
  const {id, name, previewImage} = film;

  const handleFilmMouseHover = () => {
    onMovieSelect(id);
  };

  return (
    <article onMouseOver={handleFilmMouseHover} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
      { isSelected ? `Selected` : `` }
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmPropType,
  onMovieSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};

export default MovieCard;

