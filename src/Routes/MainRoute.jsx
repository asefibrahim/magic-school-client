import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout/MainLayout";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import AllInstructors from "../Pages/InstructorsPage/AllInstructors/AllInstructors";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <MainHome></MainHome>
            },
            {
                path: '/instructors',
                element: <AllInstructors></AllInstructors>
            }
        ]
    },
]);

export default router