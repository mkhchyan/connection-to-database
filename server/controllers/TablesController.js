const { sequelize } = require("../models")

class TablesController {
    static async getTables(req, res) {
        const databaseName = req.params.database_name
        // console.log(databaseName);
        const tables = await sequelize.query(`SHOW TABLES FROM ${databaseName}`)
        res.send(JSON.stringify(tables[0], null, 2))
    }

}
module.exports = { TablesController }

