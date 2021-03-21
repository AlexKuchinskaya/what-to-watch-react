import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {ratingNumberList} from '../../const/rating-consts';
import {getRandomInteger} from '../../utils/utils';
import Logo from '../logo/logo';
import {connect} from "react-redux";
import {addReview} from "../../store/api-actions";
import browserHistory from '../../browser-history';
import {FILMS_PATH} from '../../const/routes-path';
import {getFilmList, getSelectedFilm} from '../../selectors/selectors';

const MIN_RATING = 1;
const MAX_RATING = 10;
const getRandomRatingNumber = getRandomInteger(MIN_RATING, MAX_RATING);
const ReviewAdding = ({onSubmitFormReview, isErrorCommentPosting, movieId, selectedMovie}) => {
  let idNumber = parseInt(movieId, 10);


  const [review, setReview] = useState();
  const handleTextareaChange = (evt) => {
    setReview(evt.target.value);
  };

  const [rating, setRating] = useState({
    ratingValue: 0,
    isRatingChecked: false
  });

  const handleFilmRatingInput = (evt) => {
    const {value, checked} = evt.target;
    setRating({ratingValue: value, isRatingChecked: checked});
  };

  const {ratingValue} = rating;
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
    browserHistory.push(`/${FILMS_PATH}/${idNumber}`);
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

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={selectedMovie.posterImage} alt={selectedMovie.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {isErrorCommentPosting && (
          <div >
            <p style={{color: `yellow`, backgroundColot: `#12baac`}}>We are so sorry, but there were produced some erros while sending your comment. <br/> Please, try to post it later </p>
          </div>
        )}
        <form
          action="#"
          onSubmit={handleSubmit}
          className="add-review__htmlForm"
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
                    checked={ratingNumber === ratingValue ? `checked` : ``}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingNumber}`}>{`Rating ${ratingNumber}`}</label>
                </React.Fragment>
              )}
            </div>
          </div>

          <div className="add-review__text">
            <textarea onChange={handleTextareaChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={review}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
const mapStateToProps = (state, ownProps) => (
  {
    movieId: ownProps.match.params.id,
    films: getFilmList(state),
    selectedMovie: getSelectedFilm(state, parseInt(ownProps.match.params.id, 10)),
    isErrorCommentPosting: state.isErrorCommentPosting,
  });

const mapDispatchToProps = (dispatch) => ({
  onSubmitFormReview(id, reviewData) {
    dispatch(addReview(id, reviewData));
  }
});

export {ReviewAdding};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewAdding);
