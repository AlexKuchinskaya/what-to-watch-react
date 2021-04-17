import React from 'react';
import {FilmsPropType} from '../../types/types';
import {Link} from 'react-router-dom';
import {FILMS_PATH} from '../../const/routes-path';

const SimilarMovies = ({similarMovies}) => {
  const MAX_SIMILAR_MOVIES = 4;
  return (
    <div className="catalog__movies-list">
      {similarMovies.slice(0, MAX_SIMILAR_MOVIES).map((similarMovie, index) =>
        <article key={`${index}-${similarMovie.videoLink}`} className="small-movie-card catalog__movies-card">
          <div className="small-movie-card__image">
            <img src={similarMovie.previewImage} alt={similarMovie.name} width="280" height="175" />
          </div>
          <h3 className="small-movie-card__title">
            <Link className="small-movie-card__link" to={`/${FILMS_PATH}/${similarMovie.id}`}>{similarMovie.name} </Link>
          </h3>
        </article>
      )}
    </div>
  );
};

SimilarMovies.propTypes = {
  similarMovies: FilmsPropType
};
export default SimilarMovies;
