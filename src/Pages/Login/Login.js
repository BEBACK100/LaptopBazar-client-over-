import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../Hook/UseToken';

import img from '../../Pages/login.jpg'
import glogo from '../google logo.png'

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [loginError, setloginError] = useState('')
    const [loginUseremail, setLoginUseremail] = useState('')
    const [token] = UseToken(loginUseremail)
    const navigate = useNavigate();
    const location = useLocation;
    const from = location?.state?.from?.pathname || ('/')
    const { signIn, poviderlogin } = useContext(AuthContext)
    const googleprovider = new GoogleAuthProvider()

    if (token) {
        navigate(from, { replace: true });
    }

    // if (token) {
    //     navigate('/');
    // }
    const handlegooglesignin = (data) => {

        poviderlogin(googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUseremail(data.email)
            })
            .catch(error => console.error(error))
        reset()
    }

    const onsubmit = data => {
        console.log(data);
        // console.log('user login');
        setloginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUseremail(data.email)


            })
            .catch(error => {
                console.log(error.message)
                setloginError(error.message);

                reset()

            });

    }



    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-12'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="hero  text-3xl">
                <form onSubmit={handleSubmit(onsubmit)} className="card-body">
                    <div className="form-control">
                        <label className="">
                            <span className="label-text text-3xl mb-3 ">Email</span>
                        </label>
                        <input type="email" placeholder="email" {...register("email", { required: 'email is required', })}
                            className="input input-bordered  w-full" required />
                        {errors.email && <p>{errors.email?.message} </p>}

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-3xl mb-3 label-text">Password</span>
                        </label>

                        <input type="password" placeholder="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'Passsword must be six caractors' }

                        })} className="input input-bordered w-full " required />


                        {errors.password && <p className='text-xl text-red-600'>{errors.password?.message}  </p>}

                        {loginError && <p className='text-red-400'>{loginError} </p>}

                        <input className='bg-success rounded-2xl w-full  mt-5 p-3' type="Submit" />
                        <button onClick={handlegooglesignin} className="btn btn-outline btn-wide mt-10 btn-success w-full">
                            <img className='w-10 mr-3' src={glogo} alt="" />
                            Login with Google</button>

                        <label className="label">
                            <Link to='/signup' className="label-text-alt link link-hover text-xl">If you don't have an account <span className='text-3xl text-success font-bold'>Sign up</span></Link>
                        </label>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Login;