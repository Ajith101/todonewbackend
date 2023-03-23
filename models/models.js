const mongoose = require("mongoose");

const TodosScheema = new mongoose.Schema({
  todo: String,
  like: Boolean,
});

const Todos = mongoose.model("todo", TodosScheema);

module.exports = Todos;
