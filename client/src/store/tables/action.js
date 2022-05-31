import { DELETE_TABLE_ROW, GET_TABLE, GET_TABLE_DATA } from "./types"

export const setTables = (tables) => {
    return {
        type: GET_TABLE,
        table: tables
    }
}

export const setTablesData = (data) => {
    return {
        type: GET_TABLE_DATA,
        tableData: data
    }
}

export const deleteTableRow = (row) => {
    return {
        type: DELETE_TABLE_ROW,
        row: row
    }
}