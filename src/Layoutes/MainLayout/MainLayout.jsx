import React, { useState } from 'react';
import { Nav } from '../../Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';







const MainLayout = () => {
    const [dark, setDark] = useState(false)


    return (
        <div className={`${dark && 'bg-[#1F1D36]'}`}>
            <Nav setDark={setDark} dark={dark}></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;