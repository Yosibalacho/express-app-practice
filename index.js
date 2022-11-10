const express = require("express");
const app = express();
const cors = require("cors");
const port = 4040;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("hi mannnn");
});
app.get("/Yos", (req, res) => {
  res.send("hi Yos");
});
app.get("/:id", (req, res) => {
  res.send(`the id is: ${req.params.id}`);
});
app.post("/", (req, res) => {
  const data = req.body;
  res.send(data);
});
app.listen(port, () => {
  console.log(`server is up and listening on port:${port}`);
});
