const { sequelize, Sequelize } = require("../database/banco");

const cliente = sequelize.define("cliente", {
    nome: {
        type: Sequelize.STRING,
    },
    endereco: {
        type: Sequelize.STRING,
    },
    bairro: {
        type: Sequelize.STRING,
    },
    cep: {
        type: Sequelize.STRING,
    },
    cidade: {
        type: Sequelize.STRING,
    },
    estado: {
        type: Sequelize.STRING,
    }
})

module.exports = cliente