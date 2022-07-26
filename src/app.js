const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

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

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
