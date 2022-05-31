const { sequelize } = require("../models")


class TablesDataController {

    static async getTableData(req, res) {
        const tableName = req.params.table_name
        const databaseName = req.params.database_name

        console.log(tableName);
        console.log(databaseName);

        await sequelize.query(`USE ${databaseName}`)
        const columnNames = await sequelize.query(`SHOW COLUMNS FROM ${tableName} FROM ${databaseName}`)
        const tablesData = await sequelize.query(`SELECT * FROM ${tableName}`)

        res.send({ tablesData: tablesData[0], columnNames: columnNames[0] })
    }

    static async deleteTableRow(req, res) {
        const rowId = req.params.row_id
        const tableName = req.params.table_name
        const databaseName = req.params.database_name
        console.log(req.params);

        // await sequelize.query(`USE ${databaseName}`)
        const deletedRow = await sequelize.query(`DELETE FROM ${tableName} WHERE id = ${rowId}`)
        res.send({ deletedRow })

    }



}

module.exports = { TablesDataController }
