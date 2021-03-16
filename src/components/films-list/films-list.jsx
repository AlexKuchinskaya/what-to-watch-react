import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {FilmsPropType} from '../../types/types';
import {connect} from 'react-redux';
import {filterMoviesByGenre} from '../../selectors/selectors';

const FilmList = (props) => {
  const {filteredfilms} = props;

  const [activeMovieCardId, setActiveMovieCardId] = useState(0);


  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
  };


  return (
    <div className="catalog__movies-list">
      {/* Active film id: {activeMovieCardId} */}
      {filteredfilms.map((film) => (
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
  filteredfilms: FilmsPropType
};

const mapStateToProps = (state) => (
  {
    filteredfilms: filterMoviesByGenre(state),
  }
);

// const mapDispatchToProps = (dispatch) => ({
//   onGenreClick(genre) {
//     dispatch(ActionCreator.changeGenre(genre));
//   },
// });
export {FilmList};
export default connect(mapStateToProps)(FilmList);

// export default FilmList;

