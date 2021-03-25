import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import {ExtraClassNames} from '../header/header-class-utils';
import Logo from '../logo/logo';

const NotFoundPage = () => {
  return (
    <section className="movie-card">
      <Header extraClassName={ExtraClassNames.MOVIE_CARD_HEADER}>
        <Logo />
      </Header>

      <section className="game__screen">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
};

export default NotFoundPage;
