import mongoose from "mongoose";

async function conectaDB() {
  mongoose.connect(process.env.DB_CONECT_STRING);
  return mongoose.connection;
}

export default conectaDB;
