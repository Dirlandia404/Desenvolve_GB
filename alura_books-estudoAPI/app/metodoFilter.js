const btnFiltrarLivros = document.querySelectorAll(".btn");
btnFiltrarLivros.forEach((btnFiltrarLivros) =>
  btnFiltrarLivros.addEventListener("click", filtrarLivros)
);

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  let livrosFiltrados = livros.filter(
    (livros) => livros.categoria == categoria
  );
  console.table(livrosFiltrados);

  exibirLivros(livrosFiltrados);
}
