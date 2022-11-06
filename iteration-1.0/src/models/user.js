//npm modules
const mongoose = require("mongoose");
const validator = require("validator");

//model definition
const User = mongoose.model("users", {
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    maxlength: 200,
    required: [true, "Endereço de e-mail é obrigatório."],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Endereço de e-mail inválido.");
      }
    },
  },
  message: {
    type: String,
    default: "não informado",
    maxlength: 500,
  },
});

module.exports = User;
