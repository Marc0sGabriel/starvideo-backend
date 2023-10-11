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
    const removeContent = movies.findIndex((data) => data.id == id);

    if (removeContent > -1) {
      movies.splice(removeContent, 1);
    }
  }
}

module.exports = new MovieRepository();
