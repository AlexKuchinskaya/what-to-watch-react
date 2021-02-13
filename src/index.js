import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './components/mocks/mocks';

ReactDOM.render(
    <App
      films = {films}
    />,
    document.querySelector(`#root`)
);
