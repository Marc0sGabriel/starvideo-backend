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
}

module.exports = new MoviesController();
