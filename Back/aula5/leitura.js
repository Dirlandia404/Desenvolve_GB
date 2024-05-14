const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
}
//encontrar  clientes
const encontrado = encontrar(clientes, "nome", "Kirby");
const telefoneEncontrado = encontrar(clientes, "telefone", "9916828153");
console.log(encontrado);
console.log(telefoneEncontrado);
