const MoviesController = require('./controllers/MoviesController');

function routes(server, options, done) {
  server.get('/movies', MoviesController.show);
  server.get('/movies/:id', MoviesController.showByID);
  server.post('/movies', MoviesController.store);

  done();
}

module.exports = routes;
