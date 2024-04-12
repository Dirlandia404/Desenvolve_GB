#!/usr/bin/env node
import pegaArquivo from "./index.js";
import fs from "fs";
import chalk from "chalk";
const caminho = process.argv;
import listaValidada from "./http-valida.js";

async function imprimeLista(valida, resultado, identificador = "") {
  if (valida) {
    console.log(
      chalk.yellow("Lista validada"),
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado)
    );
  } else {
    console.log(
      chalk.yellow("Lista"),
      chalk.black.bgGreen(identificador),
      resultado
    );
  }
}
// async function processaTexto(caminho) {
//   const resultado = await pegaArquivo(caminho[2]);
//   console.log(chalk.red("Lista"), resultado);
// }
// processaTexto(caminho);
async function processaTexto(argumentos) {
  const caminho = argumentos[2];
  const valida = argumentos[3] === "--valida";

  try {
    fs.lstatSync(caminho);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(chalk.red("arquivo ou diretorio não existe"));
      return;
    }
  }
  if (fs.lstatSync(caminho).isFile()) {
    const resultado = await pegaArquivo(argumentos[2]);
    imprimeLista(valida, resultado);
  } else if (fs.lstatSync(caminho).isDirectory()) {
    const arquivos = await fs.promises.readdir(caminho);
    arquivos.forEach(async (nomeArquivo) => {
      const lista = await pegaArquivo(`${caminho}/${nomeArquivo}`);
      imprimeLista(valida, lista, nomeArquivo);
    });
  }
}
processaTexto(caminho);
