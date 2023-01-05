
import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import UserMeanu from './UserMeanu';



const Sidebar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isActive, setIsactive] = useState('false')
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    //sidebar responsive handler

    const handletoggle = () => {
        setIsactive(!isActive)
    }
    return (
        <>
            {/* //small screen navbar */}
            <div className='flex justify-between md:hidden bg-gray-100 text-gray-800'>
                <div>
                    <div className="block cursor-pointer p-4 font-bold">
                        <Link to='/'>Laptop-Bazar</Link>
                    </div>
                </div>
                <button
                    onClick={handletoggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:outline-gray-800'
                >
                    <Bars3Icon className='w-5 h-5'></Bars3Icon>
                </button>
            </div>


            {/* Sidebar */}

            <div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-72 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform
        ${isActive && '-translate-x-full'}
        md:translate-x-0 transition duration-200 ease-in-out`}>


                <div className="flex flex-col w-full h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Laptop-Bazar</h2>

                    <div className="flex flex-col items-center mt-6 -mx-2">
                        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user.photoURL
                        } alt="avatar" />
                        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{user.displayName}</h4>
                        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{user.email}</p>
                    </div>

                    <div className="flex flex-col justify-between flex-1 mt-6">

                        <UserMeanu></UserMeanu>
                    </div>
                    <button onClick={handleLogOut} className="btn btn-outline  btn-success">logout</button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;