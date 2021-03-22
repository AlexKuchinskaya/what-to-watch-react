import React, {useState} from 'react';
// import {useParams} from 'react-router-dom';
import {ratingNumberList} from '../../const/rating-consts';
// import {getRandomInteger} from '../../utils/utils';
import Logo from '../logo/logo';
import {connect} from "react-redux";
import {addReview} from "../../store/api-actions";
import browserHistory from '../../browser-history';
import {getSelectedFilm} from '../../selectors/selectors';
import {AuthorizationStatus} from '../../const/utils';
import AvatarLogin from '../header/header-avatar';
import HeaderSignInLink from '../header/header-sign-in-link';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';

// const MIN_RATING = 1;
// const MAX_RATING = 10;
// const getRandomRatingNumber = getRandomInteger(MIN_RATING, MAX_RATING);
const ReviewAdding = ({onSubmitFormReview, isErrorCommentPosting, movieId, selectedMovie, isFormDisabled, userLoggedInInfo, authorizationStatus}) => {
  let idNumber = parseInt(movieId, 10);


  const [review, setReview] = useState([]);
  const handleTextareaChange = (evt) => {
    setReview(evt.target.value);
    if (review.length < 50) {
      evt.target.setCustomValidity(`Please, introduce ${50 - review.length} more symbols to complete your comment`);
    } else if (review.length > 400) {
      evt.target.setCustomValidity(`Please, delete ${review.length - 400} symbols to complete your comment`);
    } else {
      evt.target.setCustomValidity(``);
    }
    evt.target.reportValidity();
  };

  const [rating, setRating] = useState({
    ratingValue: 0,
    isRatingChecked: false
  });

  const handleFilmRatingInput = (evt) => {
    const {value, checked} = evt.target;
    setRating({ratingValue: value, isRatingChecked: checked});
  };

  const {ratingValue, isRatingChecked} = rating;
  console.log(`ratingValue`, ratingValue);
  console.log(`isRatingChecked`, isRatingChecked);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`comment`, review);
    onSubmitFormReview(
        idNumber,
        {
          rating: ratingValue,
          comment: review,
        }
    );

  };
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={selectedMovie.backgroundImage} alt={selectedMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{selectedMovie.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          {authorizationStatus === AuthorizationStatus.AUTH ? <AvatarLogin /> : <HeaderSignInLink/>}
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={selectedMovie.posterImage} alt={selectedMovie.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {isErrorCommentPosting && (
          <div >
            <p style={{color: `yellow`}}>We are so sorry, but there were produced some erros while sending your comment. <br/> Please, try to post it later or check if you fullfilled all the fields </p>
          </div>
        )}
        <form
          action="#"
          onSubmit={handleSubmit}
          className="add-review__htmlForm"
          disabled={isFormDisabled}
        >
          <div className="rating">
            <div className="rating__stars">
              {ratingNumberList.map((ratingNumber, index) =>
                <React.Fragment key={`${index}-${ratingNumber}`}>
                  <input
                    onChange={handleFilmRatingInput}
                    className="rating__input" id={`star-${ratingNumber}`}
                    type="radio"
                    name="rating"
                    value={ratingNumber}
                    defaultChecked={isRatingChecked && ratingNumber === ratingValue ? true : false}
                    // checked={ratingNumber === ratingValue ? true : false}
                    disabled={isFormDisabled}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingNumber}`}>{`Rating ${ratingNumber}`}</label>
                </React.Fragment>
              )}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={handleTextareaChange}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={review}
              disabled={isFormDisabled}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={isFormDisabled} >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

ReviewAdding.propTypes = {
  selectedMovie: FilmPropType,
  movieId: PropTypes.string.isRequired,
  isErrorCommentPosting: PropTypes.bool.isRequired,
  isFormDisabled: PropTypes.bool,
  userLoggedInInfo: PropTypes.object.isRequired,
  onSubmitFormReview: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => (
  {
    movieId: ownProps.match.params.id,
    selectedMovie: getSelectedFilm(state, parseInt(ownProps.match.params.id, 10)),
    isErrorCommentPosting: state.isErrorCommentPosting,
    isFormDisabled: state.isFormDisabled,
    userLoggedInInfo: state.userLoggedInInfo,
    authorizationStatus: state.authorizationStatus,
  });

const mapDispatchToProps = (dispatch) => ({
  onSubmitFormReview(id, reviewData) {
    dispatch(addReview(id, reviewData, browserHistory));
  }
});

export {ReviewAdding};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewAdding);
