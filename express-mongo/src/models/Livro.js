import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: {
    type: String,
    required: [true, "O título do livro é obrigatório"],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"],
  },
  editora: {
    type: String,
    required: [true, "A editora é obrigatória"],
    enum: {
      values: ["Casa do Código", "Alura", "Caelum", "bananada"],
      message: "Editora {VALUE} inválida",
    },
  },
  numeroPaginas: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message:
        "A quantidade de paginas é no mínimo 10 e máximo 5000. Valor informado: {VALUE}",
    },
    // min: [
    //   10,
    //   "A quantidade de paginas é no mínimo 10 e máximo 5000. Valor informado: {VALUE}",
    // ],
    // max: [
    //   5000,
    //   "A quantidade de paginas é no mínimo 10 e máximo 5000. Valor informado: {VALUE}",
    // ],
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
