import React from 'react';
import { FaHome, FaBook, FaFileSignature, FaUser, FaStore, FaPaperPlane } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav } from '../../Shared/Nav';

const StudentDashboard = () => {



    return (



        <div>
            <Nav></Nav>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-lg">
                        <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Student Home</NavLink></li>
                        <li><NavLink to="/studentDashboard/myClasses"><FaBook></FaBook>  My Selected CLass</NavLink></li>
                        <li><NavLink to="/dashboard/addItem"><FaFileSignature></FaFileSignature>  My Enrolled  CLass</NavLink></li>
                        <li><NavLink to="/studentDashboard/payment"><FaPaperPlane /> Payment</NavLink></li>

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/menu"><FaUser></FaUser> All Instructors</NavLink></li>
                        <li><NavLink to="/order/salad"><FaStore></FaStore> All Classes</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>



    );
};

export default StudentDashboard;