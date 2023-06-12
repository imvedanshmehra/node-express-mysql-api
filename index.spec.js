const app = require("./index");
const request = require("supertest");

describe("GET /api/shopping-list", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/shopping-list");
    expect(response.status).toBe(200);
  });
  it("should specify json in the content type header", async () => {
    const response = await request(app).get("/api/shopping-list");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("response should have id, name, quantity and bought properties", async () => {
    const response = await request(app).get("/api/shopping-list");
    expect(response.body.data[0].id).toBeDefined();
    expect(response.body.data[0].name).toBeDefined();
    expect(response.body.data[0].quantity).toBeDefined();
    expect(response.body.data[0].bought).toBeDefined();
  });
});

describe("POST /api/shopping-list", () => {
  it("should respond with a 201 status code", async () => {
    const response = await request(app).post("/api/shopping-list").send({
      name: "test-product",
      quantity: "1kg",
      bought: false,
    });
    expect(response.status).toBe(201);
  });
  it("should specify json in the content type header", async () => {
    const response = await request(app).post("/api/shopping-list").send({
      name: "test-product",
      quantity: "1kg",
      bought: false,
    });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("response should contain a success message if item is created successfully", async () => {
    const response = await request(app).post("/api/shopping-list").send({
      name: "test-product",
      quantity: "1kg",
      bought: false,
    });
    expect(response.body.message).toEqual(
      "Shopping list item created successfully!"
    );
  });
});

describe("PUT /api/shopping-list/:id", () => {
  it("should respond with a 200 status code", async () => {
    const response = await request(app).put("/api/shopping-list/1").send({
      bought: false,
    });
    expect(response.status).toBe(200);
  });
  it("should specify json in the content type header", async () => {
    const response = await request(app).put("/api/shopping-list/1").send({
      bought: false,
    });
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("response should contain a success message if item is updated successfully", async () => {
    const response = await request(app).put("/api/shopping-list/1").send({
      bought: false,
    });
    expect(response.body.message).toEqual("Item updated successfully!");
  });
});

describe("DELETE /api/shopping-list/:id", () => {
  it("should respond with a 201 status code", async () => {
    const response = await request(app).delete("/api/shopping-list/1");
    expect(response.status).toBe(201);
  });
  it("should specify json in the content type header", async () => {
    const response = await request(app).delete("/api/shopping-list/1");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
  it("response should contain a success message if items is deleted successfully", async () => {
    const response = await request(app).delete("/api/shopping-list/1");
    expect(response.body.message).toEqual("Item 1 deleted successfully");
  });
});
