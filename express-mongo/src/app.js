import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    nome: "livro 1",
    autor: "autor 1",
  },
  {
    id: 2,
    nome: "livro 2",
    autor: "autor 2",
  },
];

function buscaLivroPorId(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivroPorId(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json("livros criados");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivroPorId(req.params.id);
  livros[index].nome = req.body.nome;
  res.status(200).json(livros);
});
app.delete("/livros/:id", (req, res) => {
  const index = buscaLivroPorId(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("livro deletado");
});

export default app;
