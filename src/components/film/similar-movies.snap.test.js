import React from 'react';
import {render} from '@testing-library/react';
import {similarFilmsMock} from './mocks-snapshot/mocks-snapshot.js';
import SimilarMovies from './similar-movies.jsx';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

test(`Should SimilarMovies render correctly`, () => {
  const history = createMemoryHistory();
  const {container} = render(
      <Router history={history}>
        <SimilarMovies similarMovies={similarFilmsMock}/>
      </Router>
  );
  expect(container).toMatchSnapshot();
});
