import { describe, test } from "node:test";
import assert from "node:assert";
import { extractYMD } from "./extractYMD";

describe(extractYMD.name, () => {
  test("should extract year, month, and day from a date string", () => {
    const date = "2022-01-01";
    const expected = ["2022", "01", "01"];
    const result = extractYMD(date);
    assert.equal(result[0], expected[0]);
    assert.equal(result[1], expected[1]);
    assert.equal(result[2], expected[2]);
  });
});
