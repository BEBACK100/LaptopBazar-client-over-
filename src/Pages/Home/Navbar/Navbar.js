import React from 'react';
import { Link } from 'react-router-dom';
import img from './logo2.jpg'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li>Submenu 1</li>
                                <li>Submenu 2</li>
                            </ul>
                        </li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl text-success font-bold">Laptop-Bazar</a><span className='text-lg font-bold text-success'>(Second-hand)</span></div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3">
                    <Link to='/'><button className="btn btn-outline  btn-success">Home</button></Link>
                    <Link to='/blog'><button className="btn btn-outline  btn-success">Blog</button></Link>
                    <Link to='/login'><button className="btn btn-outline  btn-success">Login</button></Link>
                    <Link to='/aboutUs'><button className="btn btn-outline  btn-success">About Us</button></Link>

                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-20' src={img} alt="" />
            </div>
        </div>
    );
};

export default Navbar;