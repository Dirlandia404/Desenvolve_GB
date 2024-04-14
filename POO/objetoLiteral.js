const user = {
  nome: "Juliana",
  email: "Juliana@gmail",
  nascimento: "06/08/2002",
  role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome);
  },
};
const admin = {
  nome: "Mariana",
  email: "mariana@gmail",
  role: "admin",
  criarCurso() {
    console.log("curso criado");
  },
};

//cadeia de protótipo
Object.setPrototypeOf(admin, user);
admin.criarCurso();
user.exibirInfos();
admin.exibirInfos();
