import t from "node:test";
import assert from "node:assert";
import fs from "node:fs/promises";
import { processEnvelope } from "./aggregator";
import { Envelope } from "../models/envelope";
import { TIMESPENT_STORAGE_PATH } from "../config";

t.describe(processEnvelope.name, () => {
  t.test("processes a ToolUseEvent", async () => {
    const envelope: Envelope = {
      dataVersion: "1.0",
      sendTime: "2021-08-01T12:34:56.789Z",
      sensor: "web",
      data: [
        {
          "@context": "http://purl.imsglobal.org/ctx/caliper/v1p2",
          actor: "https://example.com/users/123",
          eventTime: "2021-08-01T12:34:56.789Z",
          id: "https://example.com/events/456",
          object: "https://example.com/activities/789",
          group: "https://example.com/classes/101",
          type: "ToolUseEvent",
          action: "Used",
          generated: {
            items: [
              {
                metric: "MinutesOnTask",
                metricValue: 42,
              },
            ],
          },
        },
      ],
    };
    await processEnvelope(envelope);

    const written = await fs.readFile(TIMESPENT_STORAGE_PATH, "utf8");

    assert.equal(written, "2021-08-01T00:00:00.000Z,101,123,789,42\n");

    await fs.rm(TIMESPENT_STORAGE_PATH);
  });
});
