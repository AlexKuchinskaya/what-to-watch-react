import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films, promoFilm} from './components/mocks/mocks';

ReactDOM.render(
    <App
      films = {films}
      promoFilm = {promoFilm}
      isLogoLinkLight = {true}
    />,
    document.querySelector(`#root`)
);
