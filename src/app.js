const fastify = require('fastify');
const routes = require('./routes');
const cors = require('@fastify/cors');
require('dotenv');

const server = fastify({ logger: true });

server.register(cors, {
  origin: /localhost\:5173/,
  credentials: true,
});

server.register(routes);

server.listen({ port: process.env.PORT || 3333 }, (err, address) => {
  console.log('🔥 Server running!');
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
