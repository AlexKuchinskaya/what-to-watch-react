export const TabsSelectedFilmMock = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Fantastic_Beasts.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Fantastic_Beasts.jpg`,
  backgroundColor: `#ffffff`,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
  rating: 8.9,
  scoresCount: 240,
  director: `David Yates`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};

export const similarFilmsMock = [
  TabsSelectedFilmMock
];

export const TabsReviewsMock = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];
