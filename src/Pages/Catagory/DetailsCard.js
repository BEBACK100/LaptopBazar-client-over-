import React from 'react';

const DetailsCard = ({ laptop }) => {
    const { Image, title, location, descripation, price, rating } = laptop;
    console.log(laptop)
    return (
        <div className="card card-compact w-full h-full  shadow-xl">
            <div className='text-3xl font-bold bg-green-100 text-center'><h1><span className='text-green-400 py-3 text-xl'>Name of Brand:</span> {title}</h1></div>

            <img className='w-1/2 items-center text-center mt-5 ml-8' src={Image} alt="" />
            <div className="card-body">

                <p><span className='text-2xl text-success'>Descripation:</span> {descripation} </p>
                <div className='flex justify-between'>
                    <div>
                        <h1>Price :{price}TK</h1>
                        <h1>Ration:{rating} </h1>
                    </div>
                    <div> <h1><span className='text-success text-xl'>Location:</span> {location} </h1></div>
                </div>
            </div>
            <div className="card text-center justify-center mb-8">
                <button className="btn btn-success   text-4xl font-bold">Pick Up</button>
            </div>
        </div>
    );
};

export default DetailsCard;