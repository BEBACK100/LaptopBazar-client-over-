import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import UseToken from '../../Hook/UseToken';
import img from '../login.jpg'

const SignUp = () => {
    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = UseToken(createdUserEmail);

    const { createuser, updateUser } = useContext(AuthContext)
    const [signUperror, setsignUperror] = useState('')
    const [type, setType] = useState("password")
    const { handleSubmit, formState: { errors }, register } = useForm();
    const navigate = useNavigate;
    const location = useLocation;
    const from = location?.state?.from?.pathname || '/';

    // const googleprovider = new GoogleAuthProvider
    const handleSignUp = (data) => {
        setsignUperror('');
        createuser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User Create Successfully')
                const userInfo = {
                    displayName: data.name,

                }
                console.log(userInfo);
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)

                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {

                console.log(error)
                setsignUperror(error.message)

            })
        const saveUser = (name, email) => {
            const user = { name, email };
            console.log(user)
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    getAccesstoken(email)
                    navigate('/')
                })
        }

    }

    const getAccesstoken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                }
            })
    }


    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-12'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="hero  text-3xl">
                <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                    <div className="form-control">

                        <div className="form-control ">
                            <label className="label">
                                <span className="text-3xl mb-3 label-text">Name</span>
                            </label>

                            <input type="name" placeholder="Name" {...register("name")} className="input w-full text-3xl input-bordered" required />
                            <label className="">
                                <span className="label-text text-3xl my-3 ">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email")} className="input input-bordered mt-4 text-3xl" required />
                        </div>
                        <label className="label">
                            <span className="text-3xl mb-3 label-text">Password</span>
                        </label>

                        <input type="password" placeholder="password"{...register("password",
                            {
                                required: 'password is required',
                                minLength: { value: 6, message: 'Passsword must be six caractors' },
                                // pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: 'Password must be Strong' }

                            })} className="input w-full text-3xl input-bordered" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover text-xl">If you have an account, <span className='text-3xl text-success font-bold '>Login here</span></Link>
                        </label>
                    </div>
                    {errors.password && <p className='text-xl text-red-600'>{errors.password?.message}  </p>}

                    {signUperror && <p className='text-red-400'>{signUperror} </p>}
                    <div className="form-control mt-6">
                        <input className='bg-blue-500 w-full  mt-5 p-3' type="submit" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignUp;