const filmRatings = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};
const RATING_0 = 1;
const RATING_3 = 3;
const RATING_5 = 5;
const RATING_8 = 8;
const RATING_10 = 10;

export const checkFilmRating = (ratingNumber) => {
  if (ratingNumber >= RATING_0 && ratingNumber < RATING_3) {
    return filmRatings.BAD;
  } else if (ratingNumber >= RATING_3 && ratingNumber < RATING_5) {
    return filmRatings.NORMAL;
  } else if (ratingNumber > RATING_5 && ratingNumber <= RATING_8) {
    return filmRatings.GOOD;
  } else if (ratingNumber > RATING_8 && ratingNumber < RATING_10) {
    return filmRatings.VERY_GOOD;
  } else {
    return filmRatings.AWESOME;
  }
};
