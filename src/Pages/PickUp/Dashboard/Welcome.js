import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Welcome = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
            <div className='flex justify-center items-center'>
                <p className='text-6xl font-bold'>welc </p>
                <div className="w-9 h-9 border-8 border-dashed  animate-spin mt-3 border-green-500"> </div>
                <p className='text-6xl font-bold mr-2'> me</p>
                <p className='text-6xl font-bold'>To</p>
                <div className=" justify-center text-gray-500 items-center mt-4">
                    <div> <p className='text-3xl font-medium'><span className='text-4xl font-bold text-green-600'>{user.displayName}</span> Dashboard</p></div>
                </div>

            </div>

        </div>
    );
};

export default Welcome;