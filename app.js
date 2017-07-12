const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/", routes);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err: {}
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("ready");
});

module.exports = app;
