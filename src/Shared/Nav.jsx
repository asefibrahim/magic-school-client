import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

export const Nav = ({ dark, setDark }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleUserLogOut = () => {
        logOut()
        navigate('/login')
    }

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const handleCheckboxChange = event => {
        setDark(event.target.checked);
    };
    const navItems = <>
        <NavLink to="/"
            className={({ isActive }) => (isActive ? 'text-amber-500 font-medium tracking-wide' : 'font-medium tracking-wide text-gray-200 ')} >  Home</NavLink>
        <NavLink to="/instructors"
            className={({ isActive }) => (isActive ? 'text-amber-500  font-medium tracking-wide' : 'font-medium tracking-wide text-gray-200 ')} >Instructors </NavLink>
        <NavLink to="/allClass"
            className={({ isActive }) => (isActive ? 'text-amber-500 font-medium tracking-wide' : 'font-medium tracking-wide text-gray-200 ')} >  Classes</NavLink>
        {user && !isInstructor && !isAdmin && <NavLink to="/studentDashboard"
            className={({ isActive }) => (isActive ? 'text-amber-500 font-medium tracking-wide' : 'font-medium tracking-wide text-gray-200 ')} >  Dashboard</NavLink>}
        {isInstructor && !isAdmin && <NavLink to="/instructorDashboard"
            className={({ isActive }) => (isActive ? 'text-amber-500 font-medium tracking-wide' : 'font-medium tracking-wide text-gray-200 ')} >  Dashboard</NavLink>}
        {isAdmin && <NavLink to="/adminDashboard"
            className={({ isActive }) => (isActive ? 'text-amber-500 font-medium tracking-wide' : 'font-medium tracking-wide text-gray-200 ')} >  Dashboard</NavLink>}



        <li>
            <input type="checkbox" className="toggle toggle-primarygit" onChange={handleCheckboxChange} />

        </li>



    </>

    return (
        <div class="bg-[#1d1c1c]">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                    >
                        <svg
                            class="w-8 text-orange-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Magic School
                        </span>
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        {navItems}
                    </ul>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            {
                                user ? <li className="text-gray-300 mr-10 font-bold flex items-center gap-5 ">

                                    <p title={user && user.displayName} className="text-3xl">
                                        {user?.photoURL && <img className="w-12 rounded-full h-12" src={user?.photoURL
                                        } /> || ''}

                                    </p>
                                    <p className=" border-orange-500 border rounded-xl px-5 py-2  transition hover:scale-110 hover:shadow-lg text-orange-500 ">
                                        <NavLink onClick={handleUserLogOut} >Sign Out</NavLink>
                                    </p>


                                </li> : <li className="mr-10 border-orange-500 border rounded-xl px-5 py-2  transition hover:scale-110 hover:shadow-lg text-orange-500">
                                    <NavLink className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')} to='/login'>Login</NavLink>
                                </li>
                            }
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <svg
                                                    class="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Company
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            {navItems}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};