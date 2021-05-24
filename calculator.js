const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
  // res.send("hello there, general kenobi!");
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
})

app.post("/", function(req, res) {
  // res.send("request of calculation received, proceeding...");
  console.log(req.body);

  // var num1 = Number(req.body.num1);
  // var num2 = Number(req.body.num2);
  // var result = num1 + num2;
  // res.send("result is: " + result);

  var output = calc(req.body.num1, req.body.num2);
  res.send("strings " + output);
})

function calc(n1, n2) {
  var num1 = Number(n1);
  var num2 = Number(n2);
  var result = num1 * num2;
  return result;
}

app.listen(port, function() {
  console.log("server started");
})
