import Fastify from "fastify";
import rawBody from "fastify-raw-body";
import fastifyPostgres from "@fastify/postgres";
import { exit } from "node:process";
import { saveToDataLake } from "./data-lake/data-lake";
import { Envelope } from "./models/envelope";
import { processEnvelope } from "./aggregator/aggregator";

const fastify = Fastify({
  logger: true,
});

fastify.register(rawBody);

fastify.register(fastifyPostgres, {
  connectionString: "postgres://postgres@localhost/caliper-aggregator",
});

fastify.after((err) => {
  if (err) {
    console.error(err);
    exit(1);
  }

  fastify.route({
    method: "POST",
    url: "/",
    handler: async (request, reply) => {
      if (!request.rawBody) {
        return reply.code(400).send();
      }
      // TODO: Validate the request includes a valid envelope
      const envelope = request.body as Envelope;

      const result = await Promise.allSettled([
        saveToDataLake(envelope.sendTime, request.rawBody.toString()),
        processEnvelope(envelope, { db: fastify.pg }),
      ]);

      result.forEach((res) => {
        if (res.status === "rejected") {
          console.warn(res.reason);
        }
      });

      reply.code(201).send();
    },
  });
});

fastify
  .listen({ port: 1234 })
  .then((address) => console.log(`Server listening on ${address}`))
  .catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });
