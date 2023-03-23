const express = require("express");
require("dotenv").config();
require("./models/db");
const router = require("./routes/routes");
const cores = require("cors");

const app = express();
const PORT = process.env.PORT || 2050;

app.use(cores());
app.use(express.json());
app.use("/todos/api", router);
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server start with ${PORT}`);
});
