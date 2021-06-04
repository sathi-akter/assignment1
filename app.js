// requiring the needed libraries
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// set where the routes are and how to access them
var indexRouter = require("./routes/index");

// instantiate the express application
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// not sure
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve static files
app.use(express.static(path.join(__dirname, "public")));
// serve styles
app.use(
  "/css",
  express.static(path.join(__dirname + "node_modules/bootstrap/dist/css"))
);
// serve js
app.use(
  "/js",
  express.static(path.join(__dirname + "node_modules/bootstrap/dist/js"))
);

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
