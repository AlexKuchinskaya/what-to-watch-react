import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getAllGenresFromState, getCurrentGenreSelector, getFilmList} from '../../selectors/selectors';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';

const GenreList = (props) => {
  const {allGenres, activeGenre, onGenreClick} = props;
  console.log(`activeGenre`, activeGenre)
  console.log(`allGenres`, allGenres);

  return (
    <ul className="catalog__genres-list" >
      {allGenres.map((genre) => {
        return <li
          key={genre}
          className={`catalog__genres-item
          ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}
          onClick={(evt) => {
            evt.preventDefault();
            onGenreClick(genre);
          }}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>;
      })}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.string),
  onGenreClick: PropTypes.func,
};


const mapStateToProps = (state) => ({
  activeGenre: getCurrentGenreSelector(state),
  allGenres: getAllGenresFromState(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },

});
export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
