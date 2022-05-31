import { GET_DATA } from "./types"

export const setData = (databases) => {
    return {
        type: GET_DATA,
        database: databases
    }
}