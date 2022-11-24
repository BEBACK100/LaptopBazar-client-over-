import React from 'react';
import { Link } from 'react-router-dom';
import img from '../login.jpg'

const SignUp = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-12'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="hero  text-3xl">
                <div className="card-body">
                    <div className="form-control">

                        <div className="form-control ">
                            <label className="label">
                                <span className="text-3xl mb-3 label-text">Name</span>
                            </label>

                            <input type="name" placeholder="Name" className="input w-full text-3xl input-bordered" required />
                            <label className="">
                                <span className="label-text text-3xl my-3 ">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered mt-4 text-3xl" required />
                        </div>
                        <label className="label">
                            <span className="text-3xl mb-3 label-text">Password</span>
                        </label>

                        <input type="password" placeholder="password" className="input w-full text-3xl input-bordered" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover text-xl">If you have an account, <span className='text-3xl text-success font-bold '>Login here</span></Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;