import mongoose from "mongoose";

mongoose.connect("mongodb+srv://david:123@clientes.xqfdlzy.mongodb.net/Cliente-cadastro");

let db = mongoose.connection;

export default db;

