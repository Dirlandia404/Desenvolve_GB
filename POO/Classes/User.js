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
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  get nome() {
    //logica de condicional
    return this.#nome;
  }
  get email() {
    //logica de condicional
    return this.#email;
  }
  get nascimento() {
    //logica de condicional
    return this.#nascimento;
  }
  get role() {
    //logica de condicional
    return this.#role;
  }
  get ativo() {
    //logica de condicional
    return this.#ativo;
  }

  //set criar validações e encadear ações.serve para encapsular as classes
  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("formato invalido");
    }
    this.#nome = novoNome;
  }
  set email(novoEmail) {
    this.#email = novoEmail;
  }
  exibirInfos() {
    return `${this.email}`;
  }
}
