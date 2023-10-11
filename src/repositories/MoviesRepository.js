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

  create({
    title,
    category,
    genre,
    videoID,
    imageCover,
    seasons,
    publishedAt,
  }) {
    const newContent = db.query(
      `INSERT INTO movies(
        title,
        category,
        genre,
        videoID,
        imageCover,
        seasons,
        publishedAt
      )
       VALUES($1, $2, $3, $4, $5, $6, $7)
      `,
      [title, category, genre, videoID, imageCover, seasons, publishedAt]
    );

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
