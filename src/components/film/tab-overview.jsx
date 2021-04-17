import React from 'react';
import {FilmPropType} from '../../types/types';
import {RviewsPropType} from '../../types/reviews-types';
import {checkFilmRating} from './rating-rendering';

const MovieOverview = ({selectedMovie, reviews}) => {
  const reviewsLength = reviews.length;
  const {rating, description, director, starring} = selectedMovie;
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{checkFilmRating(rating)}</span>
          <span className="movie-rating__count">{`${reviewsLength} ratings`}</span>
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
  selectedMovie: FilmPropType,
  reviews: RviewsPropType
};
export default MovieOverview;
