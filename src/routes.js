const MoviesController = require('./controllers/MoviesController');

function routes(server, options, done) {
  server.get('/movies', MoviesController.show);
  server.get('/movies/:id', MoviesController.showByID);
  server.post('/movies', MoviesController.store);
  server.put('/movies/:id', MoviesController.update);
  server.delete('/movies/:id', MoviesController.delete);
  done();
}

module.exports = routes;
