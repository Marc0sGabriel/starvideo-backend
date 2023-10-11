const movies = require('../fake-data/movies');
const db = require('../database');

class MovieRepository {
  index() {
    const getAllContent = db.query('SELECT * FROM movies');

    return getAllContent;
  }

  findByID(id) {
    const getByID = db.query(`SELECT * FROM movies WHERE id = $1`, [id]);

    return getByID;
  }

  findByTitle(title) {
    const getByTitle = db.query(`SELECT title FROM movies WHERE title = $1`, [
      title,
    ]);

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
