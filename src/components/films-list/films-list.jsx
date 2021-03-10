import React, {useState, useEffect} from 'react';
import MovieCard from '../movie-card/movie-card';
import {FilmsPropType} from '../../types/types';

const FilmList = (props) => {
  const {films} = props;
  const timerTime = 3000;

  const [activeMovieCardId, setActiveMovieCardId] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);

  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
  };

  useEffect(() => {
    console.log(activeMovieCardId);

    const timer = setTimeout(() => setShowPlayer(true), timerTime);
    return () => clearTimeout(timer);

  }, [activeMovieCardId]);

  const handlePlayerMouseOut = () => {
    setShowPlayer(false);
  }
  // useEffect(() => {
  //   const onDocumentMouseover = () => {
  //     setShowPlayer(false);
  //   };
  //   document.addEventListener(`mouseover`, onDocumentMouseover);

  //   return () => document.removeEventListener(`mouseover`, onDocumentMouseover);

  // }, []);
  return (
    <div className="catalog__movies-list">
      {/* Active film id: {activeMovieCardId} */}
      {films.map((film) => (
        <MovieCard
          key={film.id}
          film={film}
          onMouseOut={handlePlayerMouseOut}
          onMovieSelect={handleMovieSelect}
          activeMovieCardId={activeMovieCardId}
          isSelected={film.id === activeMovieCardId}
          showPlayer={showPlayer}
        />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: FilmsPropType
};

export default FilmList;
