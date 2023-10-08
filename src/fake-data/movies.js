const movies = [
  {
    id: '1',
    title: 'The Godfather',
    category: 'Movie',
    genre: 'Drama/Mafia',
    imageCover: 'https://example.com/the-godfather-cover.jpg',
    publishedAt: '1972-03-14',
    videoID: 'a5gCLOo3qzU',
  },
  {
    id: '2',
    title: 'Interstellar',
    category: 'Movie',
    genre: 'Science fiction',
    imageCover: 'https://example.com/interstellar-cover.jpg',
    publishedAt: '2014-11-07',
    videoID: 'zSWdZVtXT7E',
  },
  {
    id: '3',
    title: 'Breaking Bad',
    category: 'TV Show',
    genre: 'Drama',
    imageCover: 'https://example.com/breaking-bad-cover.jpg',
    publishedAt: '2008-01-20',
    videoID: 'XZ8daibM3AE',
    seasons: {
      season1: [
        {
          episode1: 'pilot',
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Stranger Things',
    category: 'TV Show',
    genre: 'Science fiction',
    imageCover: 'https://example.com/stranger-things-cover.jpg',
    publishedAt: '2016-07-15',
    videoID: 'XWxyRG_tckY',
    seasons: {
      season1: [
        {
          episode1: 'pilot',
        },
      ],
    },
  },
  {
    id: '5',
    title: 'The Avengers',
    category: 'Movie',
    genre: 'Action/Supeheroes',
    imageCover: 'https://example.com/the-avengers-cover.jpg',
    publishedAt: '2012-04-11',
    videoID: 'eOrNdBpGMv8',
  },
  {
    id: '6',
    title: 'Naruto Shippuden',
    category: 'Anime',
    genre: 'Drama',
    imageCover: 'https://example.com/naruto.jpg',
    publishedAt: '2004-04-11',
    videoID: 'eOrNdBpGMv8',
    seasons: {
      season1: [
        {
          episode1: 'naruto begins',
        },
      ],
    },
  },
  {
    id: '7',
    title: 'Jujutsu Kaisen',
    category: 'Anime',
    genre: 'Action',
    imageCover: 'https://example.com/jujutsu.jpg',
    publishedAt: '2019-04-11',
    videoID: 'eOrNdBpGMv8',
    seasons: {
      season1: [
        {
          episode1: 'pilot',
        },
      ],
    },
  },
];

module.exports = movies;
