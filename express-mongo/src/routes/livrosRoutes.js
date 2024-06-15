import express from "express";
import LivroController from "../controllers/livroController.js";
const routes = express.Router();

//maior complexidade para a menor
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivrosPorId);
routes.post("/livros", LivroController.criarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);
export default routes;
