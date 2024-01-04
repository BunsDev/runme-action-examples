import { describe, it } from "node:test";
import * as assert from "node:assert";

import buildFastify from "./server";

describe("Http API Test suite", async () => {
  it("Get / route", () => {
    const fastify = buildFastify();

    fastify.inject(
      {
        method: "GET",
        url: "/",
      },
      (err, response) => {
        assert.strictEqual(err, null);
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.statusMessage, "OK");
      }
    );
  });
});
