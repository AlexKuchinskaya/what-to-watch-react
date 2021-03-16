export const ActionType = {
  CHANGE_GENRE: `films/changegenre`,
  GET_NEW_FILMLIST_BY_GENRE: `films/getnewfilmlistbygenre`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getNewFilmlistByGenre: () => ({
    type: ActionType.GET_NEW_FILMLIST_BY_GENRE,
  })
};
