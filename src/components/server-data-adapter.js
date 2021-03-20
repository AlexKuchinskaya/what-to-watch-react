
export const adaptFilmsToClient = (data) => {
  const newData = data.slice();
  return newData.map((dataFilm) => {
    const adaptedFilm = Object.assign(
        {},
        dataFilm,
        {
          posterImage: dataFilm.poster_image,
          previewImage: dataFilm.preview_image,
          backgroundImage: dataFilm.background_image,
          backgroundColor: dataFilm.background_color,
          scoresCount: dataFilm.scores_count,
          runTime: dataFilm.run_time,
          isFavorite: dataFilm.is_favorite,
          videoLink: dataFilm.video_link,
          previewVideoLink: dataFilm.preview_video_link,
        }
    );
    delete adaptedFilm.poster_image;
    delete adaptedFilm.preview_image;
    delete adaptedFilm.background_image;
    delete adaptedFilm.background_color;
    delete adaptedFilm.scores_count;
    delete adaptedFilm.run_time;
    delete adaptedFilm.is_favorite;
    delete adaptedFilm.video_link;
    delete adaptedFilm.preview_video_link;
    return adaptedFilm;

  });
};

export const adaptPromoFilmToClient = (promoFilm) => {
  const adaptedPromoFilm = Object.assign(
      {},
      promoFilm,
      {
        posterImage: promoFilm.poster_image,
        previewImage: promoFilm.preview_image,
        backgroundImage: promoFilm.background_image,
        backgroundColor: promoFilm.background_color,
        scoresCount: promoFilm.scores_count,
        runTime: promoFilm.run_time,
        isFavorite: promoFilm.is_favorite,
        videoLink: promoFilm.video_link,
        previewVideoLink: promoFilm.preview_video_link,
      }
  );
  delete adaptedPromoFilm.poster_image;
  delete adaptedPromoFilm.preview_image;
  delete adaptedPromoFilm.background_image;
  delete adaptedPromoFilm.background_color;
  delete adaptedPromoFilm.scores_count;
  delete adaptedPromoFilm.run_time;
  delete adaptedPromoFilm.is_favorite;
  delete adaptedPromoFilm.video_link;
  delete adaptedPromoFilm.preview_video_link;
  return adaptedPromoFilm;
};

