import mongoose from "mongoose";

mongoose.set("debug", true);

mongoose.connect(process.env.DB_CONECT_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

export default db;
