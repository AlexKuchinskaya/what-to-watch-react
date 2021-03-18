import React from 'react';
import {checkFilmRating} from './rating-rendering';
import {FilmPropType} from '../../types/types';

const MovieOverview = ({selectedMovie, reviews}) => {
  console.log(`reviews`, reviews)
  // const reviewsLength = reviews.length;
  const {rating, description, director, starring} = selectedMovie;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{checkFilmRating(rating)}</span>
          <span className="movie-rating__count">{`${240} ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

MovieOverview.propTypes = {
  selectedMovie: FilmPropType
};
export default MovieOverview;
