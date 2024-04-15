import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User("MArai", "ma@gmail.com", "2021-02-01");
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin("Rodri", "ro@gmail.com", "2021-02-01");
// console.log(novoAdmin.nome);
// novoAdmin.nome = "";
// console.log(novoAdmin.nome);
const novoDocente = new Docente("dui", "dui@gmail", "2020");
console.log(novoDocente.exibirInfos());
