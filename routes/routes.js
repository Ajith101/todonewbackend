const express = require("express");
const router = express.Router();
const Todos = require("../models/models");

router.get("/", (req, res) => {
  Todos.find()
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.patch("/:id", (req, res) => {
  const { editedList } = req.body;

  Todos.updateOne(
    { _id: req.params.id },
    {
      $push: {
        editedList: editedList,
      },
    }
  )
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Todos.find({ _id: req.params.id })
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const newData = new Todos(req.body);
  newData
    .save()
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  Todos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  Todos.findByIdAndDelete(req.params.id)
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

module.exports = router;
