var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/blocks", function (req, res) {
  res.redirect(301, "/parts");
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
