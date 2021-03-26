import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {FilmsPropType} from '../../types/types';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import {filterMoviesByGenre} from '../../store/films-data-interaction/selectors';

const FilmList = (props) => {
  const {films, filmsShownCount} = props;

  const [activeMovieCardId, setActiveMovieCardId] = useState(1);


  const handleMovieSelect = (selectedMovieId) => {
    setActiveMovieCardId(selectedMovieId);
  };

  return (
    <div className="catalog__movies-list">
      {films.slice(0, filmsShownCount).map((film) => (
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
  films: FilmsPropType,
  filmsShownCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => (
  {
    filteredfilms: filterMoviesByGenre(state),
  }
);

export {FilmList};
export default connect(mapStateToProps)(FilmList);


