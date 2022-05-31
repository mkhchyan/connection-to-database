import { combineReducers } from "redux"
import { dataReducer } from "./datas/reducer"
import { tablesReducer } from "./tables/reducer"

export default combineReducers({
    databases: dataReducer,
    tables: tablesReducer
})