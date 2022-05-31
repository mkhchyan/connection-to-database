import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

export const TablesData = () => {
    const { tableName, databaseName, row } = useParams()
    const { tablesData } = useSelector((state) => state.tables);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "GET_TABLES_DATA", row, tableName, databaseName, tablesData, navigate })
    }, [])

       return <>
        <h1>
            Data of {tableName}
        </h1>
        <div className="App" >
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        {
                            tablesData?.columnNames?.map((columnName, index) => {
                                return (
                                    <th key={index}>
                                        {columnName.Field}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead >
                <tbody>
                    {
                        tablesData?.tablesData?.map((row, index) => { 
                            return (
                                <tr key={index} >
                                    {
                                        Object.entries(row).map((value, index) => {
                                            return (
                                                <td key={index} >
                                                    {value[1]}
                                                </td>
                                            )
                                        })
                                    }
                                 </tr>
                            )
                        })
                    }
                </tbody>
            </table >
        </div>
    </>
}
