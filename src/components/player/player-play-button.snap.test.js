import React from 'react';
import {render} from '@testing-library/react';
import PlayerPlayButtonSvg from './player-play-button';

it(`Should PlayerPalayButton render correctly`, () => {
  const {container} = render(<PlayerPlayButtonSvg />);
  expect(container).toMatchSnapshot();
});
