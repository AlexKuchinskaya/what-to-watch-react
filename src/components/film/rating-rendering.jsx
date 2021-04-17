const FilmRatings = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const FilmRatingsNumber = {
  RATING_0: 0,
  RATING_3: 3,
  RATING_5: 5,
  RATING_8: 8,
  RATING_10: 10
};

export const checkFilmRating = (ratingNumber) => {
  if (ratingNumber >= FilmRatingsNumber.RATING_0 && ratingNumber < FilmRatingsNumber.RATING_3) {
    return FilmRatings.BAD;
  } else if (ratingNumber >= FilmRatingsNumber.RATING_3 && ratingNumber < FilmRatingsNumber.RATING_5) {
    return FilmRatings.NORMAL;
  } else if (ratingNumber > FilmRatingsNumber.RATING_5 && ratingNumber <= FilmRatingsNumber.RATING_8) {
    return FilmRatings.GOOD;
  } else if (ratingNumber > FilmRatingsNumber.RATING_8 && ratingNumber < FilmRatingsNumber.RATING_10) {
    return FilmRatings.VERY_GOOD;
  } else {
    return FilmRatings.AWESOME;
  }
};
