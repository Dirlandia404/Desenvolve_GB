import { afterEach, beforeEach, describe } from "@jest/globals";
import app from "../../app.js";
import request from "supertest";

let server;
beforeEach(() => {
  const port = 3001;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe("GET em editoras", () => {
  it("Deve retornar uma lista de editoras", async () => {
    const resposta = await request(app)
      .get("/editoras")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(resposta.body[0].email).toEqual("m@m.com");
  });
});
let idResposta;
describe("POST em editoras/:id", () => {
  it("Deve adicionar uma nova editora", async () => {
    const resposta = await request(app)
      .post("/editoras")
      .send({
        nome: "Editora Teste",
        email: "e@e.com",
        cidade: "SP",
      })
      .expect(201);
    idResposta = resposta.body.content.id;
  });
});
describe("DELETE em editoras/:id", () => {
  it("Deve excluir uma editora", async () => {
    await request(app).delete(`/editoras/${idResposta}`).expect(200);
  });
});
describe("DELETE em editoras/:id", () => {
  it("Deve retornar recurso selecionado", async () => {
    await request(app).get(`/editoras/${idResposta}`).expect(200);
  });
});
