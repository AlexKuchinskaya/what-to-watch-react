import React from 'react';
import {FilmPropType} from '../types/types';

const MovieCard = (props) => {
  const {name, previewImage} = props.film;

  return <>;
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  </>;
};

MovieCard.propTypes = {
  film: FilmPropType
};

export default MovieCard;

