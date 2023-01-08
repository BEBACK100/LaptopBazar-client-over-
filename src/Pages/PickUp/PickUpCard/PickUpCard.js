import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const PickUpCard = ({ laptopinfo, setLaptopinfo, refetch }) => {
    const { model, title, price, location, } = laptopinfo;

    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const model = form.model.value;
        const location = form.location.value;


        const booking = {
            model,
            price,
            name,
            email,
            phone,
            location

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setLaptopinfo(null);
                    toast.success(<div className='flex justify-center items-center h-full'>

                        <div className='w-8 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                        <p className='text-7xl font-thin'>Booking is success</p>
                        <div className='w-8 h-12 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-800'></div>
                    </div>)
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })



    }

    return (
        <>
            <input type="checkbox" id="pick-up" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h1 className='text-3xl '>Your Selected Laptop:<span className='text-green-400 font-bold'>{title}</span> </h1>

                    <h3 className="font-bold text-2xl">Model Number:{model} </h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10 text-center'>
                        <h1>Model Number</h1>
                        <input type="text" name="model" readOnly value={model} className="input w-full text-2xl  input-bordered " />
                        <input type="text" name="price" readOnly value={price} className="input w-full input-bordered " />
                        <h1>User Name</h1>
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <h1>User Email</h1>
                        <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" />
                        <h1>User Phone Number</h1>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <h1>Meeting Location</h1>
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
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