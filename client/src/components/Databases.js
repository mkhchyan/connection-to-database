import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

export const Databases = () => {
    const { databases } = useSelector((state) => state.databases);
    console.log("Databases", databases);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: "GET_DATABASE", navigate })
        // console.log("OKKKKK");
    }, [])


    return <>
        <h1
            style={{
                textAlign: 'center',
                color: 'red',
                fontSize: '40px',
                letterSpacing: '5px',
            }}>
            Databases
        </h1>
        <div>
            {/* {Object.keys(databases).map((database, index) => { */}
            {databases?.map((database, index) => {

                return (
                    <div key={index} className="container" >
                        <Link to={`/tables/${database.Database}`}>
                            <p style={{
                                textAlign: 'center',
                                fontSize: '20px',
                                letterSpacing: '2px',
                            }}>
                                {database.Database}
                            </p>
                        </Link>
                    </div>
                )
            })}
        </div>
    </>
}


