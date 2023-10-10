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
    const newContent = { id, title, category, genre, videoID, imageCover };
    movies.push(newContent);

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

  delete({ id }) {
    const removeContent = movies.findIndex((data) => data.id == id);

    if (removeContent > -1) {
      movies.splice(removeContent, 1);
    }
  }
}

module.exports = new MovieRepository();
