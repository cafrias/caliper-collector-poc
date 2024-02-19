import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.route({
  method: "POST",
  url: "/",
  handler: async (request, reply) => {
    // TODO: Validate the request includes a valid envelope
    const envelope = request.body;

    // Write to filesystem
    // Here we'll store the Caliper Envelopes as they are received
    // in the local filesystem. This can be later migrated to
    // other tools like Hadoop for ETL.

    // Aggregate data to database

    return { hello: "world" };
  },
});

fastify
  .listen({ port: 1234 })
  .then((address) => console.log(`Server listening on ${address}`))
  .catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });
