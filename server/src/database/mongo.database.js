const mongoose = require("mongoose");

const connect = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado a base de dados"))
  .catch((error) =>
    console.log(`Erro ao se conectar a base de dados ${error}`)
  );

module.exports = connect;
