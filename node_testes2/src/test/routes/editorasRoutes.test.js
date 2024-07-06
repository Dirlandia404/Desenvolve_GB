import {
  afterEach,
  beforeEach,
  describe,
  jest,
  expect,
  it,
} from "@jest/globals";
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
  it("Deve não adicionar nada ao passar o body vazio", async () => {
    await request(app).post("/editoras").send({}).expect(400);
  });
});
describe("GET em editoras/:id", () => {
  it("Deve retornar recurso selecionado", async () => {
    await request(app).get(`/editoras/${idResposta}`).expect(200);
  });
});

describe("PUT em editoras/:id", () => {
  it.each([
    [
      "nome",
      {
        nome: "Editora Teste Atualizada",
      },
    ],
    [
      "email",
      {
        email: "e@e.com",
      },
    ],
    [
      "nome e email",
      {
        nome: "Editora Teste Atualizada2",
        email: "e@e.com",
      },
    ],
  ])("Deve atualizar %s", async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, "request");
    await requisicao
      .request(app)
      .put(`/editoras/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe("DELETE em editoras/:id", () => {
  it("Deve excluir uma editora", async () => {
    await request(app).delete(`/editoras/${idResposta}`).expect(200);
  });
});
