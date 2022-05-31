import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"

export const Tables = () => {
    const { databaseName } = useParams()
    const { tables } = useSelector((state) => state.tables);
    // console.log("tables", tables);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "GET_TABLES", navigate, databaseName })
    }, [])


    return <>
        <h1
            style={{
                textAlign: 'center',
                color: 'blue',
                fontSize: '40px',
                letterSpacing: '5px',
            }}>
            Tables of {databaseName}
        </h1>
        {tables.map((table, index) => {
            const tableName = table[`Tables_in_${databaseName}`];

            return (
                <div key={index}>
                    <Link to={`/tableData/${databaseName}/${tableName}`}>
                        <p
                            style={{
                                textAlign: 'center',
                                fontSize: '20px',
                                letterSpacing: '2px',
                            }}>
                            {tableName}
                        </p>
                    </Link>
                </div>
            )
        })}

    </>
}