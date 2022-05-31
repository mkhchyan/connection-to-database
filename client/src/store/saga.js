import axios from "axios";
import { put, take, takeEvery } from 'redux-saga/effects'
import { setData } from "./datas/action";
import { setTables, setTablesData } from "./tables/action";

const Axios = axios.create({
    withCredentials: true
})

function* getData(data, navigate) {
    let result = yield Axios.post("http://localhost:5000/getdatabases")
    yield put(setData(result.data))
}

function* getTables({ databaseName, navigate }) {
    const tables = yield Axios.post(`http://localhost:5000/getTables/${databaseName}`)
    yield put(setTables(tables.data))
}


function* getTableData({ tableName, databaseName}) {
    const tablesData = yield Axios.post(`http://localhost:5000/getTablesData/${tableName}/${databaseName}` )
    yield put(setTablesData(tablesData.data))
}

export function* rootSaga() {   
    yield takeEvery('GET_DATABASE', getData)
    yield takeEvery('GET_TABLES', getTables)
    yield takeEvery('GET_TABLES_DATA', getTableData)
}
