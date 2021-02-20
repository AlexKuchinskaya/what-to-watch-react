import React from 'react';
import Logo from '../logo/logo';
import {Link, useParams} from 'react-router-dom';
import Footer from '../footer/footer';
import {filmsListPropTypes} from '../../types/types';

const MoviePage = (props) => {
  const {films} = props;
  let {id} = useParams();
  let idNumber = parseInt(id, 10);
  const selectedMovie = films.find((film) => {
    return film.id === idNumber;
  });
  const {backgroundImage, name, genre, released, posterImage, rating, director, starring, description} = selectedMovie;

  const similarMovies = films.filter((film) => {
    if (film.id !== selectedMovie.id) {
      return film.genre === genre;
    }
  });
  console.log(`similarMovies`, similarMovies)

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

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{rating}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">240 ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

              <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

              <p className="movie-card__director"><strong>Director: {director}</strong></p>

              <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {similarMovies.map((similarMovie, index) =>
            <article key={`${index}-${similarMovie.videoLink}`} className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src={similarMovie.previewImage}  alt={similarMovie.name} width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <Link className="small-movie-card__link" to="/">{similarMovie.name} </Link>
              </h3>
            </article>
          )}
        </div>
      </section>

      <Footer />
    </div>
  </ >;
};

MoviePage.propTypes = filmsListPropTypes;
export default MoviePage;
