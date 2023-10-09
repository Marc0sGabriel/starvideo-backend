const MoviesController = require('./controllers/MoviesController');

function routes(server, options, done) {
  server.get('/movies', MoviesController.show);

  done();
}

module.exports = routes;
