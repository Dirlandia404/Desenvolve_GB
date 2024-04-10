//require função node que puxa codigo de outro lugar

const dados = require("./client.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

const ClienteJson = JSON.parse(clienteEmString);
console.log(ClienteJson);
console.log(ClienteJson.nome);
