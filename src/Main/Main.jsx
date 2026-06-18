import React from 'react';
import Header from '../Component/Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router';

const Main = () => {
    return (
         <div className="max-w-screen-xl py-5 gap-4 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
    );
};

export default Main;