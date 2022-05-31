import { GET_TABLE, GET_TABLE_DATA } from "./types"

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

