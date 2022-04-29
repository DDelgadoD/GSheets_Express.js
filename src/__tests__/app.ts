import request from "supertest";
import app from "../app";

describe("GET /google-sheet", () => {
  it("should return 200 & valid response if request param list is empity", async () => {
    const res = await request(app).get(`/google-sheet`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({
      Bitcoin: "30000",
      Doge: "0,13",
      USDT: "1",
      Ethereum: "3000",
      "Shiba Inu": "0,00035",
    });
  });
});

describe("GET /google-leaf", () => {
  test("should return 400 & valid error response", async () => {
    const res = await request(app).get(`/google-leaf`);
    expect(res.statusCode).toEqual(404);
    expect(res.body).toMatchObject({});
  });
});

describe("POST /bitcoin", () => {
  it("should return 200", async () => {
    const res = await request(app).post(`/bitcoin`).send({ Bitcoin: 30000 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({});
  });
});
