import t from "node:test";
import assert from "node:assert";
import { truncateTimestamp } from "./time-spent";

t.describe("TimeSpent", () => {
  t.describe("truncateTimestamp", () => {
    t.it("should floor the timestamp to the nearest day", () => {
      const timestamp = "2021-08-01T12:34:56.789Z";
      const expected = "2021-08-01T00:00:00.000Z";
      assert.equal(truncateTimestamp(timestamp), expected);
    });
  });
});
