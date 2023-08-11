const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());

app.get("/", (req, res) => {
  return res.render("index");
});

app.listen(PORT, () => console.log(`Server Started at PORT:3000`));
