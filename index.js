const express = require('express')
var bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodie

app.post("/", function(req, res) {
  res.send(req.body);
});

app.listen(3000)