import express from "express";
import conectaDB from "./config/dbconect.js";
import routes from "./routes/index.js";

const conexao = await conectaDB();

conexao.on("error", (erro) => {
  console.log("erro conexao", erro);
});

conexao.once("open", () => {
  console.log("conectado");
});

const app = express();
routes(app);

export default app;
