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
    // console.log(result.data);
}

function* getTables({ databaseName, navigate }) {
    // console.log(databaseName);
    const tables = yield Axios.post(`http://localhost:5000/getTables/${databaseName}`)
    // console.log(tables.data);
    yield put(setTables(tables.data))
}


function* getTableData({ tableName, databaseName}) {
    // console.log(tableName);
    const tablesData = yield Axios.post(`http://localhost:5000/getTablesData/${tableName}/${databaseName}` )
    yield put(setTablesData(tablesData.data))
    // console.log(tablesData.data);
}

function* deleteTableData({ row, tableName, databaseName, tablesData, navigate }) {
    console.log('OKK', row.id) ;
		yield Axios.delete(`http://localhost:5000/deleteTableRow`,  row, row.id, tableName, databaseName )
		const filteredData = tablesData.filter(data => data.id !== row.id)
		yield put(setTablesData(filteredData))
}

export function* rootSaga() {   
    yield takeEvery('GET_DATABASE', getData)
    yield takeEvery('GET_TABLES', getTables)
    yield takeEvery('GET_TABLES_DATA', getTableData)
    yield takeEvery('DELETE_ROW', deleteTableData)
}