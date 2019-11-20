require("./models/db");
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const employeeController = require("./controllers/employeeController");
var app = express();
app.set("views", path.join(__dirname, "/views/")); //express middleware
//app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/"
  })
);
app.listen(8000, () => {
  console.log("Express server started at port :8000");
});

app.use("/employee", employeeController); //configure the routing for node js
