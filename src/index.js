import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {filmsMock} from './mocks/films';
import {promoFilm} from './mocks/promo-film';
import {reducer} from './store/reducer';
import { elementType } from 'prop-types';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        films = {filmsMock}
        promoFilm = {promoFilm}
      />
    </Provider>,
    document.querySelector(`#root`)
);
