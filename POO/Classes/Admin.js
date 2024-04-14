import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  criarCurso(nomeCurso, vagas) {
    return `${nomeCurso} com ${vagas}  vagas`;
  }
}
const novoAdmin = new Admin("Rodrigo", "rr@fn", "2020-01-02");

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso("Matematica", 20));
