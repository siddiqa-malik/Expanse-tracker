import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import AddTransaction from "../pages/AddTransaction";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />
                },
                { 
                    path: "transactions",
                    element: <Transactions />
                },
                {
                    path: "add-transaction",
                    element: <AddTransaction />
                }
            ]
        }
    ]
)

export default router;