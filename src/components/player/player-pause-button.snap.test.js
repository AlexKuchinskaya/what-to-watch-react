import React from 'react';
import {render} from '@testing-library/react';
import PlayerPauseButtonSvg from './player-pause-button';

it(`Should PlayerPauseButton render correctly`, () => {
  const {container} = render(<PlayerPauseButtonSvg />);
  expect(container).toMatchSnapshot();
});
