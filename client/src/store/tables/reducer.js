import { tableState } from "./state";
import { GET_TABLE, GET_TABLE_DATA, DELETE_TABLE_ROW } from "./types";

export const tablesReducer = (state = tableState, action) => {
    switch (action.type) {
        case GET_TABLE:
            state.tables = action.table
            break;
        case GET_TABLE_DATA:
            state.tablesData = action.tableData
            break;
        case DELETE_TABLE_ROW:
            return {
                ...state
            }
        default:
            break;
    }
    return { ...state }
}