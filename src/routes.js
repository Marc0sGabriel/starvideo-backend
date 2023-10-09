const MoviesController = require('./controllers/MoviesController');

function routes(server, options, done) {
  server.get('/movies', MoviesController.show);
  server.get('/movies/:id', MoviesController.showByID);

  done();
}

module.exports = routes;
