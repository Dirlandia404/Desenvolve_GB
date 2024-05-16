const btnFiltrarLivros = document.querySelectorAll(".btn");
btnFiltrarLivros.forEach((btnFiltrarLivros) =>
  btnFiltrarLivros.addEventListener("click", filtrarLivros)
);

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados =
    categoria == "disponíveis"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);

  exibirLivros(livrosFiltrados);

  if (categoria == "disponíveis") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveis(valorTotal);
  }
}
function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
  elementoValorTotalLivrosDisponiveirs.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `;
}
