export const FILMS_PATH = `films`;

export const Routes = {
  MAIN: `/`,
  MY_LIST: `/mylist`,
  LOG_IN: `/login`,
  FILMS_ID: `/${FILMS_PATH}/:id`,
  FILMS_ID_REVIEW: `/${FILMS_PATH}/:id/review`,
  PLAYER: `/player/:id`,
  PLAYER_NO_ID: `/player`
};

export const APIRoute = {
  FILMS: `/films`,
  FILM_PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  FAVORITE_FILMS: `/favorite`,
};
