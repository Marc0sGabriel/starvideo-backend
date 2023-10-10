const movies = require('../fake-data/movies');

class MovieRepository {
  index() {
    const getAllContent = movies.map((data) => data);

    return getAllContent;
  }

  findByID(id) {
    const getByID = movies.find((data) => data.id === id);

    return getByID;
  }

  findByTitle(title) {
    const getByTitle = movies.find((data) => data.title === title);

    return getByTitle;
  }
}

module.exports = new MovieRepository();
