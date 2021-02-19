import React from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';
import {useHistory, Link} from 'react-router-dom';


const MovieCard = ({film, onMovieSelect, isSelected}) => {
  const {id, name, previewImage} = film;

  const handleFilmMouseHover = () => {
    onMovieSelect(id);
  };

  const history = useHistory();

  const handleMovieDescriptionRedirect = () => {
    history.push(`/films/:id`);
  };
  return (
    <article onMouseOver={handleFilmMouseHover} onClick={handleMovieDescriptionRedirect} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id">{name}</Link>
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

