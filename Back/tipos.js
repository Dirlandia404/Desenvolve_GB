// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol("descricao_do_simbolo");

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
  [meuSimbolo]: "valor_do_simbolo",
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'
let exemplo = 10; // exemplo é do tipo número (Number)
console.log(exemplo); // Saída: 10

exemplo = "Olá, mundo!"; // agora exemplo é uma string (String)
console.log(exemplo); // Saída: Olá, mundo!

exemplo = true; // exemplo agora é um booleano (Boolean)
console.log(exemplo); // Saída: true
