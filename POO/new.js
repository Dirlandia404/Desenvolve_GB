function User(nome, email) {
  (this.nome = nome), (this.email = email);

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}  `;
  };
}
//construror
// const novoUser = new User("Dir", "didi@gmail.com");
// console.log(novoUser.exibirInfos());

//object create
// function Admin(role) {
//   //this é o contexto de User dentro de admin
//   User.call(this, "Ju", "jj@gmail");
//   this.role = role || "estudante";
// }
// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

// const user = {
//   init: function (nome, email) {
//     (this.nome = nome), (this.email = email);
//   },
//   exibirInfos: function (nome) {
//     return nome;
//   },
// };
// const novoUser = Object.create(user);
// console.log(novoUser.exibirInfos("Dir"));
// console.log(user.isPrototypeOf(novoUser));
const user = {
  init: function (nome, email) {
    (this.nome = nome), (this.email = email);
  },
  exibirInfos: function () {
    return this.nome;
  },
};
const novoUser = Object.create(user);
novoUser.init("Dir", "didi");
console.log(novoUser.exibirInfos());
