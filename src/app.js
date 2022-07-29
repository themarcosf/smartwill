//core module
const path = require("path");
//npm modules
const express = require("express");
const hbs = require("hbs");
const cors = require("cors");
//project modules
require("./db/mongoose");
const User = require("./models/user");

//setup server
const app = express();
app.use(cors());
const port = process.env.PORT;

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

//server variables
const title = "smartWill";
const name = "3A1,5M Tech Ltda.";

//GET requests
app.get("", (req, res) => {
  res.render("index", { title, name });
});

app.get("/produto", (req, res) => {
  res.render("product", { title, name });
});

app.get("/sobre", (req, res) => {
  res.render("about", { title, name });
});

app.get("/contato", (req, res) => {
  res.render("contact", { title, name });
});

app.get("*", (req, res) => {
  res.render("404", { title, name, errorMessage: "Página não encontrada." });
});

//POST request
app.post("/contato", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res
      .status(201)
      .send(
        `O email ${user.email} foi cadastrado com sucesso. Você receberá informações do projeto sempre que novas funcionalidades forem implementadas.`
      );
  } catch (err) {
    res.status(400).send("Favor revisar as informações e tentar novamente.");
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
