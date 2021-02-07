import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {films} = props;

  return (
    <MainPage films={films} />
  );
};

export default App;


