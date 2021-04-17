import React from 'react';
import {render} from '@testing-library/react';
import {TabsSelectedFilmMock} from './mocks-snapshot/mocks-snapshot.js';
import MovieInDetails from './tab-details';
test(`Should MovieInDetails render correctly`, () => {
  const {container} = render(<MovieInDetails selectedMovie={TabsSelectedFilmMock} />);
  expect(container).toMatchSnapshot();
});
