import { databaseState } from "./state";
import { GET_DATA } from "./types";

export const dataReducer = (state = databaseState, action) => {
    switch (action.type) {
        case GET_DATA:
            state.databases = action.database
            break;
        default:
            break;
    }
    return { ...state }
}