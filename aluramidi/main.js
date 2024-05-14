function tocaSom(idTeclaAudio) {
  const elemento = document.querySelector(idTeclaAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado ou seletor invalido");
  }
}

const listaTeclas = document.querySelectorAll(".tecla");
// let contador = 0;
// while (contador < listaTeclas.length) {
//   const teclas = listaTeclas[contador];
//   const instrumento = teclas.classList[1];
//   const idAudio = `#som_${instrumento}`;

//   teclas.onclick = function () {
//     tocaSom(idAudio);
//   };
//   contador++;
// }
for (let contador = 0; contador < listaTeclas.length; contador++) {
  const teclas = listaTeclas[contador];
  const instrumento = teclas.classList[1];
  const idAudio = `#som_${instrumento}`;

  teclas.onclick = function () {
    tocaSom(idAudio);
  };

  teclas.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      teclas.classList.add("ativa");
    }
  };
  teclas.onkeyup = function () {
    teclas.classList.remove("ativa");
  };
}
