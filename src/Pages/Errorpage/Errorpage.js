import React from 'react';
import { Link } from 'react-router-dom';
import errimg from '../../asset/errorpage.jpg'

const Errorpage = () => {
    return (
        <div>
            <img className='w-1/2 mx-auto mt-12 rounded-3xl' src={errimg} alt="" />
            <Link to='/'> <button className="btn btn-outline btn-success w-full mt-5 justify-center items-center text-4xl">Go to Th {`Home`} </button></Link>

        </div>
    );
};

export default Errorpage;