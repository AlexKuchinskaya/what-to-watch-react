import React from 'react';
import Logo from '../logo/logo';
import {Link, useParams} from 'react-router-dom';
import Footer from '../footer/footer';
import {filmsListPropTypes} from '../../types/types';
import Tabs from './tabs';
import MovieInDetails from './tab-details';
import MovieReviews from './tab-reviews';
import MovieOverview from './tab-overview';
import SimilarMovies from './similar-movies';

const MoviePage = (props) => {
  const {films} = props;

  let {id} = useParams();
  let idNumber = parseInt(id, 10);
  const selectedMovie = films.find((film) => {
    return film.id === idNumber;
  });
  const {backgroundImage, name, genre, released, posterImage} = selectedMovie;

  const similarMovies = films.filter((film) => {
    if (film.id !== selectedMovie.id) {
      return film.genre === genre;
    }
    return null;
  });

  return <>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo isLogoLinkLight={false}/>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <Tabs>
            <div label="Overview">
              <MovieOverview selectedMovie={selectedMovie}/>
            </div>
            <div label="Details">
              <MovieInDetails selectedMovie={selectedMovie} />
            </div>
            <div label="Reviews">
              <MovieReviews />
            </div>
          </Tabs>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <SimilarMovies similarMovies={similarMovies}/>
      </section>

      <Footer />
    </div>
  </ >;
};

MoviePage.propTypes = filmsListPropTypes;
export default MoviePage;
