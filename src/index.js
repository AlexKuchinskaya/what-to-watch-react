import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsMock} from './mocks/films-mocks';
import {promoFilm} from './mocks/promo-film-mocks';

ReactDOM.render(
    <App
      films = {filmsMock}
      promoFilm = {promoFilm}
    />,
    document.querySelector(`#root`)
);
