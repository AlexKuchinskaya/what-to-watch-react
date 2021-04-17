import React from 'react';
import {render} from '@testing-library/react';
import MovieReviews from './tab-reviews';
import {TabsReviewsMock} from './mocks-snapshot/mocks-snapshot.js';
test(`Should MovieReviews render correctly`, () => {
  const {container} = render(<MovieReviews reviews={TabsReviewsMock} />);
  expect(container).toMatchSnapshot();
});
