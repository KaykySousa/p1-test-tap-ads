const Sequelize = require("sequelize")
const sequelize = new Sequelize("prova", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.sync().then(function() {
    console.log("db synced")
})

module.exports = {
    Sequelize,
    sequelize
}
