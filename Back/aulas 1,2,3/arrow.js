const estudanteReprovou = (notaFinal) => {
  if (notaFinal < 7) {
    return true;
  } else {
    return false;
  }
};

const exibe = (nome) => nome;

console.log(estudanteReprovou(6));
console.log(estudanteReprovou(10));
console.log(exibe("Di"));
