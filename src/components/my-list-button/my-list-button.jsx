import React from 'react';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const/utils';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';
import {Routes} from '../../const/routes-path';
import {addNewFavoriteFilm} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getIsFilmFavorite} from '../../store/films-data-interaction/selectors';

const MyListButton = ({authorizationStatus, favoriteMovieId, isFilmFavorite, onMyListButtonClick}) => {

  const handleMyListClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onMyListButtonClick(favoriteMovieId, !isFilmFavorite);
    } else {
      browserHistory.push(`${Routes.LOG_IN}`);
    }
  };
  return (

    <button onClick={handleMyListClick} className="btn btn--list movie-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>

  );
};


MyListButton.propTypes = {
  favoriteMovieId: PropTypes.string.isRequired,
  isFilmFavorite: PropTypes.bool.isRequired,
  onMyListButtonClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => (
  {
    authorizationStatus: getAuthorizationStatus(state),
    isFilmFavorite: getIsFilmFavorite(state)
  }
);

const mapDispatchToProps = (dispatch) => ({
  onMyListButtonClick(id, status) {
    dispatch(addNewFavoriteFilm(id, status));
  },
});
export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);

