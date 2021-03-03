const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = Email = mongoose.model("email", EmailSchema);
