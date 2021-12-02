const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    cpf: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
