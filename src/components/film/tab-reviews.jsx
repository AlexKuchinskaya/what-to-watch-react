import React from 'react';
import {RviewsPropType} from '../../types/reviews-types';
import {formatReviewDate} from '../../utils/date-formatting';

const MovieReviews = ({reviews}) => {

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((film, index) => (
          <div key={`${film}-${index}`} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{film.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{film.user.name}</cite>
                <time className="review__date" dateTime={film.date}>{formatReviewDate(film.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{film.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: RviewsPropType,
};

export default MovieReviews;
