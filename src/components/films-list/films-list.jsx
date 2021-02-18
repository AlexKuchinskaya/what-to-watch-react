import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {filmsListPropTypes} from '../../types/types';

const FilmList = (props) => {
  const {films} = props;

  const [activeMovieCardId, setActiveMovieCardId] = useState();

  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
  };

  return (
    <div className="catalog__movies-list">
      {/* Active film id: {activeMovieCardId} */}
      <br />
      {films.map((film) => (
        <MovieCard
          key={film.id}
          film={film}
          onMovieSelect={handleMovieSelect}
          isSelected={film.id === activeMovieCardId}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = filmsListPropTypes;
export default FilmList;
