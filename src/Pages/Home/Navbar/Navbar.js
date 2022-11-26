import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import img from './logo2.jpg'

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const naveList = <React.Fragment>
        <Link to='/'><button className="btn btn-outline  btn-success">Home</button></Link>
        <Link to='/blog'><button className="btn btn-outline  btn-success">Blog</button></Link>


        {
            user?.uid ?
                <button onClick={handleLogOut} className="btn btn-outline  btn-success">logout</button>
                :
                <Link to='/login'><button className="btn btn-outline  btn-success">Login</button></Link>

        }
        <Link to='/aboutUs'><button className="btn btn-outline  btn-success">About Us</button></Link>

    </React.Fragment>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {naveList}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl text-success font-bold">Laptop-Bazar</a><span className='text-lg font-bold text-success'>(Second-hand)</span></div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3">

                    {naveList}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-20' src={img} alt="" />
            </div>
        </div>
    );
};

export default Navbar;