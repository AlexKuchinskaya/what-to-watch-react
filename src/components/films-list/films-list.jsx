import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {FilmsPropType} from '../../types/types';

const FilmList = (props) => {
  const {films} = props;

  const [activeMovieCardId, setActiveMovieCardId] = useState(0);


  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
  };


  return (
    <div className="catalog__movies-list">
      {/* Active film id: {activeMovieCardId} */}
      {films.map((film) => (
        <MovieCard
          key={film.id}
          film={film}
          onMovieSelect={handleMovieSelect}
          activeMovieCardId={activeMovieCardId}
          isSelected={film.id === activeMovieCardId}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: FilmsPropType
};

export default FilmList;
