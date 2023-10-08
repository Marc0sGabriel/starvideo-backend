const movies = require('./fake-data/movies');

function routes(server, options, done) {
  server.get('/movies', (request, reply) => {
    reply.send(movies);
  });

  done();
}

module.exports = routes;
