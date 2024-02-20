import type { PostgresDb } from "@fastify/postgres";

export type WithDB = {
  db: PostgresDb;
};
