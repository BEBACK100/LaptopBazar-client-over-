import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const PickUpCard = ({ laptopinfo, }) => {
    const { model, title, ResalePrice, location, } = laptopinfo;
    const { user } = useContext(AuthContext)

    return (
        <>
            <input type="checkbox" id="pick-up" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h1 className='text-3xl '>Your Selected Laptop:<span className='text-green-400 font-bold'>{title}</span> </h1>

                    <h3 className="font-bold text-2xl">Model Number:{model} </h3>
                    <form className='grid grid-cols-1 gap-3 mt-10 text-center'>
                        <h1>Model Number</h1>
                        <input type="text" readOnly value={model} className="input w-full text-2xl  input-bordered " />
                        <input type="text" readOnly value={ResalePrice} className="input w-full input-bordered " />
                        <h1>User Name</h1>
                        <input name="name" type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input w-full input-bordered" />
                        <h1>User Email</h1>
                        <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" />
                        <h1>User Phone Number</h1>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <h1>Meeting Location</h1>
                        <input name="phone" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />

                        <button className="btn  text-4xl">Or</button>
                    </form>
                    <div className="modal-action">

                        <label htmlFor="pick-up" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PickUpCard;