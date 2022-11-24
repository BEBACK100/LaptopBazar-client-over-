import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import img from '../../Pages/login.jpg'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, form } = useContext(AuthContext)
    const [loginError, setloginError] = useState('')
    const navigate = useNavigate;
    const location = useLocation;
    const from = location?.state?.from?.pathname || '/';
    const onsubmit = data => {

        console.log(data);
        signIn(data.email, data.password)

            .then(result => {

                const user = result.user
                console.log(user);
                navigate(from, { replace: true });
            })
        form.reset()
            .catch(error => {
                console.log(error)
                setloginError(error.message)

            })

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

                        <input className='bg-blue-500 w-full  mt-5 p-3' type="Submit" />
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