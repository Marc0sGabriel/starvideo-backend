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

  update({
    id,
    title,
    category,
    genre,
    videoID,
    imageCover,
    publishedAt,
    seasons,
  }) {
    const movie = db.query(
      `
    UPDATE movies
    SET
    title = $2,
    category = $3,
    genre = $4,
    videoID = $5,
    imageCover = $6,
    publishedAt = $7,
    seasons = $8
    WHERE id = $1
    RETURNING *
    `,
      [id, title, category, genre, videoID, imageCover, publishedAt, seasons]
    );

    return movie;
  }

  delete({ id }) {
    const removeContent = db.query(`DELETE FROM movies WHERE id = $1`, [id]);
    return removeContent;
  }
}

module.exports = new MovieRepository();
