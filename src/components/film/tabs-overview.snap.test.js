import React from 'react';
import {render} from '@testing-library/react';
import {TabsReviewsMock, TabsSelectedFilmMock} from './mocks-snapshot/mocks-snapshot.js';
import MovieOverview from './tab-overview.jsx';

test(`Should MovieOverview render correctly`, () => {
  const {container} = render(<MovieOverview selectedMovie={TabsSelectedFilmMock} reviews={TabsReviewsMock}/>);
  expect(container).toMatchSnapshot();
});
