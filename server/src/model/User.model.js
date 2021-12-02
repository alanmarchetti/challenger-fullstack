const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    lastname: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    cpf: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
