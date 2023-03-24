const mongoose = require("mongoose");

const TodosScheema = new mongoose.Schema({
  todo: String,
  like: Boolean,
  time: String,
  edited: { type: String, default: null },
});

const Todos = mongoose.model("todo", TodosScheema);

module.exports = Todos;
