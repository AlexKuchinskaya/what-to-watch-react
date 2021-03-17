import React from 'react';
import {filterMoviesByGenre, getCurrentFilmsShownCount} from '../../selectors/selectors';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
const ShowMoreButton = (props) => {

  const {onShowMoreButtonClick} = props;


  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
  );
};


const mapStateToProps = (state) => ({
  filteredfilms: filterMoviesByGenre(state),
  filmsShownCount: getCurrentFilmsShownCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.showMoreMovies());
  },

});

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
};
export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);

