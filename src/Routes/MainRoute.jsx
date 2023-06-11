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
import Payment from "../Pages/DashboardPage/StudentPage/Payment/Payment";
import EnrollClasses from "../Pages/DashboardPage/StudentPage/EnrollClasses/EnrollClasses";
import AdminDashboard from "../Layoutes/DashboardLayout/AdminDashboard";
import ManageUser from "../Pages/DashboardPage/AdminPage/ManageUser/ManageUser";
import ManageClasses from "../Pages/DashboardPage/AdminPage/ManageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import InstructorRout from "./InstructorRout";
import AdminRoute from "./AdminRoute";
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
        element: <PrivateRoute> <StudentDashboard></StudentDashboard></PrivateRoute>,
        children: [
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'myClasses/payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'enrollClasses',
                element: <EnrollClasses></EnrollClasses>
            }
        ]

    },
    {
        path: '/instructorDashboard',
        element: <InstructorRout> <InstructorDashboard></InstructorDashboard></InstructorRout>,
        children: [
            {
                path: 'addClass',
                element: <InstructorRout><AddClass></AddClass></InstructorRout>
            },
            {
                path: 'myClass',
                element: <InstructorRout><MyClass></MyClass></InstructorRout>
            }
        ]
    },
    {
        path: '/adminDashboard',
        element: <AdminRoute> <AdminDashboard></AdminDashboard></AdminRoute>,
        children: [
            {
                path: 'manageUsers',
                element: <ManageUser></ManageUser>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            }
        ]
    }
]);

export default router