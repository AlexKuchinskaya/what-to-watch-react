import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {FilmsPropType} from '../../types/types';
import {connect} from 'react-redux';
import {filterMoviesByGenre, getCurrentFilmsShownCount} from '../../selectors/selectors';
import PropTypes from 'prop-types';

const FilmList = (props) => {
  const {filteredfilms, filmsShownCount} = props;

  const [activeMovieCardId, setActiveMovieCardId] = useState(1);


  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
  };


  return (
    <div className="catalog__movies-list">
      {/* Active film id: {activeMovieCardId} */}
      {filteredfilms.slice(0, filmsShownCount).map((film) => (
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
  filteredfilms: FilmsPropType,
  filmsShownCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => (
  {
    filteredfilms: filterMoviesByGenre(state),
    filmsShownCount: getCurrentFilmsShownCount(state),
  }
);

export {FilmList};
export default connect(mapStateToProps)(FilmList);


