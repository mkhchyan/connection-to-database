const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;
const mysql = require('mysql');
const { DatabaseController } = require("./controllers/DatabaseController");
const { TablesController } = require("./controllers/TablesController");
const { TablesDataController } = require("./controllers/TablesDataController");


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.get("/", (req, res) => {
    res.send({ status: "OK" })
})

app.post("/getdatabases", DatabaseController.getDatabases)
app.post("/getTables/:database_name",TablesController.getTables)
app.post("/getTablesData/:table_name/:database_name", TablesDataController.getTableData)
app.delete("/deleteTableRow", TablesDataController.deleteTableRow)

app.listen(port, () =>
    console.log(`Server started`)
);