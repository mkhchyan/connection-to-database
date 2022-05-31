import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Databases } from "./components/Databases";
import { Tables } from "./components/Tables";
import { TablesData } from "./components/TablesData";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Databases />} />
                <Route path="/tables/:databaseName" element={<Tables />} />
                <Route path="/tableData/:databaseName/:tableName" element={<TablesData />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router