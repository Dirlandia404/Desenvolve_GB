import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "não há arquivo no diretorio"));
}

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map((captura) => ({
    [captura[1]]: [captura[2]],
  }));
  return resultados.length !== 0 ? resultados : "não ha links";
}

//async e await
async function pegaArquivo(caminhodoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhodoArquivo, encoding);
    return extraiLinks(texto);
  } catch (error) {
    trataErro(error);
  }
}
export default pegaArquivo;

// //assincrono - promises com then
// function pegaArquivo(caminhodoArquivo) {
//   const encoding = "utf-8";
//   fs.promises.readFile(caminhodoArquivo, encoding).then((texto) => {
//     console.log(chalk.green(texto)).catch((erro) => trataErro(erro));
//   });
// }

//versão anterior
// function pegaArquivo(caminhodoArquivo) {
//   const encoding = "utf-8";
//   fs.readFile(caminhodoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   });
// }
