import React, { useState } from 'react';
import { Nav } from '../../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

import './Layout.css'





const MainLayout = () => {



    return (
        <div className='blogs'>
            <Nav ></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;