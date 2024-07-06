import { describe, expect, it, jest } from "@jest/globals";
import Editora from "../../models/editora.js";

describe("testando o modelo Editora", () => {
  const objEditora = {
    nome: "CDC",
    cidade: "SP",
    email: "c@c.com",
  };
  it("Deve instanciar uma nova editora", () => {
    const editora = new Editora(objEditora);
    expect(editora).toEqual(expect.objectContaining(objEditora));
  });

  it.skip("Deve salvar editora no bd", () => {
    const editora = new Editora(objEditora);
    editora.salvar().then((dados) => {
      expect(dados.nome).toBe("CDC");
    });
  });
  it.skip("Deve salvar no bd sintaxe moderna", async () => {
    const editora = new Editora(objEditora);
    const dados = await editora.salvar();
    const retornado = await Editora.pegarPeloId(dados.id);
    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
  it("Deve fazer uma chamada simulada ao BD", () => {
    const editora = new Editora(objEditora);
    editora.salvar = jest.fn().mockReturnValue({
      id: 1,
      nome: "CDC",
      cidade: "SP",
      email: "c@c.com",
      created_at: "2022-01-01T00:00:00.000Z",
      updated_at: "2022-01-01T00:00:00.000Z",
    });
    const retorno = editora.salvar();
    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });
});
