import React from 'react';
import FilmList from '../films-list/films-list';
import Logo from '../logo/logo';
import {filmsListPropTypes} from '../../types/types';

const MyList = (props) => {
  const {films} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLogoLinkLight={false}/>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <FilmList films={films}/>
        </div>
      </section>

      <footer className="page-footer">
        <Logo isLogoLinkLight={true}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = filmsListPropTypes;
export default MyList;
