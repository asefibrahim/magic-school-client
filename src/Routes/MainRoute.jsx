import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout/MainLayout";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import AllInstructors from "../Pages/InstructorsPage/AllInstructors/AllInstructors";
import AllClass from "../Pages/ClassPage/AllCllass/AllClass";
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
            },
            {
                path: '/allClass',
                element: <AllClass></AllClass>
            }
        ]
    },
]);

export default router