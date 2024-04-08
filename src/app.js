const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cliente = require("./models/cliente")
const handlebars = require("express-handlebars").engine

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.set("views", __dirname + "/views")

app.get("/", function(req, res) {
    cliente.findAll().then(function(clientes) {
        res.render("consulta", {clientes})
    })
})

app.get("/editar/:id", function(req, res) {
    cliente.findByPk(req.params.id).then(function(cliente) {
        console.log(cliente)
        res.render("editar", cliente)
    })
})

app.get("/cadastrar", function(req, res) {
    res.render("cadastro")
})

app.post("/create", function(req, res) {
    cliente.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado
    }).then(function() {
        res.redirect("/")
    }).catch(function(error) {
        res.send("Erro ao cadastrar: " + error)
    })
})

app.post("/update/:id", function(req, res) {
    cliente.update({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/")
    }).catch(function(error) {
        res.send("Erro ao atualizar: " + error)
    })
})

app.get("/delete/:id", function(req, res) {
    cliente.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/")
    }).catch(function(error) {
        res.send("Erro ao apagar: " + error)
    })
})

app.listen(3000, function() {
    console.log("The server is running on port 3000")
})