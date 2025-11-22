const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.get("/test", (req, res) => {
  res.send("hello from test route");
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
