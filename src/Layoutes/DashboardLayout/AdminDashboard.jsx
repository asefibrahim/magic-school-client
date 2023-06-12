import React, { useContext } from 'react';
import { FaHome, FaBook, FaFileSignature, FaUser, FaStore, FaPaperPlane } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav } from '../../Shared/Nav';
import { AuthContext } from '../../Providers/AuthProvider';



const AdminDashboard = () => {

    const { user } = useContext(AuthContext)
    return (

        <div>
            <Nav></Nav>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col   ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-lg">
                        <div className='w-3/4 mx-auto '>
                            <img className='w-16 h-16 rounded-full' src={user?.photoURL} alt="" />

                        </div>
                        <h1 className='font-medium mt-2 text-2xl mb-8'>{user?.displayName}  (Admin) </h1>

                        <li><NavLink to="/adminDashboard/manageUsers"><FaFileSignature></FaFileSignature>Manage Users</NavLink></li>

                        <li><NavLink to="/adminDashboard/manageClasses"><FaBook></FaBook>  Manage  CLasses</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/instructors"><FaUser></FaUser> All Instructors</NavLink></li>
                        <li><NavLink to="/allClass"><FaStore></FaStore> All Classes</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;