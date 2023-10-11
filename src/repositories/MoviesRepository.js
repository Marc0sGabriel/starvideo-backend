const movies = require('../fake-data/movies');
const db = require('../database');
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
    const removeContent = db.query(`DELETE * FROM movies WHERE id = $1`, [id]);
    return removeContent;
  }
}

module.exports = new MovieRepository();
