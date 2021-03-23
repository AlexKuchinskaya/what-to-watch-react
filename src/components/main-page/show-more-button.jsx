import React, { useState } from 'react';
import {filterMoviesByGenre, getCurrentFilmsShownCount, getFilmList} from '../../selectors/selectors';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
const ShowMoreButton = (props) => {

  const {handleShowMoreButton} = props;
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreButton}>Show more</button>
    </div>
  );
};


ShowMoreButton.propTypes = {
  // filmsShownCount: PropTypes.number.isRequired,
  // filteredfilms: FilmsPropType,
  handleShowMoreButton: PropTypes.func.isRequired,
};

export default ShowMoreButton;

