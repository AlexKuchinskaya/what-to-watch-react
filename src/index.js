import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const films = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Comedy`,
    released: 2014,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    name: `Bohemian Rhapsody`,
    genre: `Comedy`,
    released: 2014,
    image: `img/bohemian-rhapsody.jpg`
  },
  {
    name: `Macbeth`,
    genre: `Comedy`,
    released: 2014,
    image: `img/macbeth.jpg`
  },
  {
    name: `Aviator`,
    genre: `Comedy`,
    released: 2014,
    image: `img/aviator.jpg`
  },
  {
    name: `We need to talk about Kevin`,
    genre: `Comedy`,
    released: 2014,
    image: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    name: `What We Do in the Shadows`,
    genre: `Comedy`,
    released: 2014,
    image: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    name: `Revenant`,
    genre: `Comedy`,
    released: 2014,
    image: `img/revenant.jpg`
  },
  {
    name: `Johnny English`,
    genre: `Comedy`,
    released: 2014,
    image: `img/johnny-english.jpg`
  },
  {
    name: `Shutter Island`,
    genre: `Comedy`,
    released: 2014,
    image: `img/shutter-island.jpg`
  },
  {
    name: `Pulp Fiction`,
    genre: `Comedy`,
    released: 2014,
    image: `img/pulp-fiction.jpg`
  },
  {
    name: `No Country for Old Men`,
    genre: `Comedy`,
    released: 2014,
    image: `img/no-country-for-old-men.jpg`
  },
  {
    name: `Snatch`,
    genre: `Comedy`,
    released: 2014,
    image: `img/snatch.jpg`
  },
  {
    name: `Moonrise Kingdom`,
    genre: `Comedy`,
    released: 2014,
    image: `img/moonrise-kingdom.jpg`
  },
  {
    name: `Seven Years in Tibet`,
    genre: `Comedy`,
    released: 2014,
    image: `img/seven-years-in-tibet.jpg`
  },
  {
    name: `Midnight Special`,
    genre: `Comedy`,
    released: 2014,
    image: `img/midnight-special.jpg`
  },
  {
    name: `War of the Worlds`,
    genre: `Comedy`,
    released: 2014,
    image: `img/war-of-the-worlds.jpg`
  },
  {
    name: `Dardjeeling Limited`,
    genre: `Comedy`,
    released: 2014,
    image: `img/dardjeeling-limited.jpg`
  },
  {
    name: `Orlando`,
    genre: `Comedy`,
    released: 2014,
    image: `img/orlando.jpg`
  },
  {
    name: `Mindhunter`,
    genre: `Comedy`,
    released: 2014,
    image: `img/mindhunter.jpg`
  },
  {
    name: `Midnight Special`,
    genre: `Comedy`,
    released: 2014,
    image: `img/midnight-special.jpg`
  },
  {
    name: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    released: 2014,
    image: `img/the-grand-budapest-hotel-poster.jpg`
  }
];

ReactDOM.render(
    <App
      films = {films}
    />,
    document.querySelector(`#root`)
);
