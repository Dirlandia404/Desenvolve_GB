import User from "./User.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovaEstudante(estudante, curso) {
    return `${estudante} passou em ${curso}`;
  }
}

const novoDocente = new Docente("Ma", "ma@hhas", "2000-52-54");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("ju", "JS"));
