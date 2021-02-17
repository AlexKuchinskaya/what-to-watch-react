import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {filmsListPropTypes} from '../../types/types';

const FilmList = (props) => {
  const {films} = props;
  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard key={film.id} film={film}/>)}
    </div>
  );
};

FilmList.propTypes = filmsListPropTypes;
export default FilmList;
