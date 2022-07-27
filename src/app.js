//core module
const path = require("path");
//npm modules
const express = require("express");
const hbs = require("hbs");

//setup server
const app = express();
const port = process.env.PORT || 3000;

//setup handlebars engine and views location
app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);

//setup JSON parser
app.use(express.json());

//setup static directory to serve
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));

//GET requests
app.get("", (req, res) => {
  res.render("index", {
    title: "smartWill",
    name: "3A1,5M Tech Ltda.",
  });
});

app.get("/produto", (req, res) => {
  res.render("product", {
    title: "smartWill",
    name: "3A1,5M Tech Ltda.",
  });
});

app.get("/sobre", (req, res) => {
  res.render("about", {
    title: "smartWill",
    name: "3A1,5M Tech Ltda.",
  });
});

app.get("/contato", (req, res) => {
  res.render("contact", {
    title: "smartWill",
    name: "3A1,5M Tech Ltda.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "3A1,5M Tech Ltda.",
    errorMessage: "Página não encontrada.",
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
