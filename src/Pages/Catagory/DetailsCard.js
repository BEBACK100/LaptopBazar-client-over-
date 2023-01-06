import React from 'react';

const DetailsCard = ({ laptop, setLaptopinfo }) => {
    const { Image, title, location, descripation, orginalPrice, rating, model,
        price, Used, postedDate } = laptop;

    return (
        <div className="card card-compact w-full h-full  ">
            <div className='text-3xl font-bold bg-green-100 text-center'><h1><span className='text-green-400 py-3 text-xl'>Name of Brand:</span> {title}</h1></div>



            <div className='flex'>
                <div> <img className='w-1/2 items-center text-center mt-5 ml-8' src={Image} alt="" /></div>
                <div className='text-3xl font-bold bg-green-100 text-center'><h1><span className='text-green-400 py-3 text-xl'>Laptop Model:</span> {model}</h1></div>
            </div>
            <div className="card-body">

                <p><span className='text-2xl text-success'>Descripation:</span> {descripation} </p>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-green-600 font-bold'>Resale Price :<span className='text-success font-bold'>{price}TK</span> </h1>
                        <h1 className='text-green-600 font-bold'>Original Price :<span className='text-success font-blod'>{orginalPrice}TK</span></h1>

                    </div>
                    <div>
                        <h1 className='text-green-600 font-bold'>Meeting Location :<span className='text-success font-blod'>{location}</span></h1>

                        <h1 className='text-green-600 font-bold'>Used :<span className='text-success font-blod'>{Used} Years</span></h1>
                    </div>
                </div>
            </div>
            <div className="card text-center justify-center my-5">

                <label htmlFor="pick-up"
                    className="btn btn-success   text-2xl font-bold"
                    onClick={() => setLaptopinfo(laptop)}>Booking</label>
            </div>
        </div>
    );
};

export default DetailsCard;