import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {filmName, filmImage} = props;
  // const {filmName = `Fantastic Beasts: The Crimes of Grindelwald`} = props;
  return <React.Fragment>;
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={filmImage} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{filmName}</a>
      </h3>
    </article>
  </React.Fragment>;
};

export default MovieCard;

