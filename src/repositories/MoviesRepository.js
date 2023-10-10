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

  create({ id, title, category, genre, videoID, imageCover }) {
    const newContent = movies.push({
      id,
      title,
      category,
      genre,
      videoID,
      imageCover,
    });

    return newContent;
  }

  update({ id, title, category, genre, videoID, imageCover }) {
    const movie = movies.find((data) => data.id === id);
    Object.assign(movie, {
      id,
      title,
      category,
      genre,
      videoID,
      imageCover,
    });
  }
}

module.exports = new MovieRepository();
