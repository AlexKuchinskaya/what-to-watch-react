import React, {useState} from 'react';
import {FilmPropType} from '../../types/types';

const MovieCard = (props) => {
  const {id, name, previewImage} = props.film;

  const [activeMovieCardId, setActiveFilm] = useState({
    id: 0
  });
  console.log([activeMovieCardId, setActiveFilm]);
  const handleFilmMouseHover = (evt) => {
    const SelectedMovieCardId = evt.currentTarget.id;
    console.log(`SelectedMovieCardId`, SelectedMovieCardId)
    // setActiveFilm();
  };
  return <>;
    <article onMouseOver={(handleFilmMouseHover)} className="small-movie-card catalog__movies-card" id={id}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  </>;
};

MovieCard.propTypes = {
  film: FilmPropType
};

export default MovieCard;

