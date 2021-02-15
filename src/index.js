import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {promoFilm} from './components/mocks/mocks';

ReactDOM.render(
    <App
      films = {films}
      promoFilm = {promoFilm}
    />,
    document.querySelector(`#root`)
);
