let livros = [];

const endpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosAPI();

async function getBuscarLivrosAPI() {
  const res = await fetch(endpoint);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  exibirLivros(livrosComDesconto);
}
