// class User {
//   constructor(nome, email, nascimento, role, ativo = true) {
//     this.nome = nome;
//     this.email = email;
//     this.nascimento = nascimento;
//     this.role = role || "estudante";
//     this.ativo = ativo;
//   }
//   exibirInfos() {
//     return `${this.nome}`;
//   }
// }

// const novoUser = new User("Juliana", "ju@gmail", "2020-06-04");
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));
//herança de Classes
export default class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }
  exibirInfos() {
    return `${this.nome}`;
  }
}
