const movies = require('../fake-data/movies');

class MovieRepository {
  index() {
    const getAllContent = movies.map((data) => data);

    return getAllContent;
  }
}

module.exports = new MovieRepository();
