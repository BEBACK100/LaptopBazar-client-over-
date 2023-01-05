import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';


import Navbar from '../Pages/Home/Navbar/Navbar';
import Sidebar from '../Pages/PickUp/Dashboard/Sidebar';

const Dashboardlayot = () => {
    // const { user } = useContext(AuthContext);
    // const [isAdmin] = UseAdmin(user?.email)
    return (
        <div>
            {/* {<Navbar></Navbar>} */}
            <div className='md:flex relative min-h-screen'>
                <div className='mt-16 pt-16 z-0'>
                    <Sidebar />
                </div>
                <div className='flex-1 md:ml-64'>

                    <Outlet></Outlet>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboardlayot;


