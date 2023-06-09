import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout/MainLayout";
import MainHome from "../Pages/HomePage/MainHome/MainHome";
import AllInstructors from "../Pages/InstructorsPage/AllInstructors/AllInstructors";
import AllClass from "../Pages/ClassPage/AllCllass/AllClass";
import Login from "../Pages/Authentication/Login/Login";
import Signup from "../Pages/Authentication/Signup/Signup";
import StudentDashboard from "../Layoutes/DashboardLayout/StudentDashboard";
import MyClasses from "../Pages/DashboardPage/StudentPage/myClasses";
import InstructorDashboard from "../Layoutes/DashboardLayout/InstructorDashboard";
import AddClass from "../Pages/DashboardPage/InstructorPage/AddClass/AddClass";
import MyClass from "../Pages/DashboardPage/InstructorPage/MyClass/MyClass";
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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Signup></Signup>
            }
        ]
    },

    {
        path: '/studentDashboard',
        element: <StudentDashboard></StudentDashboard>,
        children: [
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            }
        ]

    },
    {
        path: '/instructorDashboard',
        element: <InstructorDashboard></InstructorDashboard>,
        children: [
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            }
        ]
    }
]);

export default router