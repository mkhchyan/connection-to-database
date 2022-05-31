const { sequelize } = require("../models")

class DatabaseController {
    static async getDatabases(req, res) {
        const databases = await sequelize.query('SHOW DATABASES')
        // console.log(databases);
        // console.log(JSON.stringify(databases[0], null, 2));
        res.send(JSON.stringify(databases[0], null, 2))
    }
}
module.exports = { DatabaseController }