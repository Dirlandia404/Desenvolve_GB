const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const play = new Audio("./sons/play.wav");
const pause = new Audio("./sons/pause.mp3");
const beep = new Audio("./sons/beep.mp3");

const iniciarOurPauseBt = document.querySelector("#start-pause span");
const iniciarOurPauseImg = document.querySelector(
  ".app__card-primary-butto-icon"
);
const temporizadorTela = document.querySelector("#timer");

musica.loop = true;

let tempoDecoridoSegundos = 1500;
let intervaloId = null;

const contagemRegressiva = () => {
  if (tempoDecoridoSegundos <= 0) {
    beep.play();
    alert("Tempo finalizado");
    zerar();
    return;
  }
  tempoDecoridoSegundos -= 1;
  mostrarTempo();
};
startPauseBt.addEventListener("click", iniciarOurPause);

function iniciarOurPause() {
  if (intervaloId) {
    pause.play();

    zerar();
    return;
  }
  play.play();
  intervaloId = setInterval(contagemRegressiva, 1000);

  iniciarOurPauseBt.textContent = "Pausar";
  iniciarOurPauseImg.setAttribute("src", "/imagens/pause.png");
}
function zerar() {
  clearInterval(intervaloId);
  iniciarOurPauseBt.textContent = "Começar";
  iniciarOurPauseImg.setAttribute("src", "/imagens/play_arrow.png");
  intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecoridoSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-br", {
    minute: "2-digit",
    second: "2-digit",
  });
  temporizadorTela.innerHTML = `${tempoFormatado}`;
}

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});
focoBt.addEventListener("click", () => {
  tempoDecoridoSegundos = 1500;
  alterarContexto("foco");
  focoBt.classList.add("active");
});
curtoBt.addEventListener("click", () => {
  tempoDecoridoSegundos = 300;
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});
longoBt.addEventListener("click", () => {
  tempoDecoridoSegundos = 900;
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  mostrarTempo();
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("html", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
    Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
    `;
      break;
    case "descanso-curto":
      titulo.innerHTML = `
        Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
        `;
      break;
    case "descanso-longo":
      titulo.innerHTML = `
        Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
        `;

    default:
      break;
  }
}
mostrarTempo();
