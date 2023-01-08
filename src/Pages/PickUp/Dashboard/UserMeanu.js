import { ArrowUpIcon, ArrowUpOnSquareIcon, FingerPrintIcon, HomeIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import UseAdmin from '../../../Hook/UseAdmin';

const UserMeanu = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    return (
        <div>
            <NavLink to='/' className={({ isActive }) =>
                `flex items-center px-4  transition-colors duration-100 transform hover:bg-gray-100 hover:text-gray-700 ${isActive ? 'bg-orange-700 rounded-xl text-gray-300' : 'text-green-700'} `}>
                <HomeIcon className='w-5 h-5' />
                <span className='text-xl mx-4 font-medium'>Home</span>
            </NavLink>
            <NavLink to='my-bookings' className={({ isActive }) =>
                `flex items-center px-4  transition-colors duration-100 transform hover:bg-gray-100 hover:text-gray-700 ${isActive ? 'bg-orange-700 rounded-xl text-gray-300' : 'text-green-700'} `}>
                <FingerPrintIcon className='w-5 h-5' />
                <span className='text-xl mx-4 font-medium'>My Booking</span>
            </NavLink>

            {isAdmin && <>
                {/* <NavLink to='become-admin' className={({ isActive }) =>
                    `flex items-center px-4 transition-colors duration-100 transform hover:bg-gray-100 hover:text-gray-700 ${isActive ? 'bg-orange-700 rounded-xl text-gray-300' : 'text-green-700'} `}>
                    <UserPlusIcon className='w-5 h-5' />
                    <span className='text-xl mx-4 font-medium'>Become a Admin</span>
                </NavLink> */}
                <NavLink to='/dashboard/users' className={({ isActive }) =>
                    `flex items-center px-4 transition-colors duration-100 transform hover:bg-gray-100 hover:text-gray-700 ${isActive ? 'bg-orange-700 rounded-xl text-gray-300' : 'text-green-700'} `}>
                    <UsersIcon className='w-5 h-5' />
                    <span className='text-xl mx-4 font-medium'>All Users</span>
                </NavLink>
                <NavLink to='/dashboard/addproducts' className={({ isActive }) =>
                    `flex items-center px-4 transition-colors duration-100 transform hover:bg-gray-100 hover:text-gray-700 ${isActive ? 'bg-orange-700 rounded-xl text-gray-300' : 'text-green-700'} `}>
                    <ArrowUpOnSquareIcon className='w-5 h-5' />
                    <span className='text-xl mx-4 font-medium'>Add Products</span>
                </NavLink>
                <NavLink to='/dashboard/manageproducts' className={({ isActive }) =>
                    `flex items-center px-4 transition-colors duration-100 transform hover:bg-gray-100 hover:text-gray-700 ${isActive ? 'bg-orange-700 rounded-xl text-gray-300' : 'text-green-700'} `}>
                    <ArrowUpOnSquareIcon className='w-5 h-5' />
                    <span className='text-xl mx-4 font-medium'>Manage Products</span>
                </NavLink>
            </>}
        </div>
    );
};

export default UserMeanu;