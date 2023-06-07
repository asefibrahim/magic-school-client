import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout/MainLayout";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            }
        ]
    },
]);

export default router