import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FilmPropType} from '../../types/types';
import {useHistory, Link} from 'react-router-dom';
import Player from '../player/player';


const MovieCard = ({film, onMovieSelect, activeMovieCardId, isPlayerShown}) => {
  const {id, name, previewImage, previewVideoLink} = film;
  console.log(`isPlayerShown`, isPlayerShown)
  const [isPreviewVideoShown, setIsPreviewVideoShown] = useState(false);


  const showPlayer = () => {
    if (isPreviewVideoShown && id === activeMovieCardId) {
      return <Player defaultIsPlaying={true} previewVideoLink={previewVideoLink} name={name} activeMovieCardId/>;
    }
    return null;
  };

  const handleFilmMouseHover = () => {
    onMovieSelect(id);
    setIsPreviewVideoShown(true);
  };

  const history = useHistory();

  const handleMovieDescriptionRedirect = () => {
    history.push(`/films/${activeMovieCardId}`);
  };
  return (
    <article onMouseOver={handleFilmMouseHover} onClick={handleMovieDescriptionRedirect} className="small-movie-card catalog__movies-card">
      {/* <Player defaultIsPlaying={true} previewVideoLink={previewVideoLink} name={name}/> */}
      {showPlayer()}
      <div className="small-movie-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${activeMovieCardId}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: FilmPropType,
  onMovieSelect: PropTypes.func.isRequired,
  activeMovieCardId: PropTypes.number.isRequired
};

export default MovieCard;

