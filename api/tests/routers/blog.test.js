import request from "supertest";
import server from "../../server.js";

describe("Blog home", () => {
  it("should return json", async () => {
    const res = await request(server)
      .get("/blog")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });
});

afterAll((done) => {
  server.close();
  done();
});
