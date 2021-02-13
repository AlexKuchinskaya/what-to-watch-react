import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="movie-card">
      <header className="page-header movie-card__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
      </header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
};

export default NotFoundPage;
