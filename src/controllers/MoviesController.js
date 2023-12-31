const MoviesRepository = require('../repositories/MoviesRepository');

class MoviesController {
  async show(request, reply) {
    const allMovies = await MoviesRepository.index();

    reply.send(allMovies);
  }

  async showByID(request, reply) {
    const { id } = request.params;

    const movie = await MoviesRepository.findByID(id);

    if (!movie) {
      return reply.code(404).send({ error: 'Movie or TV show not found!' });
    }

    return reply.code(200).send(movie);
  }

  async store(request, reply) {
    const {
      title,
      category,
      genre,
      videoID,
      imageCover,
      seasons,
      publishedAt,
    } = request.body;

    const isAlreadyExistsMovie = MoviesRepository.findByTitle(title);
    const requiredFields = [
      'title',
      'category',
      'genre',
      'videoID',
      'imageCover',
    ];

    const missingFields = requiredFields.find((field) => !request.body[field]);

    if (missingFields) {
      reply.code(400).send({ error: `${missingFields} is required!` });
    }

    if (isAlreadyExistsMovie) {
      reply.code(400).send({ error: 'Movie or TV Show already exists!' });
    }

    const createdContent = await MoviesRepository.create({
      title,
      category,
      genre,
      videoID,
      imageCover,
      seasons,
      publishedAt,
    });

    return reply.code(201).send(createdContent);
  }

  async update(request, reply) {
    const { title, category, genre, videoID, imageCover } = request.body;
    const { id } = request.params;

    const isAlreadyExistsMovie = MoviesRepository.findByTitle(title);

    if (isAlreadyExistsMovie) {
      return reply.code(400).send({ error: 'Content already exists!' });
    }

    await MoviesRepository.update({
      id,
      title,
      category,
      genre,
      videoID,
      imageCover,
    });

    return reply.code(200).send();
  }

  async delete(request, reply) {
    const { id } = request.params;
    const existContent = MoviesRepository.findByID(id);

    await MoviesRepository.delete({ id });

    if (!existContent) {
      return reply.code(404).send({ error: 'Movie or TV Show not exists!' });
    }

    return reply.code(200).send();
  }
}

module.exports = new MoviesController();
