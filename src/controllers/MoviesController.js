const MoviesRepository = require('../repositories/MoviesRepository');

class MoviesController {
  async show(request, reply) {
    const allMovies = await MoviesRepository.index();

    reply.send(allMovies);
  }
}

module.exports = new MoviesController();
