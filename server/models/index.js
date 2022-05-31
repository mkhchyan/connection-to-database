const { Sequelize } = require('sequelize')
const config = { DB: "", USER: "root", PASSWORD: "" }

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
});

(async () => {
    await sequelize.sync()
})()

module.exports = {
    sequelize
}
