import React, {useState, useEffect} from 'react';
import MovieCard from '../movie-card/movie-card';
import {FilmsPropType} from '../../types/types';

const FilmList = (props) => {
  const {films} = props;

  const [activeMovieCardId, setActiveMovieCardId] = useState(0);
  const [isPlayerShown, setIsPlayerShown] = useState(false);

  useEffect(() => {
    console.log(`Hello from useEffect`);
    return () => setIsPlayerShown(false);
  }, [activeMovieCardId]);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }
  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   // Указываем, как сбросить этот эффект:
  //   return function cleanup() {
  //     setActiveMovieCardId({isPlayerShowing: false});
  //   };
  // });
  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
    setIsPlayerShown(true);
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
          isPlayerShown={isPlayerShown}
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
