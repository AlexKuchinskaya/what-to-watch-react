import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

const NotFoundPage = () => {
  return (
    <section className="movie-card">
      <header className="page-header movie-card__head">
        <Logo />
      </header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
};

export default NotFoundPage;
