var {connectDB} = require("./context/dbContext")
var {sequelize} = require("./context/dbContext")
const express = require("express")

var app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", "./views")
app.listen(3000)

connectDB()

app.get('/', function(req, res) {
    sequelize.models.coins.findAll()
    .then(data => res.render("coinmarketcap", {userData: data}));
  });