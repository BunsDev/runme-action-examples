import Fastify from "fastify";

function buildFastify() {
  const fastify = Fastify();
  fastify.get("/", function (request, reply) {
    reply.send({ hello: "world" });
  });

  return fastify;
}

export default buildFastify;
