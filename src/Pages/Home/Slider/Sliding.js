import React from 'react';


const Sliding = ({ slide }) => {
    const { image, previous, id, next } = slide
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full h-3/4 backgroundImage mb-4">
            <div className='img-gradient'>
                <img className='rounded-2xl w-full' src={image} alt="" />
            </div>
            <div className="absolute flex  transform -translate-y-1/2  left-5  top-1/4 pl-4 gap-4  ">
                <div className='text-5xl py-3 text-white shadow-amber-200 font-bold '>
                    <h1 className='text-success'>Buy and Sell Laptop</h1>
                    <h1 className='text-xl w-1/2 mt-4   absolute justify-end   gap-4'>You can buy and sell Your Laptop in your Limit</h1>

                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                <a href={`#slide${previous}`} className="btn btn-circle bg-green-400">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-green-400">❯</a>
            </div>
        </div>

    );
};

export default Sliding;