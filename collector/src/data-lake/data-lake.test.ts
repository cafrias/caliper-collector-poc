import fs from "fs/promises";
import { describe, test } from "node:test";
import assert from "node:assert";
import { saveToDataLake } from "./data-lake";

describe(saveToDataLake.name, () => {
  test("should save an envelope to the data lake", async () => {
    const timestamp = "2022-01-01T00:00:00.000Z";
    const envelope = JSON.stringify({
      sensor: "sensor-1",
      sendTime: timestamp,
      dataVersion: "1.0.0",
      data: [
        {
          "@context": "http://purl.imsglobal.org/ctx/caliper/v1p2",
          id: "urn:uuid:1",
          type: "Event",
          action: "Logged In",
          dateCreated: timestamp,
        },
      ],
    });
    const result = await saveToDataLake(timestamp, envelope);

    assert.match(result, /\/2022\/01\/01\/2022-01-01T00:00:00.000Z-.+\.json/);
    assert.equal(await fs.readFile(result, "utf-8"), envelope);

    await fs.rm(result);
  });
});
