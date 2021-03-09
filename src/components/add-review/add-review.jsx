import React, {useState} from 'react';
import {ratingNumberList} from '../../const/rating-consts';
import {getRandomInteger} from '../../utils/utils';
import Logo from '../logo/logo';

const MIN_RATING = 1;
const MAX_RATING = 10;
const getRandomRatingNumber = getRandomInteger(MIN_RATING, MAX_RATING);
const ReviewAdding = () => {

  const [review, setReview] = useState();
  const handleTextareaChange = (evt) => {
    setReview(evt.target.value);
  };

  const [rating, setRating] = useState({
    ratingValue: getRandomRatingNumber.toString(),
    isRatingChecked: false
  });

  const handleFilmRatingInput = (evt) => {
    const {value, checked} = evt.target;
    setRating({ratingValue: value, isRatingChecked: checked});
  };
  const {ratingValue} = rating;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
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
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          onSubmit={(evt) => evt.preventDefault()}
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

export default ReviewAdding;
